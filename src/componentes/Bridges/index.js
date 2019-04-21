import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import { BRIDGES_QUERY } from '../../graphql/queries/bridges-query';

const BridgesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 10%;
`

const Bridge = styled.div`
  margin: 10px;
  width: calc(100%/3 - 20px);
`

const ExploreBridges = styled.h3`
  padding: 15px;
  text-align: center;
  width: 100%;
`

const Bridges = () => {
  const [bridges, setBridges] = useState([]);
  const { data, loading } = useQuery(BRIDGES_QUERY, { suspend: false });

  useEffect(() => {
    if (data.bridges) {
      setBridges(data.bridges);
    }
  }, [data])

  return (
    <BridgesWrapper>
      <ExploreBridges>
        Explore bridges
      </ExploreBridges>
      {
        loading ? (
          <div>loading</div>
        ) : (
          bridges.map(bridge => (
            <Bridge key={bridge.name}>
              <Segment>
                {bridge.name}
              </Segment>
            </Bridge>
          ))
        )
      }
    </BridgesWrapper>
  )
}

export default Bridges;