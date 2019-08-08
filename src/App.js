import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBar from './components/TitleBar';
import Form from './components/Form';
import Table from './components/Table';
import TextField from "material-ui/TextField";
import './App.css';

class App extends Component {
  state = {
    data: [],
    query: "",
    queryColumn: "task"
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  render() {
    const lowerCaseQuery = this.state.query.toLowerCase();
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

          <TextField
            hintText="Search for Task"
            floatingLabelText="Search"
            value={this.state.query}
            onChange={e => this.setState({ query: e.target.value })}
            floatingLabelFixed
          />

          <Table
            handleRemove={this.handleRemove}
            editIdx={this.state.editIdx}
            data={this.state.query ? this.state.data.filter(
              x => x[this.state.queryColumn]
              .toLowerCase()
              .includes(lowerCaseQuery)) : this.state.data}
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
