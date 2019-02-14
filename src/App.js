import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './components/home/Home.js';
import TodoForm from './components/home/TodoForm.js';

class App extends Component {
  render() {
    return (
      <Fragment>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <div>
          <Home></Home>
        </div>
        <TodoForm></TodoForm>
      </Fragment>


        


    );
  }
}

export default App;
