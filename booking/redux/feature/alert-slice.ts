import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateAlert, AlertState } from "@/types"

const initialState = {
  value: {
    isShow: false,
    type: undefined,
    message: undefined
  } as AlertState
} as InitialStateAlert

export const alert = createSlice({
  name: "alert",
  initialState,
  reducers: {
    alertHide: () => initialState,
    alertShow: (state, action: PayloadAction<any>) => {
      return {
        value: {
          isShow: action.payload.isShow,
          type: action.payload.type,
          message: action.payload.message
        }
      }
    }
  }
});

export const { alertHide, alertShow } = alert.actions;
export default alert.reducer;