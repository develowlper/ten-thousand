import React, { useState, useCallback } from 'react';

import randomWords from 'random-words';

import styled from 'styled-components';
import theme from '../atoms/theme';

import Button from '../atoms/PinkButton';
import Input from '../atoms/Input';

const Link = styled.a`
  color: inherit;
  text-decoration: none;
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

const Form = styled.div`
  display: grid;
  margin: 3rem auto;
  max-width: 400px;
  grid-template-columns: 1fr;
  grid-row-gap: 0.5rem;
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

const Error = styled.span`
  color: ${theme.palette.red};
`;

const Component = ({}) => {
  const [key, set] = useState(
    randomWords({ exactly: 1, wordsPerString: 2, separator: '-' })
  );

  const joinGame = useCallback();

  return (
    <Form>
      <p>
        Play ten thousand dice game online across multiple devices on a shared
        board. To create a new game or join an existing game, enter a game
        identifier and click 'Let's Play'.
      </p>
      <Actions>
        <Input value={key} onChange={(e) => set(e.target.value)}></Input>
        <Link ml={0.5} disabled={key?.length < 1} href={`/${key}`}>
          Lets's play
        </Link>
      </Actions>
    </Form>
  );
};

Component.displayName = 'Component';

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
