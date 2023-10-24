import { Canvas } from "@react-three/fiber";
import Model from "./Scene";
import { OrbitControls } from "@react-three/drei";

function RoomModel() {
  return (
    <Canvas
      camera={{
        position: [150, 60, 150],
      }}
    >
      <OrbitControls
        // minDistance={20}
        //minPolarAngle={Math.PI / 4}
        //maxPolarAngle={Math.PI / 1.59}
        //maxDistance={50}
        enablePan={false}
      />

      <ambientLight intensity={2} />
      <Model scale={[0.5, 0.5, 0.5]} />
    </Canvas>
  );
}

export default RoomModel;
