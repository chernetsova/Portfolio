import { Table } from "./modules/table.js";
import { Generate } from "./modules/generate.js";
import { Alert } from "./modules/alert.js";
import { Loader } from "./modules/loader.js";

let table = null;
let generate = null;
const alert = new Alert(document.getElementById("alert"));
const loader = new Loader();


export function createTable(data) {
  loader.show();

  table = new Table();
  Generate.prototype = table;
  generate = new Generate();

  let timeout = setTimeout(() => { 
    table.init(data);

    let isLoadTable = table.getLoad();
    
    if ( isLoadTable ) {
      loader.hide();
      clearTimeout(timeout);
    }

  }, 100);
}

export function createPoint(data) {
  generate.init(data);
}

export function countPoints() {
  return table.getPoints();
}

export function showAlert(flag) {
  alert.updateShow(flag);
}

export function playPoints(field) {
  let arrPoints = table.getPoints();
  const cols = table.getCols() - 1; 
  const rows = table.getRows() - 1;

  const addToNear = (el, arr) => {
    arr.push(el);
  };

  const checkFull = (i, j) => field.rows[i].cells[j].classList.contains('full');

  const checkNear = (x, y) => {
    let isN_1 = ((x-1 >= 0) && (x-1 <= rows) && (y >=0) && (y <= cols)) ? checkFull(x-1, y) : false;
    let isN_2 = ((x+1 <= rows) && (x+1 >= 0) && (y >=0) && (y <= cols)) ? checkFull(x+1, y) : false;
    let isN_3 = ((x >= 0) && (x <= rows) && (y-1 >= 0) && (y-1 <= cols)) ? checkFull(x, y-1) : false;
    let isN_4 = ((y+1 <= cols) && (y+1 >= 0) && (x >= 0) && (x <= rows)) ? checkFull(x, y+1) : false;
    let isN_5 = ((x-1 >= 0) && (x-1 <= rows) && (y-1 >= 0) && (y-1 <= cols)) ? checkFull(x-1, y-1) : false;
    let isN_6 = ((x-1 >= 0) && (x-1 <= rows) && (y+1 <= cols) && (y+1 >= 0)) ? checkFull(x-1, y+1) : false; 
    let isN_7 = ((y-1 >= 0) && (y-1 <= cols) && (x+1 <= rows) && (x+1 >= 0)) ? checkFull(x+1, y-1) : false; 
    let isN_8 = ((y+1 <= cols) && (y+1 >= 0) && (x+1 <= rows) && (x+1 >= 0)) ? checkFull(x+1, y+1) : false; 
    return { 
      n1: { isNear: isN_1, coords: [x-1, y] }, 
      n2: { isNear: isN_2, coords: [x+1, y] },
      n3: { isNear: isN_3, coords: [x, y-1] },
      n4: { isNear: isN_4, coords: [x, y+1] }, 
      n5: { isNear: isN_5, coords: [x-1, y-1] },
      n6: { isNear: isN_6, coords: [x-1, y+1] },
      n7: { isNear: isN_7, coords: [x+1, y-1] },
      n8: { isNear: isN_8, coords: [x+1, y+1] }
    }
  }

  const updatePoint = (t) => {
    let fn = (arr) => {
      for (let m = 0; m < arr.length; m++ ) {
        let xTD = parseInt(arr[m].x);
        let yTD = parseInt(arr[m].y);
        let arrNear = [];
        let getNear = checkNear(xTD, yTD);

        for ( let i in getNear ) {
          if ( getNear[i].isNear === true ) {
            addToNear(i, arrNear);
          } else { 

            let getNearNull = checkNear(getNear[i].coords[0], getNear[i].coords[1]);
            let arrFull = [];

              for ( let k in getNearNull ) {
                if ( getNearNull[k].isNear === true ) {
                  arrFull.push(k);
                }
              }
        
              if ( arrFull.length === 3 ) {
                let newX = getNear[i].coords[0];
                let newY = getNear[i].coords[1];
                let isValidCoords = newX > 0 && newX <= rows && newY > 0 && newY <= cols;

                if ( isValidCoords ) {
                  generate.addPoint({x: `${getNear[i].coords[0]}`, y: `${getNear[i].coords[1]}`});
                } 
              }
            }
          }

          let arrNearLength = arrNear.length;

          if (arrNearLength < 2 || arrNearLength > 3 ) {
            table.removePoints(arr[m]);
            return field.rows[xTD].cells[yTD].classList.remove("full");
          }
          
        }
            
        return false;
      }

      
      let interval = setInterval(() => {{
        let play = fn(t);

        if (play === false ) {
          clearInterval(interval);
          showAlert(true);
        }
        
      }}, 1000)
  }

  updatePoint(arrPoints);
}

export function resetTable() {
  table.resetTable();
  table = null;
  generate = null;
}