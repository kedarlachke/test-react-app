import checkPropsTypes from 'check-prop-types'

export const findByTestAtrr=(component,attr)=>{
    const wrapper=component.find(`[data-test='${attr}']`)
    //console.log(wrapper.debug())
    return wrapper
}

export const checkProps=(component,expectedProps)=>{
     const propsErr=checkPropsTypes(component.propTypes,expectedProps,"props",component.name)
     return propsErr
}