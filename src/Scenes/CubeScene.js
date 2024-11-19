import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect } from "react";
import { useControls } from "leva";


function CubeScene() {

    return (
        <>
            <Canvas>
                
                <OrbitControls />
                <mesh>
                    <boxGeometry />
                    <meshBasicMaterial color="blue" />
                </mesh>
            </Canvas>
        </>
    )
}

export default CubeScene;