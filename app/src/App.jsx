import React from 'react';

import { Router } from '@reach/router';

import Home from './pages/Home';
import GameBoard from './pages/GameBoard';

function App() {
  return (
    <Router>
      <Home path="/" />
      <GameBoard path="/:gameKey" />
    </Router>
  );
}

export default App;
