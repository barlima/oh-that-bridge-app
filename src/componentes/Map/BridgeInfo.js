import React from 'react';
import styled from 'styled-components';
import BridgeImage from '../Bridges/BridgeImage';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const Image = styled.div`
  background-image: url('${p => p.imageUrl}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-left: 25px;
  margin-bottom: 25px;
  margin-top: 5px;
  width: 200px;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const Name = styled.span`
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  line-height: 1.4rem;
  text-align: center;
  padding: 0;
  padding-left: 25px;
  padding-bottom: 12px;
`

const BridgeInfo = ({ bridge }) => {

  if(!bridge) {
    return <p>Loading...</p>
  }

  return (
    <Wrapper>
      <Name>{bridge.name}</Name>
      <Image imageUrl={bridge.imageUrl}/>
    </Wrapper>
  )
}

export default BridgeInfo;