import React, {useState} from "react";
import "./App.css";
import AddThermometer from "./components/AddThermometer";
import Header from "./components/Header";
import Thermometers from "./components/Thermometers";
import { v4 as uuidv4 } from "uuid";


const App  = () => {
  const [thermometers, setThermometers] = useState(
    [
      { id: uuidv4(), name: "Rosa", max: 40, accepted: 0, reserved: 10 },
      { id: uuidv4(), name: "Ryan", max: 40, accepted: 0, reserved: 10 },
      { id: uuidv4(), name: "Kelli", max: 40, accepted: 0, reserved: 10 },
      { id: uuidv4(), name: "Craig", max: 40, accepted: 0, reserved: 10 },
      { id: uuidv4(), name: "Jake", max: 40, accepted: 0, reserved: 10 },
      { id: uuidv4(), name: "Jonathan", max: 40, accepted: 0, reserved: 10 },
      { id: uuidv4(), name: "Ian", max: 20, accepted: 0, reserved: 3 },
      { id: uuidv4(), name: "JDS", max: 10, accepted: 0, reserved: 2 }
    ]
  );

  // addThermometer = (name) => {
  //   const newThermometer = {
  //     id: uuidv4(),
  //     name,
  //   };
    // this.setState({
    //   thermometers: [...this.state.thermometers, newThermometer],
    // }); //.then((res) =>
    //this.setState({ thermometers: [...this.state.thermometers, res.data] })
    //);
    // should add catch

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
