import {CNST} from "./../../constants"

// export function toggleNotificationAction(data) {
//   return {
//     type: CNST.APP.TOGGLE_NOTIFICATION.SUCCESS,
//     payload: data,
//   };
// }
export function setColorMethodAction (data){
  return{
    type: CNST.SET_COLOR_METHOD.SUCCESS,
    payload: data
  }
}

