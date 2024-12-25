import { Canvas } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { Animation3D } from "./Animation3D";
import { OrbitControls } from "@react-three/drei";
import { ProjectDataType } from "@/types";

export const Project3D = ({projectsData}:{projectsData:ProjectDataType[]})=>{

    return (
        <Canvas
                  shadows
                  camera={{ position: [0, 6, 50], fov: 55 }}
                  style={{
                    width: "100%",
                    height: "90vh",
                    background: 'white',
                  }}
                >
                  <OrbitControls/>
                  <Animation3D/>
                  <ambientLight intensity={1.5}/>
                  <RoundedBox
                  args={[1,2,3]}
                  position={[0,0,0]}
                  >
                    <meshStandardMaterial color={'red'}/>
                  </RoundedBox>
                </Canvas>
    )
};