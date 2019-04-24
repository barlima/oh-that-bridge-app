import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components';
import { Dropdown, Input } from 'semantic-ui-react';
import BridgesSearchContext from '../../contexts/bridges-search-context';
import { BRIDGES_COUNTRIES_QUERY } from '../../graphql/queries/bridges-countries-query';
import SORT_OPTIONS from '../../constants/sort-options';

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 20px;
  max-width: 900px;
`

const Search = styled.div`
  flex: 0.4;
`

const Filter = styled.div`
  flex: 0.3;
  margin: 0 1em;
  margin-bottom: auto;
  margin-top: auto;
`

const Sort = styled.div`
  flex: 0.3;
  margin-bottom: auto;
  margin-top: auto;
`

const BridgesMenu = ({ filter }) => {
  const { data, loading, errors } = useQuery(BRIDGES_COUNTRIES_QUERY, { suspend: false });
  const [ setSearchPhrase, setFilter, setSort ] = useContext(BridgesSearchContext);
  const [ countries, setCountries ] = useState([])

  const truncateName = name => {
    if(name.length > 12) {
      return name.slice(0, 10) + "...";
    }

    return name;
  }

  useEffect(() => {
    if(!loading && !errors) {
      const countries = data.bridges.map(b => b.country);
      const uniqCountries = [ ...new Set(countries) ];

      const sortedCountries = uniqCountries.sort((a, b) => {
        if(a > b) {
          return 1;
        } else if ( a < b) {
          return -1;
        } else {
          return 0;
        }
      });
      
      setCountries([ "All", ...sortedCountries].map(c => ({
        key: c,
        value: c,
        text: c
      })));
    }
  }, [data])

  return (
    <Menu>
      <Search>
        <Input fluid placeholder='Search' onChange={e => setSearchPhrase(e.target.value)}/>
      </Search>
      <Filter>
        <Dropdown
          fluid
          button
          className='icon'
          floating
          labeled
          scrolling
          icon='filter'
          options={countries}
          text={truncateName(!filter || filter === 'All' ? 'Country' : filter)}
          onChange={(_, data) => setFilter(data.value)}
        />
      </Filter>
      <Sort>
        <Dropdown
          fluid
          button
          className='icon'
          floating
          labeled
          icon='sort'
          options={SORT_OPTIONS}
          text='Sort'
          onChange={(_, data) => setSort(data.value)}
        />
      </Sort>
    </Menu>
  )
}

export default BridgesMenu;