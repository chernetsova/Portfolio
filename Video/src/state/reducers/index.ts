import { combineReducers } from "redux";
import apiReducer from "./apiReducer";
import videoReducer from "./videoReducer"

const reducers = combineReducers({
  video: videoReducer,
  api: apiReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;