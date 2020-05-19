import app from "../stores/app";
import {CNST} from "../../constants";

export default function (state = app, action) {
  switch (action.type) {
    case CNST.SET_COLOR_METHOD.SUCCESS:
      return {
        ...state,
        colorMethod: action.payload,
      };
    case CNST.SET_SVG_PATHS.SUCCESS:
      return {
        ...state,
        svgPaths: action.payload,
      };
    case CNST.SET_COLORS_TO_SET.SUCCESS:
      return {
        ...state,
        colorsToSet: action.payload,
      };
    default:
      return state;
  }
}
