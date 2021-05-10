import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddThermometer extends Component {
  state = {
    name: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addThermometer(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="name"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Member..."
          value={this.state.name}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Add"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

// PropTypes
AddThermometer.propTypes = {
  AddThermometer: PropTypes.object.isRequired,
};

export default AddThermometer;
