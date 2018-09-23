import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import TaskList from '../../components/TaskList';
import store from '../../config/store'
import { Provider } from 'react-redux'



test('Should Render Todo Form  Correctly', () => {

    const renderer = new ReactShallowRenderer();

    renderer.render(
        <Provider store={store}>
            <TaskList />
        </Provider>
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
})