import React from 'react';
import {shallow} from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

// test('Should Render Header Correctly',()=>{
//     const wrapper = shallow(<Header/>);
//     expect(wrapper).toMatchSnapshot();
// })

test('Should Render Header Correctly',()=>{
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})