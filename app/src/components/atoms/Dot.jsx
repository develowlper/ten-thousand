import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Dot = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 100%;
  background: ${({ color }) => color};
`;

Dot.displayName = 'Dot';

Dot.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Dot.defaultProps = {
  size: 12,
  color: theme.palette.pink,
};

export default Dot;
