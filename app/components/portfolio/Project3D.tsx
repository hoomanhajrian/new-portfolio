import { Canvas } from "@react-three/fiber";
import { Circle } from "@react-three/drei";
import { CameraRotation } from "./CameraRotation";
// import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { ProjectDataType } from "@/types";
import Project3DCard from "./Project3DCard";

export const Project3D = ({ projectsData }: { projectsData: ProjectDataType[] }) => {

  const [grassTexture, grassRoughness, grassNormal, grassDisplacement] = useLoader(TextureLoader, ['/textures/grass/grass-texture.png', '/textures/grass/grass-rough.png', '/textures/grass/grass-normal.png', '/textures/grass/grass-height.png']);

  return (
    <Canvas
      shadows
      camera={{ fov: 35 }}
      style={{
        width: "100%",
        height: "76.5vh",
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
      {/* ground */}
      <Circle
        receiveShadow
        position={[0, -6, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        args={[40, 360]} // Width, height, depth. Default is [1, 1, 1]
      >
        <meshPhongMaterial map={grassTexture} bumpMap={grassRoughness} normalMap={grassNormal} displacementMap={grassDisplacement} bumpScale={1.3} />
      </Circle>
    </Canvas>
  )
};