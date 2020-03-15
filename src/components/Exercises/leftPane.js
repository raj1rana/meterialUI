import React from "react";
import {Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  Paper: {
    padding: 30 , marginTop: 20, marginBottom: 20
  }
}));

export default function LeftPane(){
  const classes = useStyles();
return (
  <Paper className={classes.Paper}>
            left one
  </Paper>  
)
};

