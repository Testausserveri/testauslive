import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect } from "react";
import { useControls } from "leva";


function Tunnel() {

    const {lol} = useControls({lol: 2})

    return (
        <>
            <Canvas>
                
                <OrbitControls />
                <mesh>
                    <boxGeometry />
                    <meshBasicMaterial color="orange" />
                </mesh>
            </Canvas>
        </>
    )
}

export default Tunnel;