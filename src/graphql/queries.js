import gql from 'graphql-tag';

export const GET_ALL_MATCHES = gql`
  query AllMatches {
    matches(order_by: { started_at: desc }) {
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
