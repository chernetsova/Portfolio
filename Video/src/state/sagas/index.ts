import { takeEvery, put, call, select } from "@redux-saga/core/effects";
import { getData, getDataForRectangle } from "../../api";
import { ActionType } from "../action-types";
import { State } from "../";
import { loadingSuccessActions, loadingGetErrorActions, loadingDataRectangle} from "../action-creators";
import { IApiItem } from "../../interfaces";

export function* loadData() {
  try {
    const dataApi: [] = yield call(getData);
    yield put(loadingSuccessActions(dataApi));
  } catch {
    yield put(loadingGetErrorActions("data request failed with an error"));
  }
}

export function* loadDataForRectangle() {
  const pointTimestamp: number  = yield select( (state: State) => state.video.pointTimestamp );
  const dataApi: Array<IApiItem> = yield select( (state: State) => state.api.data );
  const dataRectangle: Array<IApiItem> = yield call(getDataForRectangle, {data: dataApi, pointTimestamp: pointTimestamp});
  yield put(loadingDataRectangle(dataRectangle));
}

export function* saveData() {
  yield call(loadData);
  yield call(loadDataForRectangle);
}

export function* watchFetchData() {
  yield takeEvery(ActionType.loadingDataAPI, saveData);
}
  
export default function* rootSaga() {
  yield watchFetchData()
}