import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import Ring from "./Ring";

const Planet = (props) => {
  const texture = new THREE.TextureLoader().load(props.texture);

  const ref = useRef();

  let t = 0;
  useFrame(() => {
    t += props.speed ? props.speed : null;
    ref.current.position.x = props.rotationValue * Math.cos(t) + 0;
    ref.current.position.z = props.rotationValue * Math.sin(t) + 0; // These to strings make it work
    ref.current.rotation.y += 0.002;
  });

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <group {...props} ref={ref}>
      <mesh>
        <sphereGeometry attach="geometry" position={props.position} />
        <meshLambertMaterial color={props.color} map={texture} />
        {props.name === "Saturn" ? (
          <Ring
            texture={true}
            position={props.position}
            scale={[5, 5, 5]}
            attributes={[0.25, 0.35, 128]}
          />
        ) : (
          ""
        )}
      </mesh>
      <Html>
        <div style={{ color: "white" }}>{props.name}</div>
      </Html>
    </group>
  );
};

export default Planet;
