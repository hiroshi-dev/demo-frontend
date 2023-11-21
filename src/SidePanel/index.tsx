import React from 'react';
import styled from 'styled-components';

interface Props { }

export const SidePanel: React.FC<Props> = (props: Props) => {
  return (
    <Card>Side panel</Card>
  );
}


const Card = styled.div`
  position: absolute;
  z-index: 4;
  bottom: 36px;
  right: 36px;
  height: 250px;
  width: 300px;
  background: rgba(0,0,0, 0.5);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 32px;
  color: #fff;
`