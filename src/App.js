import React from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends React.Component {



componentDidMount = () => {

  let query = {'query': '{ user(id: 1) { id, name, phoneNumber }}'}

  fetch('http://localhost:3000/graphql',  {     
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(query)
      }).then(res => res.json())
      .then(res => console.log(res.data))
  

}


  






  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React!
          </a>
        </header>
      </div>
    );
  }
}
