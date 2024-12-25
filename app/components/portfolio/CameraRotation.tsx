import { useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const CameraRotation = ({ radius = 10, speed = 0.01 }: { radius?: number, speed?: number }) => {
  // mouse coords
  const [globalCoords, setGlobalCoords] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [screenDimention, updateScreenDimentions] = useState<{ width: number, height: number }>({
    width: 0,
    height: 0,
  });
  const angleRef = useRef(0);

  useEffect(() => {
    const handleWindowMouseMove = (event: MouseEvent) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    updateScreenDimentions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const screenSizeHandler = () => {
      updateScreenDimentions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", screenSizeHandler);
    window.addEventListener("mousemove", handleWindowMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("resize", screenSizeHandler);
    }
  }, []);

  useEffect(() => {
    console.log(globalCoords);
    console.log(screenDimention.width / 2);
  }, [globalCoords,screenDimention]);


  useFrame(({ camera }) => {
    if (globalCoords.x > (screenDimention.width / 2) + 150) {
      angleRef.current += speed; // Increment the angle
      const x = radius * Math.cos(angleRef.current);
      const z = radius * Math.sin(angleRef.current);
      camera.position.set(x, 20, z); // Update camera position
      camera.lookAt(0, 0, 0); // Ensure the camera looks at the center
    }
    else if (globalCoords.x < (screenDimention.width / 2) - 150) {
      angleRef.current -= speed; // Decrement the angle
      const x = radius * Math.cos(angleRef.current);
      const z = radius * Math.sin(angleRef.current);
      camera.position.set(x, 20, z); // Update camera position
      camera.lookAt(0, 0, 0); // Ensure the camera looks at the center
    }
    else {
      camera.lookAt(0, 0, 0); // Ensure the camera looks at the center
    }
  });

  return null; // No need to render anything
};