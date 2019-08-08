import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBar from './components/TitleBar';
import Form from './components/Form';
import Table from './components/Table';
import './App.css';

class App extends Component {
  state = {
    data: []
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
