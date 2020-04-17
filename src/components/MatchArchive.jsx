import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { GET_FINISHED_MATCHES } from '../graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import ErrorIcon from '@material-ui/icons/Error';
import TennisMatch from './TennisMatch';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2em',
  },
}));

function App() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_FINISHED_MATCHES);

  if (loading) return 'Loading...';
  if (error)
    return (
      <p>
        <ErrorIcon fontSize="large" />
        Error! ${error.message}
      </p>
    );

  return (
    <Container className={classes.root}>
      <Typography variant="h2">Live</Typography>
      <Box>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        saepe quia assumenda excepturi accusantium veritatis consequatur sint ut
        unde alias delectus, laudantium totam illo quis dolore maxime, quidem
        sapiente aspernatur.
      </Box>

      <Typography variant="h2">Completed</Typography>
      <Box>
        {data.matches.map((match) => (
          <TennisMatch match={match} key={match.id} />
        ))}
      </Box>
    </Container>
  );
}

export default App;
