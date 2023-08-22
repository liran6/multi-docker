import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </header>
          <div>
            <Routes>
              <Route exact path="/" Component={Fib} />
              <Route exact path="/otherpage" Component={OtherPage} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
