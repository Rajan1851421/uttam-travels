import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <Auth0Provider
  //   domain="dev-tdgj26anejqx4bkv.us.auth0.com"
  //   clientId="mGxrG996tlJm4kUINQQ4vnk8IiuFofPM"
  //   authorizationParams={{redirect_uri: window.location.origin}}
  // >
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </React.StrictMode>,
  </BrowserRouter>
  // </Auth0Provider>
)
