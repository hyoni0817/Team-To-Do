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
import Switch from '@material-ui/core/Switch';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  titleAndDateField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width:'95%'
  },
  formControl: {
    marginLeft: theme.spacing.unit,
    marginTop: '10px',
  },
  formControl2: {
    marginLeft: theme.spacing.unit,
  },
});

class TodoForm extends Component {
    state = {
        open: false,
        WRITE_NO:'',
        TITLE: '',
        END_DT: '',
        CONTENT: '',
        PARTICIPANT: new Map(),
        EMERGENCY_FL: 0,

      };
    
      handleClickOpen = () => {
        this.setState({ open: true, EMERGENCY_FL: 0, PARTICIPANT: new Map()});
      };
    
      handleClose = () => {
        this.setState({ open: false});
      };
    
      handleChange = event => {
        const name = event.target.value;
        const isChecked = event.target.checked; 
        const ptcMap = this.state.PARTICIPANT;

        if(event.target.checked == true){
          this.setState(
            { [name]: event.target.checked, PARTICIPANT:ptcMap.set(name,isChecked)}
          );
        }
        
      };


      handleSubmit = (e) => {
        e.preventDefault(); //페이지 리로딩 방지
        
        var checkedName = [];
        
        function inputName(value, key, map) {
          if(value == true) checkedName.push(key);
          return checkedName.toString(); 
        }

        this.state.PARTICIPANT.forEach(inputName)

        const info = {
          method: 'post', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            TITLE: this.state.TITLE,
            END_DT: this.state.END_DT,
            CONTENT: this.state.CONTENT,
            PARTICIPANT: inputName(),
            EMERGENCY_FL: parseInt(this.state.EMERGENCY_FL),
    
          })
        }

        fetch('/todolist', info)
        .then(function(response) {
          return response.json();
        })

        this.props.onCreate(this.state);
    }

      render() {
        const { classes } = this.props;
       const { 한지민, 전지현, 이나영 } = this.state;
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
            <form className={classes.container} onSubmit={this.handleSubmit}>
              <DialogTitle id="form-dialog-title">할일 추가</DialogTitle>
              <DialogContent>
                <div>
                  <TextField
                    id="standard-uncontrolled"
                    label="할일 제목"
                    onChange={e => this.setState({ TITLE: e.target.value })}
                    className={classes.titleAndDateField}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    id="date"
                    label="완료일"
                    type="date"
                    onChange={e => this.setState({ END_DT: e.target.value })}
                    className={classes.titleAndDateField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-multiline-static"
                    label="할일 내용"
                    multiline
                    rows="4"
                    onChange={e => this.setState({ CONTENT: e.target.value })}
                    className={classes.textField}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                </div>       
                <div>  
                  <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">참여자</FormLabel>
                      <FormGroup row>
                        <FormControlLabel
                          control={
                            <Checkbox onChange={this.handleChange} value="한지민" />
                          }
                          label="한지민"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={this.handleChange}value="전지현" />
                          }
                          label="전지현"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={this.handleChange} value="이나영" />
                          }
                          label="이나영"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                  <div>
                    <FormControl component="fieldset" className={classes.formControl2}>
                      <FormLabel component="legend">긴급 할일 여부</FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Switch
                            value = "1"
                            />
                          }
                          onChange={e => this.setState({ EMERGENCY_FL: e.target.value })}
                          label="긴급"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    취소
                  </Button>
                  <Button type="submit" onClick={this.handleClose} color="primary">
                    추가하기
                  </Button>
                </DialogActions>
              </form>
            </Dialog>
          </div>
        );
      }
}

TodoForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoForm);