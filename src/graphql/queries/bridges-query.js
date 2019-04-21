import gql from 'graphql-tag';

export const BRIDGES_QUERY = gql`
  query {
    bridges {
      id
      name
      city
      country
      region
    }
  }
`;