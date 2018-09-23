import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import AddTodoPage from '../../components/AddTodoPage';
import { Provider } from "react-redux";
import store from '../../config/store';



test('Should Render Add Todo page Correctly', () => {

    const renderer = new ReactShallowRenderer();
    renderer.render(
        < Provider store={store}>
            <AddTodoPage />
        </Provider>
    );
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})