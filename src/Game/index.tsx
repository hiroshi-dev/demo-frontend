import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import fly from './fly.png';
import { useStore } from '../common/store';
import { FlyModel } from '../model/fly.model';
import { uuid } from '../common/uuid';
import axios from 'axios';
import { useQueryClient } from 'react-query';

interface Props { }

export const Game: React.FC<Props> = (props: Props) => {
  const queryClient = useQueryClient()

  const createFly = useStore(state => state.createFly);
  const removeFly = useStore(state => state.removeFly);
  const flies = useStore(state => state.flies);

  const onClick = useCallback(async (fly: FlyModel) => {
    removeFly(fly);
    
    await axios({
      method: 'POST',
      url: '/api/game/smash-fly',
      data: {
        flyId: fly.id
      }
    });
    
    queryClient.invalidateQueries({ queryKey: ['score'] })
  }, [queryClient, removeFly]);

  useEffect(() => {
    const interval = setInterval(() => {
      const { innerWidth: width, innerHeight: height } = window;

      const fly: FlyModel = {
        id: uuid(),
        location: {
          x: Math.random() * width,
          y: Math.random() * height,
        }
      }

      createFly(fly);
    }, 2000);

    return () => clearInterval(interval);
  }, [createFly])

  return (
    <Container>
      {
        flies.map(fly => (
          <Fly
            onClick={() => onClick(fly)}
            key={fly.id}
            style={{ top: fly.location.y, left: fly.location.x }}
          />
        ))
      }
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: none;
  z-index: 3;
`

const Fly = styled.div`
  position: absolute;
  width: 100px;
  height: 76.5px;
  background: url(${fly});
  background-size: cover;
  z-index: 5;
`;