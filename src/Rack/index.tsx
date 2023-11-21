import React from 'react';
import { useStore } from '../common/store';
import rack from './rack.png'
import styled from 'styled-components';
import { useMousePosition } from '../common/hooks/useMousePosition';

interface Props { }

export const Rack: React.FC<Props> = (props: Props) => {
  // const location = useStore(state => state.location);
  const location = useMousePosition();

  if (!location) {
    return null
  }

  return (
    <StyledRack style={{ top: location.y, left: location.x }} />
  );
}

const StyledRack = styled.div`
  position: absolute;
  z-index: 2;
  height: 150px;
  width: 150px;
  background: url(${rack});
  background-size: cover;
  transform: translateX(-50%) translateY(-30%);
`
