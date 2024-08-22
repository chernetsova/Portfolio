import { makeAutoObservable } from "mobx";
import { StepGame } from "@/types";

class Game {
  step: StepGame = StepGame.Play;

  constructor() {
    makeAutoObservable(this)
  }

  updateStep(value: StepGame) {
    this.step = value
  }

}

export default new Game();