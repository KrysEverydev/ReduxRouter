import React, { Component } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { connect, Provider } from "react-redux";
import Link from "redux-first-router-link";
import configureStore from "./store/configureStore";
import Home from "./scenes/Home";
import About from "./scenes/About";
import Projects from "./scenes/Projects";
import Profile from "./scenes/Profile";
import Timeline from "./scenes/Timeline";

const store = configureStore();

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  height: "100vh",
  width: "100vw",
  marginTop: "-8px",
  marginLeft: "-8px"
};

const navLink = {
  backgroundColor: "blue",
  padding: "1rem 2rem",
  margin: "1rem",
  color: "white"
};

const mapStateToProps = state => {
  return {
    location: state.location
  };
};

class App extends Component {
  static propTypes = {
    location: PropTypes.object
  };

  scenes = {
    HOME: <Home />,
    ABOUT: <About />,
    PROFILE: <Profile />,
    PROJECTS: <Projects />,
    TIMELINE: <Timeline />
  };

  render() {
    return (
      <div style={styles}>
        <h1>Redux First Router Demo</h1>
        <p>Open your redux dev tools to see the route actions</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to={{ type: "HOME" }} style={navLink}>
            Home page
          </Link>
          <Link to={{ type: "ABOUT" }} style={navLink}>
            About me
          </Link>
          <Link to={{ type: "PROJECTS" }} style={navLink}>
            Projects
          </Link>
          <Link
            to={{ type: "PROFILE", payload: { username: "demoUserName" } }}
            style={navLink}
          >
            Profile
          </Link>
        </div>
        {this.scenes[this.props.location.type]}
      </div>
    );
  }
}

const ConnectedApp = connect(mapStateToProps)(App);

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);
