import { useEffect, useState } from 'react';
import { LocationModel } from '../../model/location.model';

export const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = useState<LocationModel>();

  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

