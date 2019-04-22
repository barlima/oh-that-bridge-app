import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components';
import { Dropdown, Input } from 'semantic-ui-react';
import { BRIDGES_QUERY } from '../../graphql/queries/bridges-query';

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Search = styled.div`
  flex: 0.6;
`

const Filter = styled.div`
  flex: 0.2;
  margin: 0 1em;
`

const Sort = styled.div`
  flex: 0.2
`

const BridgesMenu = ({ setBridges }) => {
  const [nameLike, setNameLike] = useState('');
  const [filter, setFilter] = useState({ key: "", value: "" });
  const [sort, setSort] = useState('');
  const { loading, data } = useQuery(BRIDGES_QUERY, {
    variables: {
      nameLike: nameLike
    }
  });

  useEffect(() => {
    if(!loading) {
      // setBridges(data.bridges);
      console.log(data.bridges);
    }
  }, [nameLike])

  return (
    <Menu>
      <Search>
        <Input fluid placeholder='Search' size="mini" onChange={e => setNameLike(e.target.value)}/>
      </Search>
      <Filter>
        <Dropdown
          fluid
          text='Filter'
          icon='filter'
          floating
          labeled
          button
          className='icon'
        >
          <Dropdown.Menu>
            <Dropdown.Item>Important</Dropdown.Item>
            <Dropdown.Item>Announcement</Dropdown.Item>
            <Dropdown.Item>Discussion</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Filter>
      <Sort>
        <Dropdown
          fluid
          button
          className='icon'
          floating
          labeled
          icon='sort'
          options={[]}
          text='Sort'
        />
      </Sort>
    </Menu>
  )
}

export default BridgesMenu;