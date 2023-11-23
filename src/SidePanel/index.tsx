import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

interface Props { }

export const SidePanel: React.FC<Props> = (props: Props) => {
  const { data, isLoading, error } = useQuery({ queryKey: ['score'], queryFn: () => getScore(), refetchInterval: 1000 })

  if (isLoading || error) {
    return null;
  }

  return (
    <Card>
      <Title>Score</Title>
      <Score>{isLoading ? '-' : data}</Score>
    </Card>
  );
}


const Card = styled.div`
  position: absolute;
  z-index: 4;
  bottom: 36px;
  right: 36px;
  height: 200px;
  width: 300px;
  background: rgba(0,0,0, 0.5);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 32px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  line-height: 1;
  margin: 0;
  color: rgba(255,255,255, 0.7);
`

const Score = styled.div`
  font-size: 160px;
  font-weight: 600;
  line-height: 1;
`;

async function getScore(): Promise<number> {
  const { data } = await axios.get<number>('/api/game/score');
  return data;
}