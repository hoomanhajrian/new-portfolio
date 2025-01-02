import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, RoundedBox } from "@react-three/drei";


const Button3D = ({ func, position, text, projects, about, args, textPos, rotation } :any ) => {

  const [pointerHovered, updatePointerHover] = useState(false);
  const buttonRef  = useRef(null);

  useFrame(({ camera }) => {
    if (about !== undefined && projects !== undefined) {
      // projects animation
      if (!about && projects && camera.rotation.y >= -Math.PI / 2.4) {
        camera.position.x -= 0.05;
        camera.rotation.y -= 0.005;
        camera.rotation.z -= 0.0005;
      }
      // about animation
      if (about && !projects && camera.rotation.y <= Math.PI / 2.2) {
        camera.position.x += .05;
        camera.rotation.y += 0.005;
      }
      // back from about and project animation
      if (!about && !projects && (camera.rotation.y < -0.1 || camera.rotation.y > 0.1)) {
        if (camera.rotation.y < 0.1) {
          camera.position.x += 0.05;
          camera.rotation.y += 0.005;
          camera.rotation.z += 0.0005;
        }
        else if (camera.rotation.y > -0.1) {
          camera.position.x -= .05;
          camera.rotation.y -= 0.005;
        }
      }
    }
  });




  useEffect(() => {
    if (pointerHovered) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
  }, [pointerHovered]);

  return <>
    <RoundedBox
      ref={buttonRef}
      receiveShadow
      position={position}
      args={args} // Width, height, depth. Default is [1, 1, 1]
      radius={0.5} // Radius of the rounded corners. Default is 0.05
      smoothness={4} // The number of curve segments. Default is 4
      bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
      creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
      onPointerOver={() => {
        updatePointerHover(true);
      }}
      onPointerOut={() => {
        updatePointerHover(false);
      }}
      onClick={() => {
        func();
      }}
    >
      <meshPhongMaterial color={pointerHovered ? "darkblue" : "#1677ff"} />
    </RoundedBox>
    <Text3D
      rotation={rotation}
      position={[position[0] + textPos[0], position[1] + textPos[1], position[2] + textPos[2]]}
      font={"/Source Sans 3 ExtraLight_Regular.json"}
      letterSpacing={-0.06}
      size={1}
    >
      {text}
      <meshPhongMaterial color="#fff" />
    </Text3D>
  </>
};

export default Button3D;