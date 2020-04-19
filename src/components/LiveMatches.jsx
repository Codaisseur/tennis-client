import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { GET_LIVE_MATCHES } from '../graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import ErrorIcon from '@material-ui/icons/Error';
import TennisMatch from './TennisMatch';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2em',
  },
}));

function LiveMatches() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_LIVE_MATCHES);

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
      <Typography variant="h2">Live Scores</Typography>
      <Box>
        {data.matches.map((match) => (
          <TennisMatch match={match} key={match.id} />
        ))}
      </Box>
    </Container>
  );
}

export default LiveMatches;
