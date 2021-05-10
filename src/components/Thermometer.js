import React, { Component } from "react";
import AddLiquid from "./AddLiquid";
//import PropTypes from "prop-types";

export class Thermometer extends Component {
  render() {
    const { id, name, max, count } = this.props.thermometer;

    let counttest = 5;

    let liquid = [];
    for (let i = max; i > 0; i--) {
      let thermClass = i <= counttest ? "liquid" : "empty";
      liquid.push(<div className={thermClass}>{i}</div>);
    }

    return (
      <div className="therm-holder">
        <h2>{name}</h2>
        <div className="thermometer">{liquid}</div>
        <div className="use">
          {counttest}/{max}
        </div>
        <AddLiquid />
      </div>
    );
  }
}

// PropTypes
// Thermometer.propTypes = {
//     todo: PropTypes.object.isRequired,
//     markComplete: PropTypes.func.isRequired,
//     delTodo: PropTypes.func.isRequired
// }

export default Thermometer;
