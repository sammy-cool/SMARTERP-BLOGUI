import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './App';
import configStore from './configStore/configStore'

const store = configStore()

const jsx=(
  <Provider store={store}>
    <App/>
  </Provider>
)
ReactDOM.render(
  jsx,
  document.getElementById('root')
)