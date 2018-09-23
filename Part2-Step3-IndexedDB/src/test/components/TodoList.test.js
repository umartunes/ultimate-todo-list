import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import TodoList from '../../components/TodoList';
import { Provider } from "react-redux";

import store from '../../config/store';



test('Should Render Todo List  Correctly',()=>{
    
    const renderer = new ReactShallowRenderer();
    renderer.render(
        < Provider store={store}>
    <TodoList/>
    </Provider>
    );
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})