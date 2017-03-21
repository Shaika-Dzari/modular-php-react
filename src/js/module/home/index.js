import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'whatwg-fetch';

import store from './store/index.js';
import Alert from '../../component/alert.jsx';

const App = () => {
    return (
        <Provider store={store}>
            <Alert message="Alert Message avec React, Redux et Fetch..." />
        </Provider>
    );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);