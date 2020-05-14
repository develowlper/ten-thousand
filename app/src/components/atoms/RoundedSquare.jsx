import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../../styles/theme';

const RoundedSquare = styled.div`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border: ${({ outline }) => outline}px ${theme.palette.pink} solid;
  border-radius: 5px;
  background: ${({ background }) => background};
`;

RoundedSquare.displayName = 'RoundedSquare';

RoundedSquare.propTypes = {
  size: PropTypes.number,
  outline: PropTypes.number,
  background: PropTypes.string,
};

RoundedSquare.defaultProps = {
  size: 64,
  outline: 2,
  background: 'white',
};

export default RoundedSquare;
