import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import SideNave from '../../components/SideNave';




test('Should Render Side Nav Correctly',()=>{
    
    const renderer = new ReactShallowRenderer();
    renderer.render(<SideNave/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})