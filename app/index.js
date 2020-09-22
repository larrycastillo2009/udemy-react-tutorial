var React = require('react');
var ReactDOM = require('react-dom');
// var App = require('./components/App');
function Person(props){
    return (
        <div className="person">
        <h1>{props.name}</h1>
        <p>Your Age: {props.age}</p>
    </div>
);
}
var app =(
    <div>
    <Person name="Larry" age="29"/>
    <Person name="Max" age="28"/>
    </div>
);
ReactDOM.render(app,document.querySelector('#app'));