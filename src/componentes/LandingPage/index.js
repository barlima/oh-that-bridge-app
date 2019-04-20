import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Bridges from '../Bridges/index';

const OrangeJumbo = styled.div`
  background-image: url('/images/landing_page.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex
  flex-direction: column;
  justify-content: center;
  min-height: 30vh;
  padding: 10%;
`

const Note = styled.span`
  color: white;
  font-weigth: 500;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  text-shadow: 2px 2px 16px black;
  width: 100%;
`

const SearchButton = styled.div`
  margin: auto;
  margin-top: 20px;
`

const LandingPage = () => (
  <>
    <OrangeJumbo>
      <Note>
        Has it ever happened to you that while watching a movie you spotted
        a bridge in the background and started wondering where that
        place is?<br/>This site is here to help!
      </Note>
      <SearchButton>
        <Link to="/map">
          <Button inverted size="medium">
            Search on Map
          </Button>
        </Link>
      </SearchButton>
    </OrangeJumbo>
    <Bridges />
  </>
)

export default LandingPage;