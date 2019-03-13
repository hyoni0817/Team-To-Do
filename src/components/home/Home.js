import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TodoList from './TodoList.js';

let d = new Date();
let todayDt = d.getFullYear()+'.'+(d.getMonth()+1)+'.'+d.getDate();

const styles = theme => ({
    dateAndList: {
        padding: '20px'
    }
})
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
        const {classes} = this.props;
        return (
            <Fragment>
                <div class={classes.dateAndList}>
                 <p>{this.state.date}</p>
                </div>
                <div class={classes.dateAndList}>
                 <TodoList
                  data={this.state.todo}></TodoList>
                </div>
            </Fragment>
            
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Home);
