import { Box, Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';


const dominos = [
    { id: 0, position: { x: -8, y: 20 } },
    { id: 1, position: { x: -6, y: 20 } },
    { id: 2, position: { x: -4, y: 20 } },
    { id: 3, position: { x: -2, y: 20 } },
    { id: 4, position: { x: 0, y: 20 } },
    { id: 5, position: { x: 2, y: 20 } },
    { id: 6, position: { x: 4, y: 20 } },
    { id: 7, position: { x: 6, y: 20 } },
    { id: 8, position: { x: 8, y: 20 } },
    { id: 9, position: { x: 10, y: 20 } }
];

export const Dominos = () => {
    const [hovered, hover] = useState(null);
    const boxRef = useRef({});
    const [ballTexture,dominoTexture] = useLoader(TextureLoader, ["/textures/dominos/ball.jpg","/textures/dominos/light-wood.jpg"])


    const jumpRight = (id) => {
        const rigidBody = boxRef.current[id];
        if (rigidBody) {
            rigidBody.applyImpulse({ x: -2, y: 0, z: 0 }, true); // Apply impulse
        }
    };

    return (
        <>
            {dominos.map((item) => {
                return (
                    <RigidBody
                        key={item.id}
                        friction={.3}
                        position={[item.position.x, -6, item.position.y]}
                        ref={(el) => (boxRef.current[item.id] = el)} // Store refs
                        colliders={"cuboid"}>
                        <Box
                            onPointerEnter={() => jumpRight(item.id)} // Track hover
                            onPointerLeave={() => hover(null)}
                            castShadow
                            receiveShadow
                            args={[0.5, 3, 1]}>
                            <meshPhongMaterial map={dominoTexture} />
                        </Box>
                    </RigidBody>)
            })}
            <RigidBody
                position={[-12, -6, 20]}
                colliders={'ball'}
                type="dynamic"
                restitution={2}
                >
                <Sphere
                    castShadow
                    receiveShadow
                    args={[1.3, 360, 360]}>
                    <meshPhongMaterial map={ballTexture} />
                </Sphere>
            </RigidBody>
        </>
    )
};