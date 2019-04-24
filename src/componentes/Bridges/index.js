import React, { useContext, useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import {
  filterByName,
  filterByCountry,
  sortByParam
} from '../../selectors/bridges-selector';
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

  const filteredBridges = useMemo(() => {
    let filtered = filterByName(bridges, searchPhrase);
    filtered = filterByCountry(filtered, filter);
    filtered = sortByParam(filtered, sort);
    return filtered;
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