import {createStore,applyMiddleware} from 'redux'
import RootReducer from './reducer'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
export const middleware=[ReduxThunk]
export const createStoreWithMiddleware=composeWithDevTools(applyMiddleware(...middleware))(createStore)

export const store=createStoreWithMiddleware(RootReducer)