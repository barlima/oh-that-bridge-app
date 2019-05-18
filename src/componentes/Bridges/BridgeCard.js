import React from 'react';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import BridgeImage from './BridgeImage';

const Bridge = styled.div`
  margin: 10px;
  width: calc(100%/3 - 20px);

  @media (
    max-width: ${p => p.theme.media.maxWidth}
  ) {
    width: 100%;
    heigth: 100%;
    margin: auto;
    margin-bottom: 1em;
  }
`

const BridgeName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 2.8rem;
  width: 100%;
  height: 100%:
`

const Name = styled.span`
  text-align: center;
  width: 100%;

  * {
    font-family: '${p => p.theme.bridges.nameFont}', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 1.5px;
    line-height: 1.4rem;
  }
`

const MapLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: black;

  &:hover {
    color: black;
  }
`

const BridgeCard = ({ bridge }) => (
  <Bridge>
    <Segment>
      <BridgeImage bridge={bridge} />
      <BridgeName>
        <Name>
          <MapLink to={{
            pathname: "/map",
            state: { bridge }
          }}>
            {bridge.name}
          </MapLink>
        </Name>
      </BridgeName>
    </Segment>
  </Bridge>
)

export default BridgeCard;