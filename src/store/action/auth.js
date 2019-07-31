import { LOG_IN, LOG_OUT } from "./actionType";

export const logIn = () => dispatch => {
  dispatch({
    type: LOG_IN,
  })
}
export const logOut = () => dispatch => {
  console.log('abc')
  dispatch({
    type: LOG_OUT,
  })
}