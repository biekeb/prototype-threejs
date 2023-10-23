import React, { useState } from "react";
import RoomModel from "./RoomModel";

const Container = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemClick = (item) => {
    setSelectedItem(item);
  };

  const itemComponentMap = {
    Woonkamer: RoomModel,
    // Slaapkamer: SleepModel,
  };

  const selectedComponent = itemComponentMap[selectedItem];

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

          <div className="div" >
            <h3>Woonkamer</h3>
            <p>
              <a href="#">Bekijk de slaapkamer</a>
            </p>
          </div>

          <div className="div">
            <h3>Woonkamer</h3>
            <p>
              <a href="">Bekijk de woonkamer</a>
            </p>
          </div>
        </div>
      </div>
      {selectedComponent && (
        <div className="preview">
          <h2>Preview</h2>
          {React.createElement(selectedComponent)}
        </div>
      )}
    </div>
  );
};

export default Container;
