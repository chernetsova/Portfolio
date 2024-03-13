import { IApiItem } from "../../interfaces";
import { ActionType } from "../action-types";

interface IAddTimeActions {
  type: ActionType.addTimeActions,
  payload: {ms: number, t: string}
}

interface IUpdatePointTimestampActions {
  type: ActionType.updatePointTimestamp,
  payload: number
}

interface ILoadingAPIActions {
  type: ActionType.loadingDataAPI,
}

interface ILoadingDataRectangleActions {
  type: ActionType.loadingDataRectangle,
  payload: Array<IApiItem>
}

interface ILoadingGetErrorActions {
  type: ActionType.loadingGetError,
  payload: string
}

interface ILoadingSuccessActions {
  type: ActionType.loadingGetSuccess,
  payload: Array<IApiItem>
}

interface IDataApiGetRejectedActions {
  type: ActionType.dataApiGetRejected,
}

interface IUpdateRectanglesActions {
  type: ActionType.updateRectangles,
  payload: Array<IApiItem>
}
  
export type IAction = IAddTimeActions |
                      IUpdatePointTimestampActions |
                      ILoadingAPIActions | 
                      ILoadingGetErrorActions |
                      ILoadingSuccessActions |
                      IDataApiGetRejectedActions |
                      IUpdateRectanglesActions |
                      ILoadingDataRectangleActions;