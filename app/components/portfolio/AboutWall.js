import { Plane, RoundedBox, Text3D } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export const AboutWall = () => {
const [photo,photoFrame] = useLoader(TextureLoader, ['/img/me.jpg','/textures/table/table.jpg'])
    return (
        <group>
            <group>
            <Plane
                receiveShadow
                position={[-31.4, 0, 12]}
                rotation={[0, Math.PI / 2, 0]}
                args={[9.5, 15.5]} // Width, height, depth. Default is [1, 1, 1]
            >
                <meshPhongMaterial map={photo} bumpScale={1.3} />
            </Plane>
            <RoundedBox
                receiveShadow
                position={[-32, 0, 12]}
                rotation={[0, Math.PI / 2, 0]}
                args={[11, 17]} // Width, height, depth. Default is [1, 1, 1]
            >
                <meshPhongMaterial map={photoFrame} bumpScale={1.3} />
            </RoundedBox>
            </group>
            <Plane
                receiveShadow
                position={[-32, 1, 48]}
                rotation={[0, Math.PI / 2, 0]}
                args={[47, 13]} // Width, height, depth. Default is [1, 1, 1]
            >
                <meshBasicMaterial color={'#000'}/>
            </Plane>
            <Text3D
                position={[-32, 5, 55]}
                font={"/Source Sans 3 ExtraLight_Regular.json"}
                letterSpacing={-0.06}
                size={1.5}
                rotation={[0, Math.PI / 2, 0]}
            >
                About Me
            </Text3D>
            <Text3D
                position={[-32, 3, 70]}
                font={"/Source Sans 3 ExtraLight_Regular.json"}
                letterSpacing={-0.06}
                size={0.8}
                rotation={[0, Math.PI / 2, 0]}
            >
                This website is just an asset for me to show off part of my skills and my resume to help me find my place
            </Text3D>
            <Text3D
                position={[-32, 1.5, 70]}
                font={"/Source Sans 3 ExtraLight_Regular.json"}
                letterSpacing={-0.06}
                size={0.8}
                rotation={[0, Math.PI / 2, 0]}
            >
                in tech industry as a full stack developer. I studied Hardware and Software engineering to be able to understand
            </Text3D>
            <Text3D
                position={[-32, 0, 70]}
                font={"/Source Sans 3 ExtraLight_Regular.json"}
                letterSpacing={-0.06}
                size={0.8}
                rotation={[0, Math.PI / 2, 0]}
            >
                understand the concepts of computer language and how to build one and become a developer. Also finished my
            </Text3D>
            <Text3D
                position={[-32, -1.5, 70]}
                font={"/Source Sans 3 ExtraLight_Regular.json"}
                letterSpacing={-0.06}
                size={0.8}
                rotation={[0, Math.PI / 2, 0]}
            >
                studies in coding for web, mobile, and software and still coding to add to my knowledge day by day.
            </Text3D>
        </group>)
};