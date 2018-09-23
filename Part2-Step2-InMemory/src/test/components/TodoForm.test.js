import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import TodoForm from '../../components/TodoForm';




test('Should Render Todo Form  Correctly',()=>{
    
    const renderer = new ReactShallowRenderer();
    renderer.render(<TodoForm/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})