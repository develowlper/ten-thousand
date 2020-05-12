import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Dot = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 100%;
  background: ${theme.palette.pink};
`;

Dot.displayName = 'Dot';

Dot.propTypes = {
  size: PropTypes.number,
};

Dot.defaultProps = {
  size: 12,
};

export default Dot;
