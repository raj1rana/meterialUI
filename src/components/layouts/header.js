import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


export default function Header () {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit">
            Exercise Database
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}