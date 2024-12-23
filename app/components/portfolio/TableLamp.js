import { useRef } from "react";
import { Cone,Box,SpotLight } from "@react-three/drei";

export const TableLamp = ()=>{
    const tableRef = useRef();
    return(
        <group>
            <Cone
                receiveShadow
                position={[0, -4, 15]}
                args={[3,3, 360]} // Width, height, depth. Default is [1, 1, 1]
            >
                <meshStandardMaterial color='#FFDB58' />
            </Cone>
            <Box ref={tableRef} position={[0, -8, 15]} args={[1,5,1]}>
                <meshStandardMaterial color={'brown'}/>
            </Box>
            <SpotLight
                castShadow
                position={[0, -4, 15]}
                distance={Infinity}
                penumbra={.2}
                angle={Math.PI / 2}
                attenuation={5}
                intensity={10}
                anglePower={5}
                target={tableRef.current}
            />
        </group>
    )
};