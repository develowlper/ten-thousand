import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../theme';

const Component = styled.div`
  background: white;
  padding: ${theme.spacing(2)}px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);

  border-radius: ${theme.spacing(0.5)}px;
`;

Component.displayName = 'Component';

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
