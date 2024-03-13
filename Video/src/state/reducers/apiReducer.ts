import { ActionType } from "../action-types";
import { IAction } from "../actions";
import { IApiState, IApiItem } from "../../interfaces";

const initialState: IApiState<IApiItem> = {
  error: "",
  data: [],
  rectangles: []
};

const reducer = (state: IApiState<IApiItem> = initialState, action: IAction) => {
  switch(action.type) {
    case ActionType.loadingGetSuccess: 
      return {
        ...state,
        error: "",
        data: action.payload
      }
    case ActionType.loadingDataRectangle:
      return {
        ...state,
        rectangles: [...action.payload], 
      }
    case ActionType.loadingGetError:
      return {
        ...state,
        error: action.payload,
        data: state.data
      } 
    default:
      return state;
  }
}

export default reducer;