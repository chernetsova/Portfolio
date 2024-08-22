import { makeAutoObservable } from "mobx";

class Msg {
  show = false;

  constructor() {
    makeAutoObservable(this)
  }

  updateShow(flag: boolean) {
    this.show = flag
  }
}

export default new Msg();