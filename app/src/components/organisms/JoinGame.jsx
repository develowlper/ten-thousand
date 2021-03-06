import React, { useState, useCallback } from 'react';
import { Link as ReachLink } from '@reach/router';

import styled from 'styled-components';

import Input from '../atoms/Input';

import { pinkButtonStyled } from '../atoms/PinkButton';
import generateGameKey from '../../utils/generateGameKey';

const Link = pinkButtonStyled(ReachLink);

// const Link = styled.a`
//   color: inherit;
//   text-decoration: none;
//   background: ${theme.palette.pink};
//   font-size: large;
//   text-transform: uppercase;
//   padding: 0.5rem 1rem;
//   font-weight: bold;
//   border: none;
//   margin-left: ${(props) => props.ml || 0}rem;
//   filter: grayscale(${(props) => (props.disabled ? 0.3 : 0)});
//   :focus {
//     outline: 2px solid ${theme.palette.black};
//     outline-offset: 0px;
//   }
// `;

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

const P = styled.p`
  text-align: justify;
`;

const JoinGame = () => {
  const [key, set] = useState(generateGameKey());

  const joinGame = useCallback();

  return (
    <Form>
      <P>
        Play ten thousand dice game online across multiple devices on a shared
        board. To create a new game or join an existing game, enter a game
        identifier and click 'Let's Play'.
      </P>
      <Actions>
        <Input value={key} onChange={(e) => set(e.target.value)}></Input>
        <Link ml={0.5} disabled={key?.length < 1} to={`/${key}`}>
          Lets's play
        </Link>
      </Actions>
    </Form>
  );
};

JoinGame.displayName = 'JoinGame';

JoinGame.propTypes = {};

JoinGame.defaultProps = {};

export default JoinGame;
