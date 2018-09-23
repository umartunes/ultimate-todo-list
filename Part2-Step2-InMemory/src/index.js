import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './config/store'
import App from './App'
import registerServiceWorker from './registerServiceWorker'


require( './config/global' )
require( './config/axios' )
require( './config/fontawesome' )

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)


registerServiceWorker();