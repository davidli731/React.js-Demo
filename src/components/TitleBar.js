import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';

const TitleBar = () => {
  return(
    <div>
      <AppBar position = "static">
        <ToolBar>
          <Typography variant = "title" color = "inherit">
            ToDo List
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  )
}
export default TitleBar;
