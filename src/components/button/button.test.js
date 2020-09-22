import React from 'react'
import {findByTestAtrr,checkProps} from '../../../utils'
import SharedButton from './index'
import {shallow} from 'enzyme'

describe("SharedButton Component",()=>{
    describe("checking props types",()=>{
        it("should NOT throw warnings",()=>{
            const expectedProps={
                buttonText:'Example button text',
                emitEvent:()=>{    }                
            }
            const propsErr=checkProps(SharedButton,expectedProps)
            expect(propsErr).toBeUndefined()
        })
    })

    describe("Render",()=>{
        let wrapper;
        beforeEach(()=>{
            const props ={
                buttonText:'Example button text',
                emitEvent:()=>{    }                
            }
            wrapper =shallow(<SharedButton {...props}/>)
        })
        it("should render an button",()=>{
            const button = findByTestAtrr(wrapper,"buttonComponent")
            expect(button.length).toBe(1)
        })
    })
})
