import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Layout from './components/Layout'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

reportWebVitals()
