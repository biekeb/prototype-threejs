/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: gulvtaepper (https://sketchfab.com/gulvtaepper)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pancakes-low-poly-model-5805624aade041fd814bec93668b9313
Title: 🥞pancakes low poly model🥞
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Pancakes(props) {
  const { nodes, materials } = useGLTF(
    "./assets/pancakes/scene-transformed.glb"
  );
  return (
    <Canvas
      camera={{
        position: [50, 50, 150],
      }}
    >
      <OrbitControls autoRotate={true} />
      <ambientLight intensity={1} />
      <group {...props} dispose={null}>
        <group scale={10} position={[0, -20, 0]}>
          <mesh
            geometry={nodes.plate_pancake_0.geometry}
            material={materials.pancake}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.pancake_pancake_0.geometry}
            material={materials.pancake}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </Canvas>
  );
}

useGLTF.preload("./assets/pancakes/scene-transformed.glb");