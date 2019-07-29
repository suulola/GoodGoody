import { LOG_IN } from "./actionType";

export const logIn = () => dispatch => {
  dispatch({
    type: LOG_IN,
  })
}