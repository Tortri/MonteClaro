import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from './App.jsx'; // Import your main App component

// Get the root element from index.html where the React app will be mounted
const rootElement = document.getElementById('root');

// Create a React root and render the App component into it
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
