import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import MainMenu from "./component/Menu/MainMenu";
import Content from "./component/Pages/Content";

function App() {
    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            // maxWidth: 500,
        },
        image: {
            width: 47,
            height: 'auto',
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: 47,
            maxHeight: 'auto',
            width: 47,
            height: 'auto',
        },
    }));
    const classes = useStyles();
  return (
      <Grid container spacing={2}>
          <Grid item xs={12}>
              <Paper className={classes.paper}>
                  <MainMenu />
              </Paper>
          </Grid>
          <Grid item xs={1}>
              {/*<Paper className={classes.paper}>xs=1</Paper>*/}
          </Grid>
          <Grid item xs={10}>
              <Content />
          </Grid>
          <Grid item xs={1}>
              {/*<Paper className={classes.paper}>xs=1</Paper>*/}
          </Grid>
      </Grid>
);
}

export default App;
