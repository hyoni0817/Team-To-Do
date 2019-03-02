import React, { Component, Fragment } from 'react';
import TodoList from './TodoList.js';


let d = new Date();
let todayDt = d.getFullYear()+'.'+(d.getMonth()+1)+'.'+d.getDate();

class Home extends Component {
    state = {
        date: todayDt,
        todo : []
    }

    componentDidMount() {
        fetch('/todolist')
          .then(res => res.json())
          .then(todo => this.setState({ todo }));
      }
    
    
    render() {

        return (
            <Fragment>
                <div>
                 <p>{this.state.date}</p>
                </div>
                <div>
                 <TodoList
                  data={this.state.todo}></TodoList>
                </div>
            </Fragment>
            
        );
    }
}

export default Home;