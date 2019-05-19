import gql from 'graphql-tag';

export const BRIDGES_QUERY = gql`
  query {
    bridges {
      id
      name
      year
      city
      country
      region
      imageUrl
      moreInfoUrl
      location {
        lng
        lat
      }
    }
  }
`;