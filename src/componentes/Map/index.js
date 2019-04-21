import React from 'react';

// const Map = () => (
//   <div/>
// )

// export default Map;

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_DOGS = gql`
  {
    bridges {
      name
      city
    }
  }
`;

const Map = ({ onDogSelected }) => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <select name="dog" onChange={onDogSelected}>
          {data.bridges.map(bridge => (
            <option key={bridge.id} value={bridge.name}>
              {bridge.name}
            </option>
          ))}
        </select>
      );
    }}
  </Query>
);

export default Map;