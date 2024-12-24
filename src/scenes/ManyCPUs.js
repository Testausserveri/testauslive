import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree,useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect,useRef } from "react";
import { useControls } from "leva";
import { Tsrychip } from "../models/Tsrychip";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { GradientTexture, GradientType } from "@react-three/drei";


function CPUs({animate}) {

    const groupRef = useRef();
    const groupRef2 = useRef();

    const ROT_X_SPEED = .0005;
    const ROT_Y_SPEED = .0005;

    const rotateEachChild = (groupRef_) => {
        if (groupRef_.current) {
            groupRef_.current.children.forEach((child, index) => {
              if (child.isMesh || child.isGroup) { 
                child.rotation.y += ROT_Y_SPEED;
                child.rotation.x += ROT_X_SPEED;
              }
            });
          }
    }

    useFrame(() => {
        if (animate) {
            rotateEachChild(groupRef);
            rotateEachChild(groupRef2);
        }
    });

    return (
<>
                {/* z- is the camera's facing direction
                    we position the CPUs in the distance
                */}
                <group position={[0, 0, -15]} ref={groupRef}>
                    <Tsrychip position={[0, 2, 0]} />
                    <Tsrychip position={[-2, 1, 0]} rotation={[45, 90, 0]} />
                    <Tsrychip position={[-5, 1, 0]} rotation={[-100, 90, 20]} />
                    <Tsrychip position={[2, -2, 0]} />
                    <Tsrychip position={[3, 5, 0]} rotation={[0, 0, 20]} />
                    <Tsrychip position={[15, -1, 0]} rotation={[0, 125, 20]} />
                    <Tsrychip position={[-9, 5, 0]} rotation={[0, 75, 20]} />
                    <Tsrychip position={[-9, -4, 0]} rotation={[225, 115, 20]} />
                    <Tsrychip position={[12, 5, 0]} rotation={[225, 115, 20]} />
                </group>

                <group position={[5, 0, -25]} rotation={[0, 0, 90]} ref={groupRef2}>
                    <Tsrychip position={[-2, 1, 0]} rotation={[45, 90, 0]} />
                    <Tsrychip position={[-5, 1, 0]} rotation={[-100, 90, 20]} />
                    <Tsrychip position={[2, -2, 0]} />
                    <Tsrychip position={[3, 5, 0]} rotation={[0, 0, 20]} />
                    <Tsrychip position={[15, -1, 0]} rotation={[0, 125, 20]} />
                    <Tsrychip position={[-12, 5, 0]} rotation={[0, 75, 20]} />
                    <Tsrychip position={[-9, -4, 0]} rotation={[225, 115, 20]} />
                    <Tsrychip position={[12, 5, 0]} rotation={[225, 115, 20]} />
                </group>
                </>
    )
}

function ManyCPUsScene() {


    const {animate} = useControls({animate: true})

    return (
        <>
            <Canvas>

                <CPUs animate={animate}/>           

                {/*}  <OrbitControls /> */}


                {/* background is a blue gradient */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[500, 200, 200]} />
                    <meshBasicMaterial side={THREE.DoubleSide}
                        fog={false}
                        flatShading={false}>
                        <GradientTexture
                            stops={[0, 1]}
                            colors={['#0B069C', '#03005E']}
                            width={1024}
                            type={GradientType.Linear
                            }
                        />
                    </meshBasicMaterial>
                </mesh>


                <EffectComposer>
                    <Bloom
                        mipmapBlur={true}
                        kernelSize={64}
                        luminanceThreshold={.3}
                        luminanceSmoothing={.05}
                        intensity={.02}
                    />
                </EffectComposer>
            </Canvas>
        </>
    )
}

export default ManyCPUsScene;