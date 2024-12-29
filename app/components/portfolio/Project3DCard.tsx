"use client";
import { useState, useEffect } from "react";
import { RoundedBox, Text3D, Image, Circle } from "@react-three/drei";
import { Tooltip } from "./Tooltip";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { ProjectDataType } from "@/types";

const Project3DCard = ({ data, angle, radius = 30 }: { data: ProjectDataType, angle: number, radius?: number }) => {
  const [hovered, updateCardHovered] = useState(false);
  const [pointerHovered, updatePointerHover] = useState(false);
  const [github, website] = useLoader(TextureLoader, ['/img/github.png', '/img/website.png']);

  // Calculate the angle for the card to face the center
  const x = radius * Math.cos(angle); // X-coordinate
  const z = radius * Math.sin(angle); // Z-coordinate
  const rotationY = -angle;

  useEffect(() => {
    if (pointerHovered) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
  }, [pointerHovered]);

  return (<>
    <group
      onPointerEnter={() => {
        updateCardHovered(true);
      }}
      onPointerLeave={() => {
        updateCardHovered(false);
      }}
      position={[x, 0, z]}
      rotation={[0, rotationY, 0]} // Adjust rotation to face the center
      castShadow
      receiveShadow
    >
      <RoundedBox
        castShadow
        args={[.2, 10, 7]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.15} // Radius of the rounded corners. Default is 0.05
        smoothness={10} // The number of curve segments. Default is 4
        bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
      >
        <meshPhongMaterial color={hovered ? "lightBlue" : "#007bff"} />
      </RoundedBox>
      <Text3D
        position={[0 + 0.2, 0 + 4, 3]}
        font={"/Source Sans 3 ExtraLight_Regular.json"}
        letterSpacing={-0.06}
        size={0.7}
        rotation={[0, Math.PI / 2, 0]}
        resolution='100'
      >
        {data.name}
      </Text3D>
      <Text3D
        position={[0 + 0.2, 0 + 3.3, 3]}
        font={"/Source Sans 3 ExtraLight_Regular.json"}
        letterSpacing={-0.06}
        size={0.4}
        rotation={[0, Math.PI / 2, 0]}
      >
        {data.position}
      </Text3D>

      <Image url={data.imgUrl} position={[0 + .3, 1, 0]} scale={[7, 3]}
        rotation={[0, Math.PI / 2, 0]} />

      {/* links */}
      <Circle onPointerOver={() => {
        updatePointerHover(true);
      }}
        onPointerOut={() => {
          updatePointerHover(false);
        }} onClick={() => { window.open('data.gitHub', '_blank') }} args={[1, 360]} position={[0 + .3, -3, -2]} rotation={[0, Math.PI / 2, 0]}>
        <meshPhongMaterial map={github} bumpScale={1.3} />
      </Circle>
      <Circle onPointerOver={() => {
        updatePointerHover(true);
      }}
        onPointerOut={() => {
          updatePointerHover(false);
        }} onClick={() => { window.open('data.href', '_blank') }} args={[1, 360]} position={[0 + .3, -3, 2]} rotation={[0, Math.PI / 2, 0]}>
        <meshPhongMaterial map={website} bumpScale={1.3} />
      </Circle>
    </group>
    {/* tooltip */}
    {hovered ? <Tooltip text={data.description} /> : <></>}
  </>
  );
};

export default Project3DCard
