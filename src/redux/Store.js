import {createStore, applyMiddleware} from 'redux'
import rootReducer from './RootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
// Thunk is required to create async action creators

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger,thunk)))

export default store;