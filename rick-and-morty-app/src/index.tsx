import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { CookiesProvider } from 'react-cookie';
import AuthMiddleware from './helper/AuthMiddleware';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <AuthMiddleware>
          <App />
        </AuthMiddleware>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
