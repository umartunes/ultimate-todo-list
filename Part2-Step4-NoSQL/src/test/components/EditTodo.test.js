import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import EditTodo from '../../components/EditTodo';
import store from '../../config/store'
import { Provider } from 'react-redux'



test('Should Render Todo Form  Correctly', () => {

    const renderer = new ReactShallowRenderer();

    renderer.render(
        <Provider store={store}>
            <EditTodo />
        </Provider>
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
})