import React, { Component } from "react";

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: `select ${this.props.placeHolder}`,
      close: false,
    };
  }
  handleClose = () => {
    this.setState({ close: !this.state.close });
  };
  handleSelect = (drop) => {
    this.setState({ drop: drop });
  };
  render() {
    const { close } = this.state;
    return (
      <div>
        <div onClick={this.handleClose} className="drop-down-cont">
          <p className="drop-text">{this.state.drop}</p>
          {close === false ? (
            <i class="fas fa-chevron-down"></i>
          ) : (
            <i class="fas fa-chevron-up"></i>
          )}
        </div>
        <div
          onClick={this.handleClose}
          style={{ display: close === false ? "none" : "block" }}
          className="drop-down-select"
        >
          {this.props.options.map((drop, i) => (
            <p onClick={() => this.handleSelect(drop)} key={i}>
              {drop}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default DropDown;
