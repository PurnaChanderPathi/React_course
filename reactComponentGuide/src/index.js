import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppRunner from './projects/project1/components/AppRunner';
import App from './projects/project2/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
   
    <AppRunner />
    // <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
