import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components';
import BridgeCard from './BridgeCard';
import { BRIDGES_QUERY } from '../../graphql/queries/bridges-query';

const BridgesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 10%;
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
            <BridgeCard key={bridge.id} bridge={bridge} />
          ))
        )
      }
    </BridgesWrapper>
  )
}

export default Bridges;