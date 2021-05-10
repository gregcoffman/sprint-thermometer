import React, { Component } from "react";
import "./App.css";
import AddThermometer from "./components/AddThermometer";
import Header from "./components/Header";
import Thermometers from "./components/Thermometers";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    thermometers: [
      { id: uuidv4(), name: "Amy", max: 30 },
      { id: uuidv4(), name: "Craig", max: 30 },
      { id: uuidv4(), name: "Rachel", max: 30 },
      { id: uuidv4(), name: "Jake", max: 30 },
      { id: uuidv4(), name: "Greg", max: 30 },
    ],
  };

  addThermometer = (name) => {
    const newThermometer = {
      id: uuidv4(),
      name,
    };
    this.setState({
      thermometers: [...this.state.thermometers, newThermometer],
    }); //.then((res) =>
    //this.setState({ thermometers: [...this.state.thermometers, res.data] })
    //);
    // should add catch
  };

  render() {
    return (
      <div className="App">
        <Header />

        <AddThermometer addThermometer={this.addThermometer} />
        <Thermometers thermometers={this.state.thermometers} />
      </div>
    );
  }
}

export default App;
