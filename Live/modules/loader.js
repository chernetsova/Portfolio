"use strict";

export function Loader() {
  this.load = false;
  this.content = "Ожидайте. Идёт процесс создания игрового поля.";
  this.container = document.getElementById("loader");

  const setLoad = (flag) => this.load = flag;

  const getContainer = () => this.container;

  const getContent = () => this.content;

  this.show = () => {

    let gContainer = getContainer();
    let gContent = getContent();

    gContainer.innerHTML = gContent;
    gContainer.classList.remove("no-display");

    setLoad(true);
  }

  this.hide = () => {

    let gContainer = getContainer();

    gContainer.innerHTML = "";
    gContainer.classList.add("no-display");

    setLoad(true);
  }

}