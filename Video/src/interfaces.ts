export interface IAppVideoState {
  play: boolean,
}

export interface IAppVideoDispatch {
  addTimeActions: Function,
  loadingDataAPIActions: Function,
  updatePointTimestampActions: Function
}

export interface IAppVideoProps extends IAppVideoDispatch {
  width?: number,
  height?: number,
  src: string,
  type?: string
}

export interface IAppListProps extends IAppVideoDispatch {
  title: string,
  list?: any[],
}

export interface IVideoState extends IApiState<IApiItem> {
  listTimeActions?: Array<{ms: number,t: string}>,
  pointTimestamp?: number,
}

export interface IApiItem {
  id: number,
  timestamp: number,
  duration: number,
  zone: {
    left: number,
    top: number,
    width: number,
    height: number
  }
}

export interface IApiState<T> {
  error?: string,
  data?: T[],
  rectangles?: T[],
}

export interface IDataApi<T> {
  pointTimestamp: number,
  data: T[]
}

export interface IDataRectangle<T> {
  dataRectangle: T[],
  rectangles: T[],
}

export interface IRectangleProp {
  left: number,
  top: number,
  width: number,
  height: number,
  duration: number
}

export interface IRectangleState {
  animate: boolean
}