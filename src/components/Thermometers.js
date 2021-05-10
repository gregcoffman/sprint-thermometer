import React, { Component } from "react";
import Thermometer from "./Thermometer";

export class Thermometers extends Component {
  render() {
    return this.props.thermometers.map((thermometer) => (
      <Thermometer key={thermometer.id} thermometer={thermometer} />
    ));
  }
}

export default Thermometers;
