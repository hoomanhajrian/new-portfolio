import React from 'react';
import { Html } from '@react-three/drei';

export const Tooltip = ({ text }: { text: string }) => {
  return (
    <Html position={[0, 18, 0]} args={[10, 10]}>
      <div>
        <p style={{ width: '16rem', color: '#F28500', fontWeight: 'bold',fontSize:'3rem' }}>Description:</p>
        <p style={{ width: '35rem', color: '#F28500', fontWeight: 'bold',fontSize:'1rem' }}>{text}</p>
      </div>
    </Html>
  )
};
