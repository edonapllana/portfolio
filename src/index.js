import React from 'react';
//importing react-dom package
import ReactDOM from 'react-dom';
import App from './App';
import './main.css'

//calling the function to display the App content in index.html > root div 
ReactDOM.render(<App/>, document.querySelector('#root'))

//export default index;