import React from 'react';
import styled from 'styled-components';

const Loading = styled.div`
  align-items: center;
  background: linear-gradient(
    ${p => p.theme.colors.darkGrey},
    ${p => p.theme.colors.darkerGrey}
    
  );
  color: white;
  display: flex;
  font-family: '${p => p.theme.bridges.nameFont}', sans-serif;
  font-size: 3rem;
  height: 100vh;
  justify-content: center;
  letter-spacing: 5px;
  line-height: calc(3rem + 5px);
  padding: 10%;
`

const LoadingPage = () => (
  <Loading>Oh, that bridge!</Loading>
)

export default LoadingPage;