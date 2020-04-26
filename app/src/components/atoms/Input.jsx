import styled from 'styled-components';
import theme from '../../styles/theme';

export default styled.input`
  font-size: large;
  padding: 0.25rem 0.5rem;
  border: 2px solid ${theme.palette.lightpink};
  :focus {
    border: none;
    outline: 2px solid ${theme.palette.pink};
    outline-offset: 0px;
  }
`;
