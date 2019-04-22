import React, { useContext, useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import BridgesContext from '../../contexts/bridges-context';
import BridgeCard from './BridgeCard';
import BridgesMenu from './BridgesMenu';
import BridgesSearchContext from '../../contexts/bridges-search-context';

const BridgesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 15vw;
`

const ExploreBridges = styled.div`
  padding: 15px;
  text-align: center;
  width: 100%;
`

const Bridges = () => {
  const [ bridges, _ ] = useContext(BridgesContext);
  const [ searchPhrase, setSearchPhrase ] = useState();
  const [ filter, setFilter ] = useState();
  const [ sort, setSort ] = useState();

  // ToDo: move to selectors
  const filteredBridges = useMemo(() => {
    const filtered = bridges.filter(bridge => {
      if(searchPhrase){
        return bridge.name.toLowerCase().includes(searchPhrase)
      } else {
        return bridges;
      }
    });

    if(filter && filter !== 'All') {
      return filtered.filter(bridge => 
        bridge.country.includes(filter)
      )
    } else {
      return filtered;
    }
  });

  return (
    <BridgesWrapper>
      <ExploreBridges>
        <BridgesSearchContext.Provider value={[setSearchPhrase, setFilter, setSort]}>
          <BridgesMenu filter={filter}/> 
        </BridgesSearchContext.Provider>
      </ExploreBridges>
      {
        filteredBridges && filteredBridges.map(bridge => (
          <BridgeCard key={bridge.id} bridge={bridge} />
        ))
      }
    </BridgesWrapper>
  )
}

export default Bridges;