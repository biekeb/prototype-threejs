import React, { useState } from "react";
import RoomModel from "./RoomModel";
import PersonModel from "./PersonModel";
import DoggoModel from "./DoggoModel";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "./hackerRoom";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

const Container = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [ambientLightIntensity, setAmbientLightIntensity] = useState(1);

  const onItemClick = (item) => {
    setSelectedItem(item);
  };

  const itemComponentMap = {
    Woonkamer: RoomModel,
    Person: PersonModel,
    Doggo: DoggoModel,
  };

  const closePreview = () => {
    setSelectedItem(null);
  };

  const selectedComponent = itemComponentMap[selectedItem];

  const toggleAmbientLight = () => {
    // Toggle the ambient light intensity between 0 and 1
    const newIntensity = ambientLightIntensity === 1 ? 0.3 : 1;
    setAmbientLightIntensity(newIntensity);
  };

  return (
    <div>
      <h1>Prototype Three.js</h1>

      <div>
        <h2>3D objecten</h2>
        <div className="div-flex">
          <div className="div" onClick={() => onItemClick("Woonkamer")}>
            <h3>Woonkamer</h3>
            <p>
              <a href="#">Bekijk de woonkamer</a>
            </p>
          </div>

          <div className="div" onClick={() => onItemClick("Person")}>
            <h3>person</h3>
            <p>
              <a href="#">Bekijk de persoon</a>
            </p>
          </div>

          <div className="div" onClick={() => onItemClick("Doggo")}>
            <h3>Doggo</h3>
            <p>
              <a href="">Bekijk de doggo</a>
            </p>
          </div>
        </div>
      </div>
      {selectedComponent && (
        <div className="preview">
          <h2>Preview</h2>
          <button onClick={closePreview} className="close-button">
            Close
          </button>

          {React.createElement(selectedComponent)}
        </div>
      )}

      <button onClick={toggleAmbientLight}>
        Toggle Ambient Light ({ambientLightIntensity === 1 ? "Off" : "On"})
      </button>

      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
          marginTop: "50vh",
        }}
        camera={{
          position: [400, 60, 200],
        }}
      >
        <OrbitControls
          minDistance={100}
          maxDistance={500}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.59}
          enablePan={false}
        />
        <ambientLight intensity={ambientLightIntensity}/>


        <Scene />
      </Canvas>
    </div>
  );
};

export default Container;
