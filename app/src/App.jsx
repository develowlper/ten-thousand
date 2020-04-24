import React from 'react';

import styled from 'styled-components';
import Headline from './components/atoms/Headline';

import JoinGame from './components/organisms/JoinGame';
import theme from './components/atoms/theme';

const Box = styled.div`
  max-width: 600px;
  margin: auto;
`;

const Link = styled.a`
  color: ${theme.palette.darkpink};
`;

function App() {
  return (
    <Box>
      <Headline>
        <h1>Welcome to ten-thousand</h1>
        <h3>
          Heavyly inspired by{' '}
          <Link
            rel="noopener"
            target="_black"
            href="https://www.horsepaste.com/">
            CODENAMES
          </Link>
        </h3>
      </Headline>
      <JoinGame />
    </Box>
  );
}

export default App;
