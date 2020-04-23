import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { animated, useSpring } from 'react-spring';

const Box = styled(animated.div)`
  min-height: 100%;
  display: flex;
  place-items: center;
  place-content: center;
`;

const Content = ({ children }) => {
  return <Box>{children}</Box>;
};

Content.displayName = 'Content';

Content.propTypes = {
  children: PropTypes.node,
};

Content.defaultProps = {};

export default Content;
