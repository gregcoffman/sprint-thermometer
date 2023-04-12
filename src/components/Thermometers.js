import React, { Component } from "react";
import Thermometer from "./Thermometer";

const Thermometers = props => {
  return(props.thermometers.map((thermometer) => (
    <Thermometer key={thermometer.id} thermometer={thermometer} />
    
  )));
}

export default Thermometers;
