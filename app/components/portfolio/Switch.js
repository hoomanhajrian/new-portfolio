import { RoundedBox, Cone, SpotLight } from "@react-three/drei";
import { useRef } from "react";

const Switch = ({ position, updateSwitch, switchState }) => {
    const coneRef = useRef();
    const cone2Ref = useRef();
    return <group>
        {/* light 1 */}
        <group>
            <Cone
                receiveShadow
                position={[position[0], position[1] + 10, position[2] + 1]}
                args={[3, 2, 3]} // Width, height, depth. Default is [1, 1, 1]
            >
                <meshStandardMaterial color={switchState ? '#bbb' : '#FFDB58'} />
            </Cone>
            <SpotLight
                castShadow
                position={[position[0], position[1] + 10, position[2] + 1]}
                distance={Infinity}
                penumbra={.2}
                angle={Math.PI / 4}
                attenuation={5}
                intensity={5}
                anglePower={10}
                target={coneRef.current}
            />
        </group>
        {/* light 2 */}
        <group>
            <Cone
                receiveShadow
                position={[position[0] + 48, position[1] + 10, position[2] + 1]}
                args={[3, 2, 3]} // Width, height, depth. Default is [1, 1, 1]
            >
                <meshStandardMaterial color={switchState ? '#bbb' : '#FFDB58'} />
            </Cone>
            <SpotLight
                castShadow
                position={[position[0] + 48, position[1] + 10, position[2] + 1]}
                distance={Infinity}
                penumbra={.2}
                angle={Math.PI / 4}
                attenuation={5}
                intensity={5}
                anglePower={10}
                target={cone2Ref.current}
            />
        </group>
        {/* switch key */}
        <group onClick={() => { updateSwitch(!switchState) }}>
            <RoundedBox
                ref={coneRef}
                receiveShadow
                position={position}
                args={[3, 3, 1.5]} // Width, height, depth. Default is [1, 1, 1]
                radius={0.3} // Radius of the rounded corners. Default is 0.05
                smoothness={4} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle

            >
                <meshPhongMaterial color={'white'} />
            </RoundedBox>

            <RoundedBox
            onPointerEnter={()=>{document.body.style.cursor = "pointer";}}
            onPointerLeave={()=>{document.body.style.cursor = "default";}}
                receiveShadow
                position={position}
                args={[0.5, 1, 3]} // Width, height, depth. Default is [1, 1, 1]
                radius={0.1} // Radius of the rounded corners. Default is 0.05
                smoothness={4} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
                rotation={switchState ? [+Math.PI / 8, 0, 0] : [-Math.PI / 8, 0, 0]}
            >
                <meshPhongMaterial color={'lightblue'} />
            </RoundedBox>
        </group>
        <RoundedBox
            ref={cone2Ref}
            receiveShadow
            position={[25, -1, 0]}
        >
            <meshPhongMaterial color={'none'} />
        </RoundedBox>
    </group>
};
export default Switch;