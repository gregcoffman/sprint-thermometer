import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddLiquid extends Component {
  state = {
    name: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addLiquid(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="submit"
          value="+1"
          className="add-liquid-btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

// PropTypes
// AddThermometer.propTypes = {
//   AddThermometer: PropTypes.object.isRequired,
// };

export default AddLiquid;
