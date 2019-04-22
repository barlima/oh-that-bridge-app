import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import BridgesContext from '../../contexts/bridges-context';
import BridgeCard from './BridgeCard';
import BridgesMenu from './BridgesMenu';

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
  const [ bridges, _ ] = useContext(BridgesContext);

  const filteredBridges = useMemo(() => {
    return bridges.filter(bridge => bridge.name.toLowerCase().includes("emanuel"));
  })

  return (
    <BridgesWrapper>
      <ExploreBridges>
        <BridgesMenu /> 
      </ExploreBridges>
      {
        bridges && bridges.map(bridge => (
          <BridgeCard key={bridge.id} bridge={bridge} />
        ))
      }
    </BridgesWrapper>
  )
}

export default Bridges;