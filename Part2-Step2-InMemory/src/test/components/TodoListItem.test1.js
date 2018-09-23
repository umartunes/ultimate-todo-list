import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import TodoListItem from '../../components/TodoListItem';




test('Should Render Todo List Item Correctly',()=>{
    
    const renderer = new ReactShallowRenderer();
    renderer.render(<TodoListItem />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})