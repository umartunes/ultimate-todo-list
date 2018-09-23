import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Routes from '../../components/Routes';




test('Should Render Add Todo Page Correctly',()=>{
    
    const renderer = new ReactShallowRenderer();
    renderer.render(<Routes/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})