/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: Nazzareno (https://sketchfab.com/alessio.zoccheddu96)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-stylized-ramen-bowl-6b4ce426beed4e18bea2283973fc9949
Title: Low Poly Stylized Ramen Bowl
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Ramen(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./assets/ramen/scene-transformed.glb"
  );
  // const { actions } = useAnimations(animations, group);
  return (
    <Canvas
      camera={{
        position: [150, 100, 150],
      }}
    >
      <OrbitControls autoRotate={true} />
      <ambientLight intensity={1} />
      <group
        position={(0, -2, 0)}
        scale={1}
        ref={group}
        {...props}
        dispose={null}
      >
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="Ramenfbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_2">
                <group name="RootNode">
                  <group
                    name="Assembla"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  >
                    <mesh
                      name="Assembla_Ramen_0"
                      geometry={nodes.Assembla_Ramen_0.geometry}
                      material={materials.Ramen}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </Canvas>
  );
}

useGLTF.preload("./assets/ramen/scene-transformed.glb");
