import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Functional Components

// Functional Component always recieve arguments as an object
// immutable Elements
// function Clock({ abc }) {
//   // JSX Elements ... babel -> transpiler
//   return (
//     <h1 className='heading'>
//       <span className='text'>{new Date().toLocaleTimeString(abc)}</span>
//     </h1>
//   );
// }
