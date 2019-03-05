import React, { Component, Fragment } from 'react';
import { SyncHook } from 'tapable';



class TodoInfo extends Component {

    state = {
        TITLE: '',
        PARTICIPANT: '',
        END_DT: '',
        EMERGENCY_FL: ''
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state!==nextState) {
            return true;
        }
        return this.props.info !== nextProps.info;
    }

    render() {
        const {TITLE, PARTICIPANT, END_DT} = this.props.info;
        const style = {
            border:'1px solid black',
            padding:'8px',
            margin:'8px'
        }
        
        return (
            <div style={style}>
                <Fragment>
                    <div>{TITLE}</div>
                    <div>참가자: {PARTICIPANT}</div>
                    <div>완료일: {END_DT}</div>
                </Fragment>
                
            </div>
        )
    }
}

export default TodoInfo;