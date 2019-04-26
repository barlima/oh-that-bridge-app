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
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 15vw;
  margin-bottom: 70px;
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
        loader={<div key={0}>Loading ...</div>}
      >
      <BridgesWrapper>
        <ExploreBridges>
          <BridgesSearchContext.Provider value={[setSearchPhrase, setFilter, setSort]}>
            <BridgesMenu filter={filter} sort={sort}/> 
          </BridgesSearchContext.Provider>
        </ExploreBridges>
          {
            slowBridges && slowBridges.map(bridge => (
              <BridgeCard key={bridge.id} bridge={bridge} />
            ))
          }
      </BridgesWrapper>
    </InfiniteScroll>
  )
}

export default Bridges;