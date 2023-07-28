import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    // Example API request using axios
    axios.get("https://api.example.com/data").then((response) => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <>
        Hello Brian!
      </>
    );
  }
}

export default App;