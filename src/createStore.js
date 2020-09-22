import {createStore,applyMiddleware} from 'redux'
import RootReducer from './components/reducer'
import ReduxThunk from 'redux-thunk'

const middleware=[ReduxThunk]
export const createStoreWithMiddleware=applyMiddleware(...middleware)(createStore)

export const store=createStoreWithMiddleware(RootReducer)