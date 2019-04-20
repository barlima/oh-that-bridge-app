import React, { useState, useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import styled from 'styled-components';

const MOCK_BRIDGES = [
  {
    name: "Golden Gate Bridge"
  },
  {
    name: "Harbour Bridge"
  },
  {
    name: "Viaduc de Millau"
  },
  {
    name: "Brooklyn Bridge"
  }
]

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
  const [bridges, setBridges] = useState([])
  
  useEffect(() => {
    setBridges(MOCK_BRIDGES);
  }, [])

  return (
    <BridgesWrapper>
      <ExploreBridges>
        Explore bridges
      </ExploreBridges>
      {
        bridges.length > 0 ?
          bridges.map(bridge => (
            <Bridge key={bridge.name}>
              <Segment>
                {bridge.name}
              </Segment>
            </Bridge>
          ))
        : (
          <div>
            Loading
          </div>
        )
      }
    </BridgesWrapper>
  )
}

export default Bridges;