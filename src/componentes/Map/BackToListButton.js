import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  position: fixed;
  width: 100%;
  z-index: 100;

  @media (
    max-width: ${p => p.theme.media.maxWidth}
  ) {
    width: auto;
    height: 95%;
    flex-direction: column;
    justify-content: flex-end;
  }
`

const BackToListButton = () => (
  <Wrapper>
    <Link to="/">
      <Button active inverted size="medium">
        Back to List
      </Button>
    </Link>
  </Wrapper>
)

export default BackToListButton;