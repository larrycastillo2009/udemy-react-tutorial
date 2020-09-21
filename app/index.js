var React = require('react');
var ReactDOM = require('react-dom');
// var App = require('./components/App');
function Person(){
    return (
        <div className="person">
        <h1>Larry</h1>
        <p>Your Age: 29</p>
    </div>
);
}
ReactDOM.render(<Person/>,document.querySelector('#p1'));