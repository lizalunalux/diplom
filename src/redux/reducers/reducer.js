import app from "../stores/app";
import {CNST} from "../../constants";

export default function (state = app, action) {
  switch (action.type) {
    case CNST.SET_COLOR_METHOD.SUCCESS:
      return {
        ...state,
        colorMethod: action.payload,
      };
    default:
      return state;
  }
}
