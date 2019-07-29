import { LOG_IN, SIGN_OUT } from "../action/actionType";

const initStore = {
  isLoggedIn: false
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
    default: return state;

  }
}


export default authReducer