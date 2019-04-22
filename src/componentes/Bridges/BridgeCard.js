import React from 'react';
import { Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import BridgeImage from './BridgeImage';

const Bridge = styled.div`
  margin: 10px;
  width: calc(100%/3 - 20px);
`

const BridgeName = styled.div`
  min-height: 2.4em;
  font-family: '${p => p.theme.bridges.nameFont}', sans-serif;
  font-size: 1em;
  letter-spacing: 1.5px;
  line-height: 1.2em;
  text-align: center;
`

const BridgeCard = ({ bridge }) => (
  <Bridge>
    <Segment>
      <BridgeImage bridge={bridge} />
      <BridgeName>{bridge.name}</BridgeName>
    </Segment>
  </Bridge>
)

export default BridgeCard;