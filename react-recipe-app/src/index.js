import React from 'react';
import ReactDOM from 'react-dom/client'; // Use react-dom/client in React 18
import App from './App';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { store } from './store'; // Import your Redux store
import "./styles/index.scss";

// Create a root element using ReactDOM.createRoot (for React 18)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app wrapped with the Redux Provider
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Provide the Redux store */}
      <App />
    </Provider>
  </React.StrictMode>
);
