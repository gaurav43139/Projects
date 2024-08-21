import { Button } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <TestClass />
    </div>
  );
};


// Class Component
class TestClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h1>Class Component {this.state.count}</h1>
        <button
          onClick={(event) => {
            this.setState({
                count: this.state.count + 1
            });
          }}
        >
          increment count
        </button>
      </div>
    );
  }
}

export default About;
