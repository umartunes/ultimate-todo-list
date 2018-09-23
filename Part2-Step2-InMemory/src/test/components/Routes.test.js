import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Routes from '../../components/Dashboard';




test('Should Render Routes Correctly',()=>{
    
    const renderer = new ReactShallowRenderer();
    renderer.render(<Routes/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})