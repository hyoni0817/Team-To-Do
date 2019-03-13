import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { SyncHook } from 'tapable';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

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
        const { classes } = this.props;
        
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <div>{TITLE}</div>
                        <div>참가자: {PARTICIPANT}</div>
                        <div>완료일: {END_DT}</div>
                    </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

TodoInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoInfo);