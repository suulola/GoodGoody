import { LOG_IN, SIGN_OUT, SET_USER_DETAIL } from "./actionType";

export const logIn = () => dispatch => {
  dispatch({
    type: LOG_IN,
  })
}
export const logOut = () => dispatch => {
  dispatch({
    type: SIGN_OUT,
  })
}
export const setUserDetails = (userDetails) => dispatch => {
  console.log(userDetails)
  dispatch({
    type: SET_USER_DETAIL,
    payload: userDetails
  })
}