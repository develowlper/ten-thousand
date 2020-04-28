import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import theme from '../../styles/theme';

const Input = styled.input`
  font-size: large;
  padding: 0.25rem 0.5rem;
  border: 2px solid ${theme.palette.lightpink};
  :focus {
    outline: 2px solid ${theme.palette.pink};
    outline-offset: -2px;
  }
`;

const Component = forwardRef(({ value, onChange, ...inputProps }, ref) => {
  return <Input value={value} onChange={onChange} ref={ref} {...inputProps} />;
});

Component.displayName = 'Input';

Component.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Component.defaultProps = {};

export default Component;
