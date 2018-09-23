import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Section from '../../components/Section';




test('Should Render Section Page Correctly',()=>{
    
    const renderer = new ReactShallowRenderer();
    renderer.render(<Section/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})