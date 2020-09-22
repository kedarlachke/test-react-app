import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import {findByTestAtrr} from '../../../utils'

const setUP=(props)=>{
 const component=shallow(<Headline {...props}/>)
 return component;
}
describe("Headline Component",()=>{
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
            console.log('component.length->'+component.length)
            expect(component.length).toBe(0)
        })
    })
})