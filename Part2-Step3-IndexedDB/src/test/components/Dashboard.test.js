import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Dashboard from '../../components/Dashboard';



test('Should Render Dashbord Correctly',()=>{
   
    const renderer = new ReactShallowRenderer();
    renderer.render(<Dashboard/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})