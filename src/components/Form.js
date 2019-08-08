import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

//Add tasks

export default class Form extends React.Component {
  state = {
    task: "",
    taskError: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      taskError: ""
    };

    if (this.state.task.length == 0) {
      isError = true;
      errors.taskError = "No task entered";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  //Button
  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        task: "",
        taskError: ""
      });
    }
  };

  render() {
    return (
      <form>
        <TextField
          name="task"
          hintText="What needs to be done"
          floatingLabelText="Tasks"
          value={this.state.task}
          onChange={e => this.change(e)}
          errorText={this.state.taskError}
          floatingLabelFixed
        />
        <br/>
        <RaisedButton label="Add Task" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}
