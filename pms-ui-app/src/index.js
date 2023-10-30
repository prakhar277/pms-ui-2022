import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Styles/tailwind.output.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';
import { Windmill } from '@windmill/react-ui'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <Windmill usePreferences>
  <App />
  </Windmill>
</BrowserRouter>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
