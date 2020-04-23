import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import theme from '../theme';

const Footer = styled.footer`
  padding: ${theme.spacing(1)}px;
  background: ${theme.blue};
`;

Footer.displayName = 'Footer';

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
