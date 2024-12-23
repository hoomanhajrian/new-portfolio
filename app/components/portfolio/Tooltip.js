import React from 'react';
import {RoundedBox,Html } from '@react-three/drei';

export const Tooltip = ({ position, offset, text }) => {
  return (
    <group>
      <RoundedBox
        castShadow
        position={[25, 20, 10]}
        args={[1, 12, 20]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.15} // Radius of the rounded corners. Default is 0.05
        smoothness={10} // The number of curve segments. Default is 4
        bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
      >
        <meshPhongMaterial color="lightblue" />
      </RoundedBox>
        <Html position={[23, 25, 3]} rotation={[0, -Math.PI / 2, 0]}>
          <p style={{width:'18rem',color:'white',fontWeight:'bold'}}>Description:</p>
          <p style={{width:'18rem',color:'white',fontWeight:'bold'}}>{text}</p>
        </Html>
    </group>
  )
};
