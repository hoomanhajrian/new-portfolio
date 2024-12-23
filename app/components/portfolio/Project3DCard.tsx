"use client";
import { useState,useEffect } from "react";
import { RoundedBox, Text3D, Image, Circle } from "@react-three/drei";
import { Tooltip } from "./Tooltip";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Project3DCard = ({ data }:any) => {
  const [hovered, updateCardHovered] = useState(false);
  
  const [pointerHovered, updatePointerHover] = useState(false);

  const [github, website] = useLoader(TextureLoader, ['/img/github.png', '/img/website.png']);

  useEffect(() => {
    if (pointerHovered) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
  }, [pointerHovered]);

  return (
    <group
      onPointerEnter={() => {
        updateCardHovered(true);
      }}
      onPointerLeave={() => {
        updateCardHovered(false);
      }}
    >
      <RoundedBox
        castShadow
        position={data.position3D}
        args={[1, 12, 8]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.15} // Radius of the rounded corners. Default is 0.05
        smoothness={10} // The number of curve segments. Default is 4
        bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
      >
        <meshPhongMaterial color={hovered ? "lightBlue" : "#007bff"} />
      </RoundedBox>
      <Text3D
        position={[data.position3D[0] - 0.5, data.position3D[1] + 4, data.position3D[2] - 3]}
        font={"/Source Sans 3 ExtraLight_Regular.json"}
        letterSpacing={-0.06}
        size={0.8}
        rotation={[0, -Math.PI / 2, 0]}
      >
        {data.name}
      </Text3D>
      <Text3D
        position={[data.position3D[0] - 0.5, data.position3D[1] + 4, data.position3D[2] - 3]}
        font={"/Source Sans 3 ExtraLight_Regular.json"}
        letterSpacing={-0.06}
        size={0.8}
        rotation={[0, -Math.PI / 2, 0]}
      >
        {data.name}
      </Text3D>

      {/* tooltip */}
      {hovered ? <Tooltip text={data.description} position={data.position3D} offset={[-2, 10, 0]} /> : <></>}
      {/* links */}
      <Image url={data.imgUrl} position={[data.position3D[0] - 0.6, data.position3D[1] + 0.5, data.position3D[2]]} scale={[8, 6]}
        rotation={[0, -Math.PI / 2, 0]} />
      <Circle onPointerOver={() => {
        updatePointerHover(true);
      }}
        onPointerOut={() => {
          updatePointerHover(false);
        }} onClick={() => { window.open(data.gitHub,'_blank') }} args={[1, 360]} position={[data.position3D[0] - 0.8, data.position3D[1] - 4, data.position3D[2] - 2]} rotation={[0, -Math.PI / 2, 0]}>
        <meshPhongMaterial map={github} bumpScale={1.3} />
      </Circle>
      <Circle onPointerOver={() => {
        updatePointerHover(true);
      }}
        onPointerOut={() => {
          updatePointerHover(false);
        }} onClick={() => { window.open(data.href,'_blank') }} args={[1, 360]} position={[data.position3D[0] - 0.8, data.position3D[1] - 4, data.position3D[2] + 2]} rotation={[0, -Math.PI / 2, 0]}>
        <meshPhongMaterial map={website} bumpScale={1.3} />
      </Circle>
    </group>
  );
};

export default Project3DCard
