import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import {findByTestAtrr,checkProps} from '../../../utils'


const setUP=(props)=>{
 const component=shallow(<Headline {...props}/>)
 return component;
}
describe("Headline Component",()=>{
       describe("Checking Props types",()=>{
        it("should not throw a working",()=>{
            const exprectedProps={
                header:"test header",
                desc:"test desc",
                temparr:[{
                    fName: 'First Name',
                    lName: 'Last Name',
                    email: 'test@gmail.om',
                    age: 24,
                    onlineStatus: false
                }]
            };
            const propsErr=checkProps(Headline,exprectedProps)
            
            expect(propsErr).toBeUndefined();

        })
    })

    describe("Headline component with props",()=>{
        let wrapper;
        beforeEach(()=>{
            const props={
                header:"Test Header",
                desc:"Test Desc"
            }
            wrapper=setUP(props);
        })
        it("Should render without errors",()=>{
            const component=findByTestAtrr(wrapper,"HeadlineComponent")
            expect(component.length).toBe(1)
        })

        it("Should render H1 without errors",()=>{
            const component=findByTestAtrr(wrapper,"header")
            expect(component.length).toBe(1)
        })
       
        it("Should render p tag without errors",()=>{
            const component=findByTestAtrr(wrapper,"desc")
            expect(component.length).toBe(1)
        })
    })

    describe("Headline component without props",()=>{
        let wrapper;
        beforeEach(()=>{
            const props={
                desc:"Test Desc"
            }
            wrapper=setUP(props);
        })
        it("Should not render without errors",()=>{
            const component=findByTestAtrr(wrapper,"HeadlineComponent")
            
            expect(component.length).toBe(0)
        })
    })
})