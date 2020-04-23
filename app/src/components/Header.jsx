import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';

const Header = styled.header`
  padding: 0px ${theme.spacing(2)}px;
  background-color: ${theme.orange};
  grid-area: header;
  grid-column: 1;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048);
`;

Header.displayName = 'Header';

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {};

export default Header;
