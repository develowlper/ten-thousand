import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../../styles/theme';

const RoundedSquare = styled.div`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border: 1px ${theme.palette.pink} solid;
  border-radius: 5px;
`;

RoundedSquare.displayName = 'RoundedSquare';

RoundedSquare.propTypes = {
  size: PropTypes.number,
};

RoundedSquare.defaultProps = {
  size: 64,
};

export default RoundedSquare;
