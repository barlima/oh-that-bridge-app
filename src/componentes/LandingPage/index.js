import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import Bridges from '../Bridges/index';

const Jumbotron = styled.div`
  background-image: url('/images/landing_page.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex
  flex-direction: column;
  justify-content: center;
  min-height: 30vh;
`

const Note = styled.span`
  color: white;
  font-weigth: 500;
  font-size: 28px;
  line-height: 40px;
  margin-top: 10%;
  padding 0 10%;
  text-align: center;
  text-shadow: 2px 2px 16px black;
  width: 100%;
`

const SearchButton = styled.div`
  margin: auto;
  margin-top: 12px;
  margin-bottom: 10%;
`

const Subnote = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  letter-spacing: 1.5px;
  padding: 5px;
  text-shadow: 2px 2px 8px black;
`

const LandingPage = () => (
  <>
    <Jumbotron>
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
      <Subnote>
        <span>
          Oh, that bridge!
        </span>
        <span>
          <Icon name="marker" size="large"/>Jacksonville FL, USA
        </span>
      </Subnote>
    </Jumbotron>
    <Bridges />
  </>
)

export default LandingPage;