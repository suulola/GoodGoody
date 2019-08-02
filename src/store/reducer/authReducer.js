import { LOG_IN, SIGN_OUT, SET_USER_DETAIL } from "../action/actionType";

const initStore = {
  isLoggedIn: false,
  firstName: "",
  phoneNumber: "",
  email: "",
  surname: "",
  middleName: "",
  facebook: "",
  twitter: ""
}

const authReducer = (state = initStore, action) => {
  switch(action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true
      };

    case SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false
      };
    case SET_USER_DETAIL:
      return {
        ...state,
        firstName: action.payload.firstName,
        phoneNumber: action.payload.phoneNumber,
        email: action.payload.email,
        surname: action.payload.surname
      }
    default: return state;
  }
}


export default authReducer