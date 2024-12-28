import { Canvas } from "@react-three/fiber";
import { Plane, RoundedBox, SpotLight } from "@react-three/drei";
import { CameraRotation } from "./CameraRotation";
import { OrbitControls } from "@react-three/drei";
import { ProjectDataType } from "@/types";
import Project3DCard from "./Project3DCard";
import { useRef } from "react";

export const Project3D = ({ projectsData }: { projectsData: ProjectDataType[] }) => {

const lightRef = useRef(null);

  return (
    <Canvas
      shadows
      camera={{ fov: 35 }}
      style={{
        width: "100%",
        height: "60vh",
        background: 'white',
      }}
    >
      {/* scene */}
      {/* <OrbitControls/> */}
      <CameraRotation />
      <ambientLight intensity={.8} />

      {/*3d card objects */}
      {projectsData.map((data: ProjectDataType) => {
        const angle = (data.id / projectsData.length) * 2 * Math.PI; // Spread cards evenly
        return <Project3DCard angle={angle} key={data.id} data={data} />
      })}
    </Canvas>
  )
};