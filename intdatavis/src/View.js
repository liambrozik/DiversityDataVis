import React, { Component } from "react";
import Stage from "./Stage.js";
import Menu from "./Menu.js";
import "./View.css";

class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pid: 0,
      place: "zero",
      gm: 50,
      gf: 50,
      ga: 0,
      gb: 0,
      gw: 0,
      gh: 0,
      go: 0,
      gma: 50,
      gfa: 50,
      gaa: 0,
      gba: 0,
      gwa: 0,
      gha: 0,
      goa: 0
    };
  }

  render() {
    return (
      <div className="View">
        <div className="title">
          Diversity in Tech
          <span className="subtitle"> A closer look at Silicon Valley</span>
        </div>
        <Stage
          place={this.state.place}
          pid={this.state.pid}
          onClick={i => this.handleClick(i)}
          gf={this.state.gf}
          gm={this.state.gm}
          ga={this.state.ga}
          gb={this.state.gb}
          gw={this.state.gw}
          gh={this.state.gh}
          go={this.state.go}
          gfa={this.state.gfa}
          gma={this.state.gma}
          gaa={this.state.gaa}
          gba={this.state.gba}
          gwa={this.state.gwa}
          gha={this.state.gha}
          goa={this.state.goa}
        />
        <Menu
          onClick={i => this.handleClick(i)}
          onChange={(e, g) => this.handleChange(e, g)}
          place={this.state.place}
          pid={this.state.pid}
          gf={this.state.gf}
          gm={this.state.gm}
          ga={this.state.ga}
          gb={this.state.gb}
          gw={this.state.gw}
          gh={this.state.gh}
          go={this.state.go}
          gfa={this.state.gfa}
          gma={this.state.gma}
          gaa={this.state.gaa}
          gba={this.state.gba}
          gwa={this.state.gwa}
          gha={this.state.gha}
          goa={this.state.goa}
        />
      </div>
    );
  }

  handleChange = (e, g) => {
    switch (g) {
      case 0:
        this.setState({
          gm: 100 - e,
          gf: e
        });
        break;
      case 1:
        this.setState({
          gm: e,
          gf: 100 - e
        });
        break;
      case 2:
        this.setState({
          ga: e
        });
        break;
      case 3:
        this.setState({
          gb: e
        });
        break;
      case 4:
        this.setState({
          gw: e
        });
        break;
      case 5:
        this.setState({
          gh: e
        });
        break;
      case 6:
        this.setState({
          go: e
        });
        break;
      case 7:
        this.setState({
          gma: 100 - e,
          gfa: e
        });
        break;
      case 8:
        this.setState({
          gma: e,
          gfa: 100 - e
        });
        break;
      case 9:
        this.setState({
          gaa: e
        });
        break;
      case 10:
        this.setState({
          gba: e
        });
        break;
      case 11:
        this.setState({
          gwa: e
        });
        break;
      case 12:
        this.setState({
          gha: e
        });
        break;
      case 13:
        this.setState({
          goa: e
        });
        break;
      default:
        console.log("Invald argument g = " + g);
        break;
    }
  };

  handleClick = i => {
    switch (i) {
      case 1:
        this.setState({ place: "one", pid: 1 });
        break;
      case 2:
        this.setState({ place: "two", pid: 2 });
        break;
      case 3:
        this.setState({ place: "three", pid: 3 });
        break;
      case 4:
        this.setState({ place: "four", pid: 4 });
        break;
      default:
        this.setState({ place: "zero", pid: 0 });
    }
  };
}

export default View;
