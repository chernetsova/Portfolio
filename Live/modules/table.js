"use strict";

export function Table() {
  this.rows = null;
  this.cols = null;
  this.container = null;
  this.points = [];
  this.play = false;
  this.frame = null;
  this.load = false;

  const setRows = (r) => this.rows = r;
  this.getRows = () => this.rows;

  const setCols = (c) => this.cols = c;
  this.getCols = () => this.cols;

  const setContainer = (field) => this.container = field;
  const getContainer = () => this.container;

  this.setPoints = (p) => {
    this.points.push(p);
  }

  this.getPoints = () => this.points;

  this.removePoints = (idx) => {
    this.points.splice(idx, 1);
  }

  this.resetPoints = () => this.points = [];

  const setFrame = (f) => this.frame = f;
  const getFrame = () => this.frame;

  const updateLoad = (flag) => this.load = flag;
  this.getLoad = () => this.load;

  this.resetTable = () => {
    let arrTr = getContainer().querySelectorAll("tr");
    const frame = getFrame();

    arrTr.forEach((tr) => tr.remove());
    frame.classList.remove("tor");

    setRows(null);
    setCols(null);
    setContainer(null);
    this.resetPoints();
  }

  this.init = (data) => {
    setRows(data.rows);
    setCols(data.cols);
    setContainer(data.container);
    setFrame(data.frame);

    const rowsData = this.getRows();
    const colsData = this.getCols();
    const containerData = getContainer();
    const frame = getFrame();
    frame.classList.add("tor");

    for ( let r = 0; r < rowsData; r++ ) {
      const tr = document.createElement('tr');
      containerData.appendChild(tr);

      for ( let c = 0; c < colsData; c++ ) {
        const td = document.createElement('td');
        td.setAttribute("data-x", r);
        td.setAttribute("data-y", c);
        td.setAttribute("id", `${r}_${c}`);
        tr.appendChild(td)
      }
    }

    updateLoad(true);

  }
}