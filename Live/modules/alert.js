"use strict";

export function Alert(data) {
  this.show = false;
  this.block = data;

  this.updateShow = (flag) => {
    this.show = flag;
    if ( flag === true ) {
      this.block.classList.remove("no-display");
    } else {
      this.block.classList.add("no-display");
    }
  }
  this.getShow = () => this.show;
}