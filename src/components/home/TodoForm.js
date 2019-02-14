import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

class TodoForm extends Component {
    state = {
        open: false,
        gilad: true,
        jason: false,
        antoine: false,
      };
    
      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    
      handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };

      render() {
        const { classes } = this.props;
        const { gilad, jason, antoine } = this.state;

        return (
          <div>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
              할일 추가
            </Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">할일 추가</DialogTitle>
              <DialogContent>
                <div>
                  <TextField
                    id="standard-uncontrolled"
                    label="할일 제목"
                    className={classes.textField}
                    margin="normal"
                  />
                </div>
                <div>
                  <FormGroup row>
                    <form className={classes.container} noValidate>
                      <TextField
                        id="date"
                        label="시작"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </form>
                    <form className={classes.container} noValidate>
                      <TextField
                        id="date"
                        label="종료"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </form>
                  </FormGroup>
                </div>
                <div>
                  <TextField
                    id="outlined-multiline-static"
                    label="할일 내용"
                    multiline
                    rows="4"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />
                </div>         
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">참여자</FormLabel>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox checked={gilad} onChange={this.handleChange('gilad')} value="gilad" />
                      }
                      label="한지민"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={jason} onChange={this.handleChange('jason')} value="jason" />
                      }
                      label="전지현"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={antoine}
                          onChange={this.handleChange('antoine')}
                          value="antoine"
                        />
                      }
                      label="이나영"
                    />
                  </FormGroup>
                </FormControl>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  취소
                </Button>
                <Button onClick={this.handleClose} color="primary">
                  추가하기
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      }
}

TodoForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoForm);