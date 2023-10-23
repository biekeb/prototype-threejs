import { Canvas } from "@react-three/fiber";
import Model from "./Scene";
import { OrbitControls } from "@react-three/drei";

function RoomModel({ selectedItem, onClose }) {
  return (
    <Canvas>
      <OrbitControls
        // minDistance={20}
        //minPolarAngle={Math.PI / 4}
        //maxPolarAngle={Math.PI / 1.59}
        //maxDistance={50}
        enablePan={false}
      />

      <ambientLight intensity={1} />
      <Model />
    </Canvas>
  );
}

export default RoomModel;
