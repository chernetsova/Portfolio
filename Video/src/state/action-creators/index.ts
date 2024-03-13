import { ActionType } from "../action-types";
import { IApiItem } from "../../interfaces";

export const addTimeActions = (t: {ms: number, t: string}) => ({
  type: ActionType.addTimeActions,
  payload: t
});

export const updatePointTimestampActions = (point: number) => ({
  type: ActionType.updatePointTimestamp,
  payload: point
})

export const loadingDataAPIActions = () => ({
  type: ActionType.loadingDataAPI,
});

export const loadingGetErrorActions = (error: string) => ({
  type: ActionType.loadingGetError,
  payload: error
});

export const loadingSuccessActions = (data: Array<IApiItem>) => ({
  type: ActionType.loadingGetSuccess,
  payload: data
});

export const dataApiGetRejectedActions = () => ({
  type: ActionType.dataApiGetRejected,
});

export const updateRectanglesActions = (data: Array<IApiItem>) => ({
  type: ActionType.updateRectangles,
  payload: data
});

export const loadingDataRectangle = (data: Array<IApiItem>) => ({
  type: ActionType.loadingDataRectangle,
  payload: data
})