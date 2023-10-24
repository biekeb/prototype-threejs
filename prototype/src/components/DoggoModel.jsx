import { Canvas } from "@react-three/fiber";
import Doggo from "./Doggo";
import { OrbitControls } from "@react-three/drei";

function DoggoModel() {
  return (
    <Canvas
      camera={{
        position: [-20, 30, -50],
      }} // Set new default camera position here
    >
      <OrbitControls
        // minDistance={20}
        //minPolarAngle={Math.PI / 4}
        //maxPolarAngle={Math.PI / 1.59}
        //maxDistance={50}
        enablePan={false}
      />
      <ambientLight intensity={1} />
      <Doggo scale={[3, 3, 3]} />
    </Canvas>
  );
}

export default DoggoModel;
