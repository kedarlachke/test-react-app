  
import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import {findByTestAtrr} from '../../../utils'

const setUp=(props)=>{
    const component = shallow(<Header {...props}/>);
    return component;
}


describe("Header Component",()=>{
    let component;
    beforeEach(()=>{component=setUp()})
    it('should render without errors',()=>{
       const wrapper=findByTestAtrr(component,'headerComponent');
       expect(wrapper.length).toBe(1);

    });

    it('should render a logo',()=>{
       const logo=findByTestAtrr(component,'logoIMG');
       expect(logo.length).toBe(1);

    });

})


