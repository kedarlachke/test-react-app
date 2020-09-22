import checkPropsTypes from 'check-prop-types'
import {applyMiddleware,createStore} from 'redux'
import rootReducer from '../src/reducer'
import {middleware} from  './../src/createStore'

export const findByTestAtrr=(component,attr)=>{
    const wrapper=component.find(`[data-test='${attr}']`)
    //console.log(wrapper.debug())
    return wrapper
}

export const checkProps=(component,expectedProps)=>{
     const propsErr=checkPropsTypes(component.propTypes,expectedProps,"props",component.name)
     return propsErr
}

export const testStore =(initialState)=>{
    const createStoreWithMiddleware=applyMiddleware(...middleware)(createStore)
    return createStoreWithMiddleware(rootReducer,initialState) 
}