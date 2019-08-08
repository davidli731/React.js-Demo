import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBar from './components/TitleBar';
import Form from './components/Form';
import Table from './components/Table';
import './App.css';

class App extends Component {
  state = {
    data: [],
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <div align = "center">

          <TitleBar/>

          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })}
          />

          <Table
            handleRemove={this.handleRemove}
            editIdx={this.state.editIdx}
            data={this.state.data}
            header={[
              {
                name: "Task",
                prop: "task"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
