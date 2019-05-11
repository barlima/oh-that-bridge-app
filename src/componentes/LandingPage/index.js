import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink, Element } from 'react-scroll'
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
  justify-content: space-between;
  height: 100vh;
`

const Content = styled.div`
  padding: 0 10%;
  text-align: center;
`

const Note = styled.span`
  color: white;
  font-weigth: 500;
  font-size: 28px;
  line-height: 40px;
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

  & > span {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: calc(100%/3);

    &:last-of-type {
      text-align: right;
    }
  }
`

const ExploreLink = styled(ScrollLink)`
  color: white;
  text-decoration: none;

  * {
    text-decoration: none;
    color: white;
    transition: all .2s ease-in-out;

    &:hover {
      cursor: pointer;
      transform: scale(1.25);
    }
  }
`;

const JumbotronLocation = styled.div`
  bottom: -3px;
  position: relative;

  i {
    margin: 0;
    position: relative;
    top: -3px;
  }
`

const LandingPage = () => (
  <>
    <Jumbotron>
      <div />
      <Content>
        <Note>
          Has it ever happened to you that while watching a movie you spotted
          a bridge in the background and started wondering where that
          place is?<br/>This site is here to help!
        </Note>
        <SearchButton>
          <Link to="/map">
            <Button active inverted size="medium">
              Search on Map
            </Button>
          </Link>
        </SearchButton>
      </Content>
      <Subnote>
        <span>
          Oh, that bridge!
        </span>
        <ExploreLink
          to="bridges"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Icon name="angle down" size="huge"/>
        </ExploreLink>
        <span>
          <JumbotronLocation>
            <Icon name="marker" size="large"/>Jacksonville FL, USA
          </JumbotronLocation>
        </span>
      </Subnote>
    </Jumbotron>
    <Element name="bridges">
      <Bridges />
    </Element>
  </>
)

export default LandingPage;