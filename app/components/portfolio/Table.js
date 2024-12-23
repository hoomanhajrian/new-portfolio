
import React from "react";
import { RoundedBox, Plane } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { TableLamp } from "./TableLamp";
import { RigidBody } from "@react-three/rapier";
import { Dominos } from "./Dominos";


export const Table = () => {

    const [tableTexture] = useLoader(TextureLoader, ["/textures/table/table.jpg"])

    return (
        <>
            <RigidBody type="fixed" >
                <Plane
                    receiveShadow
                    castShadow
                    position={[0, -8, 15]}
                    args={[25, 15]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    smoothness={10} // The number of curve segments. Default is 4
                    bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                    creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle

                >
                    <meshPhongMaterial map={tableTexture} />
                </Plane>
                <RoundedBox
                    receiveShadow
                    castShadow
                    position={[0, -8.7, 15]}
                    args={[25, 15]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    smoothness={10} // The number of curve segments. Default is 4
                    bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                    creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle

                >
                    <meshPhongMaterial map={tableTexture} />
                </RoundedBox>
            </RigidBody>
            <RoundedBox
                castShadow
                position={[0, -12, 15]}
                args={[4, 7, 4]} // Width, height, depth. Default is [1, 1, 1]
                radius={0.15} // Radius of the rounded corners. Default is 0.05
                smoothness={10} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
            >
                <meshPhongMaterial map={tableTexture} />
            </RoundedBox>

            <TableLamp />
            <Dominos />
        </>
    )
};
