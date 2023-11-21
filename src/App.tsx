import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Game } from './Game';
import { SidePanel } from './SidePanel';
import { Rack } from './Rack';
import sound from './Game/whip.wav';

function App() {
  const onClick = useCallback(() => {
    const audio = new Audio(sound);
    audio.play();
  }, []);

  return (
    <Container onClick={onClick}>
      <Rack />
      <SidePanel />
      <Game />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
