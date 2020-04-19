import gql from 'graphql-tag';

export const GET_ARCHIVED_MATCHES = gql`
  query ArchivedMatches {
    matches(
      where: { finished: { _eq: true } }
      order_by: { started_at: desc }
    ) {
      id
      started_at
      p1 {
        name
      }
      p2 {
        name
      }
      setts {
        p1_score
        p2_score
      }
    }
  }
`;

export const GET_LIVE_MATCHES = gql`
  subscription LiveMatches {
    matches(
      where: { finished: { _eq: false } }
      order_by: { started_at: desc }
    ) {
      id
      started_at
      p1 {
        name
      }
      p2 {
        name
      }
      setts {
        p1_score
        p2_score
      }
    }
  }
`;
