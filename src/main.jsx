import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import store from './app/store.js';
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
  </BrowserRouter>,
)
