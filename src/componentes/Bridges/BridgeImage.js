import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Image = styled.div`
  background-image: url('${p => p.imageUrl}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 1rem;
  position: relative;
  width: 100%;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  & > div {
    opacity: 0;
    transition: opacity 0.5s;
  }

  &:hover > div {
    opacity: 1;
  }
`

const Info = styled.div`
  background: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  visibility: ${p => p.visible ? 'visible' : 'hidden'};
`

const Options = styled.div`
  margin: 0 auto;
`

const Location = styled.div`
  color: white;
  letter-spacing: 1.5px;
  margin: 0 auto;
  margin-bottom: 1em;
  text-align: center;
  text-shadow: 2px 2px 8px black;
`

const BridgeImage = ({ bridge }) => {

  const [ info, setInfo ] = useState(false)
  const showInfo = () => setInfo(true);
  const hideInfo = () => setInfo(false);

  return (
    <Image
      onMouseEnter={showInfo}
      onMouseLeave={hideInfo}
      imageUrl={bridge.imageUrl}
    >
      {
        <Info visible={info}>
          <Location>
            <Icon name="marker"/>{ bridge.city }{ bridge.region && ` ${bridge.region}` }, { bridge.country }
          </Location>
          <Options>
            <Button inverted size="mini">Map</Button>
            <Button inverted size="mini">More</Button>
          </Options>
        </Info>
      }
    </Image>
  )
}

export default BridgeImage;