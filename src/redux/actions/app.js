import {CNST} from "./../../constants"

export function setColorMethodAction (data){
  return{
    type: CNST.SET_COLOR_METHOD.SUCCESS,
    payload: data
  }
}

export function setSvgPathsAction (data){
  return{
    type: CNST.SET_SVG_PATHS.SUCCESS,
    payload: data
  }
}

export function setColorsToSet (data){
  return{
    type: CNST.SET_COLORS_TO_SET.SUCCESS,
    payload: data
  }
}


