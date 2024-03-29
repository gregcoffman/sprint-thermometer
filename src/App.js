import React, {useState} from "react";
import "./App.css";
import AddThermometer from "./components/AddThermometer";
import Header from "./components/Header";
import Thermometers from "./components/Thermometers";
import { v4 as uuidv4 } from "uuid";


const App  = () => {
  const [thermometers, setThermometers] = useState(
    [
      { id: uuidv4(), name: "Rosa", max: 60, accepted: 0, reserved: 6 },
      { id: uuidv4(), name: "Ryan", max: 60, accepted: 0, reserved: 6 },
      { id: uuidv4(), name: "Kelli", max: 60, accepted: 0, reserved: 6 },
      { id: uuidv4(), name: "Danielle", max: 60, accepted: 0, reserved: 6 },
      { id: uuidv4(), name: "Craig", max: 60, accepted: 0, reserved: 6 },
      { id: uuidv4(), name: "Jake", max: 60, accepted: 0, reserved: 6 },
      { id: uuidv4(), name: "Ian/JDS", max: 60, accepted: 0, reserved: 12 },
      { id: uuidv4(), name: "Jonathan", max: 60, accepted: 0, reserved: 30 }
    ]
  );

  return (
    <div className="App">
      <Header />

      
      <Thermometers thermometers={thermometers} />
      {/* <AddThermometer addThermometer={this.addThermometer} /> */}

      <p>Project inspired by CSM training content provided by <a href="https://www.sparkplugagility.com/" target="_blank">Sparkplug Agility</a>.</p>
    </div>
    
  );
};

export default App;
