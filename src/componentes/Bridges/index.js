import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
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
  flex-direction:column;
  margin: 0 15vw;
  min-height: 100vh;
  padding-bottom: 70px;
`

const BridgesList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ExploreBridges = styled.div`
  padding: 15px;
  text-align: center;
  width: 100%;
`

const Info = styled.div`
  font-family: '${p => p.theme.bridges.nameFont}', sans-serif;
  font-size: 2rem;
  letter-spacing: 5px;
  margin-top: 5vh;
  text-align: center;
  width: 100%;
`

const Bridges = () => {
  const [ bridges, _ ] = useContext(BridgesContext);
  const [ searchPhrase, setSearchPhrase ] = useState();
  const [ filter, setFilter ] = useState();
  const [ sort, setSort ] = useState();

  const [ slowBridges, setSlowBridges ] = useState([]);
  const [ filteredBridges, setFilteredBridges ] = useState([ ...bridges ]);

  useEffect(() => {
    let filtered = filterByName(bridges, searchPhrase);
    filtered = filterByCountry(filtered, filter);
    filtered = sortByParam(filtered, sort);

    setFilteredBridges(filtered);
    setSlowBridges(filtered.slice(0, 6));
  }, [bridges, searchPhrase, filter, sort])

  const loadMore = () => setSlowBridges(filteredBridges.slice(0, slowBridges.length + 6))
  const hasMore = () => slowBridges.length < filteredBridges.length;

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore()}
      loader={<Info key={0}>Loading ...</Info>}
    >
      <BridgesWrapper>
        <ExploreBridges>
          <BridgesSearchContext.Provider value={[setSearchPhrase, setFilter, setSort]}>
            <BridgesMenu filter={filter} sort={sort}/> 
          </BridgesSearchContext.Provider>
        </ExploreBridges>
        <BridgesList>
          {
            slowBridges && 
            slowBridges.map(bridge => (
              <BridgeCard key={bridge.id} bridge={bridge} />
            )) 
          }
          {
            searchPhrase && slowBridges.length === 0 &&
            <Info>Sorry, no results :(</Info>
          }
        </BridgesList>
      </BridgesWrapper>
    </InfiniteScroll>
  )
}

export default Bridges;