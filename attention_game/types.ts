type ArrayType<T> = T extends Array<infer Item> ? Item : T;

export interface IPropsGame {
  data: ArrayType<any>,
  puzzle: IImage | null
}

export interface IImage {
  id: number,
  name: string,
  data: string
}

export enum StepGame {
  Play = "play",
  Win = "win",
  Fail = "fail"
}

export interface IPropsGameImage {
  data: string;
  onClick?: () => void;
  className?: string;
}