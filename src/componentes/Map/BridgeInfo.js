import React from 'react';
import styled from 'styled-components';
import BridgeImage from '../Bridges/BridgeImage';

const Image = styled.div`
  background-image: url('${p => p.imageUrl}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 1rem;
  position: relative;
  width: 200px;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const BridgeInfo = ({ bridge }) => {

  if(!bridge) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <Image imageUrl={bridge.imageUrl}/>
      <h1>{bridge.name}</h1>
    </div>
  )
}

export default BridgeInfo;