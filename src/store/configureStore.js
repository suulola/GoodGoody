import { combineReducers, createStore, compose, applyMiddleware} from 'redux'
import authReducer from './reducer/authReducer';
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  auth: authReducer
})

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}


const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}

export default configureStore