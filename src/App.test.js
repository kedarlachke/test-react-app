import React from 'react'
import {findByTestAtrr,checkProps,testStore} from '../utils'
import {shallow} from 'enzyme'
import App from './App'


const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
};

describe("App Component",()=>{
    let wrapper;
    beforeEach(()=>{
        const initialState={
            postreducer:[{
                title:"Test title 1",
                body:"Test body 1",
            },{
                title:"Test title 2",
                body:"Test body 2",
            },{
                title:"Test title 3",
                body:"Test body 3",
            }]
        }
        wrapper=setUp(initialState)
    });
  
    it("Should render without errors",()=>{
        const component= findByTestAtrr(wrapper,"appComponent");
        
        expect(component.length).toBe(1)
    })

    it("exampleMethod_updatesState function should update the function",()=>{
        const classInstance = wrapper.instance();
        classInstance.fetch();
        const newState=classInstance.state.hideBtn

        expect(newState).toBe(true)
    })
    it("exampleMethod_returnsAValue function should return a value",()=>{
        const classInstance = wrapper.instance();
        const returnval=classInstance.exampleMethod_returnsAValue(0);
        

        expect(returnval).toBe(3)
    })
})