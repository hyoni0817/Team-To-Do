import React, { Component, Fragment } from 'react';
import { SyncHook } from 'tapable';



class TodoInfo extends Component {

    state = {
        complete: false,
        contents: '',
        person:''
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state!==nextState) {
            return true;
        }
        return this.props.info !== nextProps.info;
    }

    render() {
        console.log(this.props)
        const {contents, person} = this.props.info;
        const style = {
            border:'1px solid black',
            padding:'8px',
            margin:'8px'
        }
        return (
            <div style={style}>
                <Fragment>
                    <div>{contents}</div>
                    <div>참가자: {person}</div>
                </Fragment>
                
            </div>
        )
    }
}

export default TodoInfo;