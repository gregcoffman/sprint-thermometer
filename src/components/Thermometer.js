import React, { useState } from "react";

const Thermometer = props => {
  let { id, name, max, accepted, reserved } = props.thermometer;
  const[acceptedState, setAcceptedState] = React.useState(accepted);
  const[reservedState, setReservedState] = React.useState(reserved);


  function addValue(val) {
    console.log(val);
    setAcceptedState(acceptedState+val);
  }

  function addOne() { addValue(1); }

  function addFive() { addValue(5); }

  function rmOne() { addValue(-1); }

  function reset() { setAcceptedState(accepted);  setReservedState(reserved); }

  function setReserved(val) { setReservedState(val) }

  let liquid = [];
  for (let i = max; i > 0; i--) {
    let thermClass = i <= reservedState+acceptedState ? "accepted" : "empty";
    if( i <= reservedState) { thermClass = "reserved"};
    liquid.push(<a className={thermClass} onClick={() => setReserved(i)}>{i}</a>);
  }

  return (
    <div className="therm-holder">
      <h2>{name}</h2>
      <div className="thermometer">{liquid}</div>
      <div className="use">
        {reservedState+acceptedState}/{max}
      </div>
      <button onClick={addOne}>+1</button>
      <button onClick={addFive}>+5</button>
      <button onClick={rmOne}>-1</button>
      <a className="reset" onClick={reset}>reset</a>
    </div>
  );
}

export default Thermometer;
