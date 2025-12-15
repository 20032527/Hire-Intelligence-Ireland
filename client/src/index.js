import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Creates the React root and attaches app to the DOM */
/* Ref: https://react.dev/reference/react-dom/client/createRoot */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  /* Helps catch common issues during development */
  /* Ref: https://react.dev/reference/react/StrictMode */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* Optional performance measuring */
/* Ref: https://create-react-app.dev/docs/measuring-performance/ */

reportWebVitals();
