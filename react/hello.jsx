//https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html

import React from 'react';
//import ReactDOM from 'react-dom';
 
class Hello extends React.Component {
  render() {
    return <h1>Hello2, </h1>
  }
}



export { Hello }; //export default Hello;

//ReactDOM.render(<Hello/>, document.getElementById('hello'));
