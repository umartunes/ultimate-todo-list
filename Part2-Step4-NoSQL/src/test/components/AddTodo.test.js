import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import AddTodo from '../../components/AddTodo';
import store from '../../config/store'
import { Provider } from 'react-redux'



test('Should Render Todo Form  Correctly', () => {

    const renderer = new ReactShallowRenderer();

    renderer.render(
        <Provider store={store}>
            <AddTodo />
        </Provider>
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
})