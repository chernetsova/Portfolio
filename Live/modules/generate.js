"use strict";

export function Generate() {
  const points = this.getPoints();

  this.addPoint = (p) => {
    this.setPoints(p);
    return document.getElementById(`${p.x}_${p.y}`).classList.add("full");
  }

  this.init = (data) => {
    if ( points.length > 0 ) {
      if ( !points.some((item) => item.x === data.x && item.y === data.y) ) {
        this.addPoint(data);
      } else return
    } else {
      this.addPoint(data);
    }
  }
}