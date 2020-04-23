import React from 'react';

import styled from 'styled-components';
import Headline from './components/Headline';

import theme from './theme';

const H1 = styled.h1`
  text-align: center;
`;

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

const Input = styled.input`
  font-size: large;
  padding: 0.25rem 0.5rem;
  border: 2px solid ${theme.palette.lightpink};
  :focus {
    border: none;
    outline: 2px solid ${theme.palette.pink};
    outline-offset: 0px;
  }
`;

const Box = styled.div`
  max-width: 600px;
  margin: auto;
`;

const Form = styled.form`
  margin: 3rem auto;
  max-width: 400px;
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

function App() {
  return (
    <Box>
      <Headline>
        <H1>Welcome to ten-thousand</H1>
      </Headline>
      <Form>
        <p>
          Play ten thousand dice game online across multiple devices on a shared
          board. To create a new game or join an existing game, enter a game
          identifier and click 'Let's Play'.
        </p>
        <Actions>
          <Input></Input>
          <Button ml={0.5} disabled>
            Lets's play
          </Button>
        </Actions>
      </Form>
    </Box>
  );
}

export default App;
