import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './pages/auth/Login';


//redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer/index';

//css
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';

<script src="https://cdn.jsdelivr.net/npm/semantic-ui-calendar-react@latest/dist/umd/semantic-ui-calendar-react.js"></script>


const store = createStore(rootReducer,composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

