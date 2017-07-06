var React=require('react');
var ReactDOM=require('react-dom');
var $ = require('jquery');
import Main from '../views/main.jsx';

window.onload = function(){
  ReactDOM.render(<Main />, document.getElementById('app'));
}
