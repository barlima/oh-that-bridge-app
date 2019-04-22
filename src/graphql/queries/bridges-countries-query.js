import gql from 'graphql-tag';

export const BRIDGES_COUNTRIES_QUERY = gql`
  query {
    bridges {
      country
    }
  }
`;