import React, { Component } from 'react';
import TodoInfo from './TodoInfo';

class TodoList extends Component {
    static defaultProps = {
        data: []
    }

    render() {
        const {data, onUpdate} = this.props;
        const list = data.map(
            info => (
                <TodoInfo
                    info={info}
                    key={info.id}
                />
            )
        )
        console.log(list)
        return (
            <div>
                {list}
            </div>
        );
   
    }
}

export default TodoList;