import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import EditTodoPage from '../../components/EditTodoPage';
import { Provider } from "react-redux";
import store from '../../config/store';



test('Should Render Edit Todo Page  Correctly', () => {

    const renderer = new ReactShallowRenderer();
    renderer.render(
        < Provider store={store}>
            <EditTodoPage />
        </Provider>
    );
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})