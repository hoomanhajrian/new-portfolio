import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

export const Animation3D = ()=>{
      // mouse coords
  const [globalCoords, setGlobalCoords] = useState<{x:number,y:number}>({ x: 0, y: 0 });

  useEffect(()=>{
      const handleWindowMouseMove = (event: MouseEvent) => {
          setGlobalCoords({
            x: event.screenX,
            y: event.screenY,
          });
        };
      window.addEventListener("mousemove", handleWindowMouseMove);
      return ()=>{
        window.removeEventListener("mousemove", handleWindowMouseMove);
      }
  },[]);
  
  useEffect(() => {
      console.log(globalCoords);
    }, [globalCoords]);
  
  
    // useFrame(({ gl, scene, camera })=>{
    //   if(globalCoords.x > 0){
    //     camera.position.x += .01; 
    //     camera.position.y += .01; 
    //   }
    // })
    return<></>
};