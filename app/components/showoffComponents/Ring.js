import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from 'three';



const Ring = (props) => {

    const saturnRingTexture = useLoader(TextureLoader,'/textures/saturn_ring.png');


    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [clicked, click] = useState(false)
   
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            position={[0, 0, 0]}
            rotation={[-(Math.PI / 2), 0, 0]}
            ref={ref}
            onClick={() => click(!clicked)}
        >
            <ringGeometry args={props.attributes} />
            <meshLambertMaterial side={THREE.DoubleSide} color={props.color} map={props.texture ? saturnRingTexture : null} opacity={props.texture ? 0.9 : 1} transparent />
        </mesh>
    )
};

export default Ring;