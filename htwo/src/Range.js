import React from "react";
import "./Range.css";

class Range extends React.Component {
  state = { size: 10 };

  handleChange = (event) => {
    this.setState({ size: event.target.value });
  };

  render() {
    return (
      <div>
        <hr />
        <input 
          type="range" 
          min="10" 
          max="240" 
          step="10" 
          value={this.state.size} 
          onChange={this.handleChange} 
        />
        <p>{this.state.size}px * {this.state.size}px</p>
        <div 
          className="square" 
          style={{ 
            width: this.state.size + "px", 
            height: this.state.size + "px" 
          }}
        />
      </div>
    );
  }
}

export default Range;