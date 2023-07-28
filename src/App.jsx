import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  handleGetExplore  = async () => {
  let result =  await axios.get("");
  console.log(result)
}


  render() {
    return (
      <>
        Hello Brian!
        <button onClick={this.handleGetExplore}> </button>
      </>
    );
  }
}

export default App;