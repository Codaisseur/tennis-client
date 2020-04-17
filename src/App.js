import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import MatchArchive from './components/MatchArchive';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <CssBaseline />
      <Box>
        <MatchArchive />
      </Box>
    </Container>
  );
}

export default App;
