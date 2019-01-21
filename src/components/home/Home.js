import React, { Component, Fragment } from 'react';
import TodoList from './TodoList.js';


let d = new Date();
let todayDt = d.getFullYear()+'.'+(d.getMonth()+1)+'.'+d.getDate();

class Home extends Component {
    state = {
        date: todayDt,
        todo : [
            {
                id: 0,
                complete: false,
                contents: '코딩하기',
                person: ['나현','지훈'],
            },
            {
                id: 1,
                complete: true,
                contents: '숙제하기',
                person: ['나현','지훈'],
            },
            {
                id: 2,
                complete: false,
                contents: '멘토링 하기',
                person: ['나현','지훈'],
            }
        ]
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