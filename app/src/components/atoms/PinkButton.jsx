import React from 'react';

import styled from 'styled-components';

import theme from './theme';

const Button = styled.button`
  background: ${theme.palette.pink};
  font-size: large;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: none;
  margin-left: ${(props) => props.ml || 0}rem;
  filter: grayscale(${(props) => (props.disabled ? 0.3 : 0)});
  :focus {
    outline: 2px solid ${theme.palette.black};
    outline-offset: 0px;
  }
`;

export default ({ ...props }) => {
  return <Button {...props} />;
};
