import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAtrr,checkProps} from '../../../utils'
import ListItem from './index'

describe("ListItem Component",()=>{
    describe("Checking props types",()=>{
        it("should not throw warning",()=>{
            const expectedProps={
                title:"test title",
                desc:"Some test text"
            }
            const propsErr=checkProps(ListItem,expectedProps)
            expect(propsErr).toBeUndefined()
        })
    });


    describe("Component Render",()=>{
        let wrapper;
        beforeEach(()=>{
            const props={
                title:"test title",
                desc:"Some test text"
            }
            wrapper= shallow(<ListItem {...props}/>)

        })
        
        it("Should render Listitem componet ",()=>{
            const component=findByTestAtrr(wrapper,'listItemComponent')
            expect(component.length).toBe(1)
        })

        it("Should render a title ",()=>{
            const component=findByTestAtrr(wrapper,'componentTitle')
            expect(component.length).toBe(1)
        })

        it("Should render a description ",()=>{
            const component=findByTestAtrr(wrapper,'componentDesc')
            expect(component.length).toBe(1)
        })
    })

    describe("Should NOT render",()=>{
        let wrapper ;
        beforeEach(()=>{
            const props={
                desc:"Some test text"
            }
            wrapper= shallow(<ListItem {...props}/>)
        })

        it("Component is not rendered",()=>{
            const component=findByTestAtrr(wrapper,"listItemComponent")
            expect(component.length).toBe(0)
        })
    })
})