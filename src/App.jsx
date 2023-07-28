import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      memphisDisplayName: '',
      memphisLontitude: '',
      memphisLatitude: ''
    }
  }

  handleGetMemphis = async () => {
    console.log("click");
    let result = await axios.get("https://us1.locationiq.com/v1/search?key=pk.7c317e21f05b6efd9a783137cf700eab&q=memphis&format=json");
    let data = result.data;
    console.log(result.data[0].memphisLatitude); 
  
    this.setState({
      memphisDisplayName: data[0].display_name,
      memphisLatitude: data[0].lat, 
      memphisLongitude: data[0].lon 
    });
  };
  

  render() {

    return (
      <>
        <h3>Display Name: {this.state.memphisDisplayName}</h3>
        <h3>Longitude: {this.state.memphisLongitude}</h3>
        <h3>Latitude: {this.state.memphisLatitude}</h3>
       
        <button onClick={this.handleGetMemphis}>Explore</button>
      </>
    );
  }
}

export default App;



// import React, { Component } from "react";
// import axios from "axios";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       locations: []
//     };
//   }

//   handleGetMemphis = async () => {
//     console.log("click");
//     let result = await axios.get("https://us1.locationiq.com/v1/search?key=pk.7c317e21f05b6efd9a783137cf700eab&q=Memphis&format=json");
//     let data = result.data;
//     let memphisDisplayName = data[0].display_name; // Corrected the property access
//     let memphisLongitude = data[0].lon; // Add longitude
//     let memphisLatitude = data[0].lat; // Add latitude

//     console.log(result);
//     console.log("done");
//     this.setState({
//       memphisDisplayName,
//       memphisLongitude,
//       memphisLatitude
//     });
//   }

//   render() {
//     return (
//       <>
//         <button onClick={this.handleGetMemphis}>Get the data for the map</button>
//         <h3>Display Name: {this.state.memphisDisplayName}</h3>
//         <h3>Longitude: {this.state.memphisLongitude}</h3>
//         <h3>Latitude: {this.state.memphisLatitude}</h3>
//       </>
//     );
//   }
// }

// export default App;


