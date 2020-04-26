import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import JoinGame from '../components/organisms/JoinGame';

import Link from '../components/atoms/Link';
import Headline from '../components/atoms/Headline';

const Box = styled.div`
  max-width: 600px;
  margin: auto;
`;

const Home = ({}) => {
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
};

Home.displayName = 'Home';

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
