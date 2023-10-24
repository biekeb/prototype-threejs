import { Canvas } from "@react-three/fiber";
import Person from "./Person";
import { OrbitControls } from "@react-three/drei";

function PersonModel() {
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
      <Person />
    </Canvas>
  );
}

export default PersonModel;
