import { ActionType } from "../action-types";
import { IAction } from "../actions";
import { IVideoState } from "../../interfaces";

const initialState: IVideoState = {
  listTimeActions: [],
  pointTimestamp: 0
};

const reducer = (state: IVideoState = initialState, action: IAction) => {
  switch (action.type) {
    case ActionType.addTimeActions:
      return {
        ...state,
        listTimeActions: state.listTimeActions?.concat([action.payload])
      }
    case ActionType.updatePointTimestamp:
      return {
        ...state,
        pointTimestamp: action.payload
      }
    default:
      return state;
  }
}

export default reducer;