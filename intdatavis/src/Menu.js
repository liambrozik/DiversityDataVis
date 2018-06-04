import React, { Component } from "react";
import "./Menu.css";
import $ from "jquery";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valid: true,
      totalP: 0,
      totalPa: 0,
      gf: 0,
      gm: 0,
      companies: [
        "",
        <div className="question">
          Take your best guess at gender diversity in <u>technical</u> positions
          in Silicon Valley
        </div>,
        <div className="question">
          Take your best guess at gender diversity in <u>all</u> positions in
          Silicon Valley
        </div>,
        <div className="question">
          Take your best guess at racial and ethnic diversity in{" "}
          <u>technical</u> positions in Silicon Valley
        </div>,
        <div className="question">
          Take your best guess at racial and ethnic diversity in <u>all</u>{" "}
          positions in Silicon Valley
        </div>
      ],
      body: [
        "",
        <div className="input-group">
          <div className="option-group">
            <div className="option">
              <div className="lbl">
                <label htmlFor="g-f"> Female </label>
              </div>
              <i className="fas fa-female g" />
              <br />
              <input
                id="g-f"
                className="num-input"
                type="number"
                size="3"
                onChange={() => this.onChange($("#g-f").val(), 0)}
              />
              <span className="percent">%</span>
            </div>
            <div className="option">
              <div className="lbl">
                <label htmlFor="g-m"> Male </label>
              </div>
              <i className="fas fa-male g" />
              <br />
              <input
                id="g-m"
                className="num-input"
                type="number"
                size="3"
                onChange={() => this.onChange($("#g-m").val(), 1)}
              />
              <span className="percent">%</span>
            </div>
          </div>
        </div>,
        <div className="input-group">
          <div className="option-group">
            <div className="option">
              <div className="lbl">
                <label htmlFor="g-f-A"> Female </label>
              </div>
              <i className="fas fa-female g" />
              <br />
              <input
                id="g-f-a"
                className="num-input"
                type="number"
                size="3"
                onChange={() => this.onChange($("#g-f-a").val(), 7)}
              />
              <span className="percent">%</span>
            </div>
            <div className="option">
              <div className="lbl">
                <label htmlFor="g-m-a"> Male </label>
              </div>
              <i className="fas fa-male g" />
              <br />
              <input
                id="g-m-a"
                className="num-input"
                type="number"
                size="3"
                onChange={() => this.onChange($("#g-m-a").val(), 8)}
              />
              <span className="percent">%</span>
            </div>
          </div>
        </div>,
        <div className="input-group">
          <div className="option-group">
            <div className="option">
              <div className="lbl">
                <label htmlFor="g-a"> Asian </label>
              </div>
              <i className="fas fa-user h" />
              <br />
              <input
                id="g-a"
                className="num-input"
                type="number"
                size="3"
                onChange={() => this.onChange($("#g-a").val(), 2)}
              />
              <span className="percent">%</span>
            </div>
            <div className="option">
              <div className="lbl">
                <label htmlFor="g-b"> Black </label>
              </div>
              <i className="fas fa-user h" />
              <br />
              <input
                id="g-b"
                className="num-input"
                type="number"
                size="3"
                onChange={() => this.onChange($("#g-b").val(), 3)}
              />
              <span className="percent">%</span>
            </div>
            <div className="option">
              <div className="lbl">
                <label htmlFor="g-w"> White </label>
              </div>
              <i className="fas fa-user h" />
              <br />
              <input
                id="g-w"
                className="num-input"
                type="number"
                size="3"
                onChange={() => this.onChange($("#g-w").val(), 4)}
              />
              <span className="percent">%</span>
            </div>
            <div className="option">
              <div className="lbl">
                <label htmlFor="g-h"> Hispanic </label>
              </div>
              <i className="fas fa-user h" />
              <br />
              <input
                id="g-h"
                className="num-input"
                type="number"
                size="3"
                onChange={() => this.onChange($("#g-h").val(), 5)}
              />
              <span className="percent">%</span>
            </div>
            <div className="option">
              <div className="lbl">
                <label htmlFor="g-o"> Other </label>
              </div>
              <i className="fas fa-user h" />
              <br />
              <input
                id="g-o"
                className="num-input"
                type="number"
                size="3"
                onChange={() => this.onChange($("#g-o").val(), 6)}
              />
              <span className="percent">%</span>
            </div>
          </div>
        </div>,
        <div className="input-group">
          <div className="option-group">
            <div className="option">
              <div className="lbl">
                <label htmlFor="g-a-a"> Asian </label>
              </div>
              <i className="fas fa-user h" />
              <br />
              <input
                id="g-a-a"
                className="num-input"
                type="number"
                size="3"
                onChange={() => this.onChange($("#g-a-a").val(), 9)}
              />
              <span className="percent">%</span>
            </div>
            <div className="option">
              <div className="lbl">
                <label htmlFor="g-b-a"> Black </label>
              </div>
              <i className="fas fa-user h" />
              <br />
              <input
                id="g-b-a"
                className="num-input"
                type="number"
                size="3"
                onChange={() => this.onChange($("#g-b-a").val(), 10)}
              />
              <span className="percent">%</span>
            </div>
            <div className="option">
              <div className="lbl">
                <label htmlFor="g-w-a"> White </label>
              </div>
              <i className="fas fa-user h" />
              <br />
              <input
                id="g-w-a"
                className="num-input"
                type="number"
                size="3"
                onChange={() => this.onChange($("#g-w-a").val(), 11)}
              />
              <span className="percent">%</span>
            </div>
            <div className="option">
              <div className="lbl">
                <label htmlFor="g-h-a"> Hispanic </label>
              </div>
              <i className="fas fa-user h" />
              <br />
              <input
                id="g-h-a"
                className="num-input"
                type="number"
                size="3"
                onChange={() => this.onChange($("#g-h-a").val(), 12)}
              />
              <span className="percent">%</span>
            </div>
            <div className="option">
              <div className="lbl">
                <label htmlFor="g-o-a"> Other </label>
              </div>
              <i className="fas fa-user h" />
              <br />
              <input
                id="g-o-a"
                className="num-input"
                type="number"
                size="3"
                onChange={() => this.onChange($("#g-o-a").val(), 13)}
              />
              <span className="percent">%</span>
            </div>
          </div>
        </div>
      ],
      button: ["Take The Quiz", "Next", "Next", "Next", "Submit", "Submit"]
    };
  }

  componentDidUpdate = () => {
    console.log(this.props.gf);
  };
  render() {
    return (
      <div className={"Menu " + this.props.place}>
        <div className="head">{this.state.companies[this.props.pid]}</div>
        <div className="body">
          <br />
          {this.state.body[this.props.pid]}
          <br />
          {this.props.pid !== 0 ? (
            <button
              onClick={() => this.onClick(this.props.pid - 1)}
              id="back-quiz"
            >
              Back
            </button>
          ) : null}
          <button
            id="next"
            ref="next"
            onClick={() => this.onClick(this.props.pid + 1)}
            className={"start-quiz " + this.props.place}
            disabled={
              this.props.pid === 3
                ? this.state.totalP !== 100 ? true : false
                : this.props.pid === 4
                  ? this.state.totalPa !== 100 ? true : false
                  : false
            }
          >
            {this.state.button[this.props.pid]}
          </button>
        </div>
      </div>
    );
  }

  onClick = e => {
    this.props.onClick(e);
    setTimeout(() => {
      $("#g-f").val(this.props.gf);
      $("#g-m").val(this.props.gm);
      $("#g-a").val(this.props.ga);
      $("#g-b").val(this.props.gb);
      $("#g-w").val(this.props.gw);
      $("#g-h").val(this.props.gh);
      $("#g-o").val(this.props.go);
      $("#g-f-a").val(this.props.gfa);
      $("#g-m-a").val(this.props.gma);
      $("#g-a-a").val(this.props.gaa);
      $("#g-b-a").val(this.props.gba);
      $("#g-w-a").val(this.props.gwa);
      $("#g-h-a").val(this.props.gha);
      $("#g-o-a").val(this.props.goa);
      if (this.props.pid === 0) {
        $("#next").text("Take The Quiz");
      } else if (
        this.props.pid !== 0 &&
        this.props.pid !== 3 &&
        this.props.pid !== 4 &&
        this.props.pid !== 5
      ) {
        $("#next").text("Next");
      } else if (this.props.pid === 3) {
        let total =
          parseInt($("#g-a").val(), 10) +
          parseInt($("#g-b").val(), 10) +
          parseInt($("#g-w").val(), 10) +
          parseInt($("#g-h").val(), 10) +
          parseInt($("#g-o").val(), 10);

        if (total !== 100) {
          $("#next").text("Total: " + total + "%");
        } else {
          $("#next").text("Next");
        }
      } else if (this.props.pid === 4) {
        let total =
          parseInt($("#g-a-a").val(), 10) +
          parseInt($("#g-b-a").val(), 10) +
          parseInt($("#g-w-a").val(), 10) +
          parseInt($("#g-h-a").val(), 10) +
          parseInt($("#g-o-a").val(), 10);

        if (total !== 100) {
          $("#next").text("Total: " + total + "%");
        } else {
          $("#next").text("Submit");
        }
      }
    }, 5);
  };

  onChange = (e, g) => {
    if (this.props.pid === 3) {
      let total =
        parseInt($("#g-a").val(), 10) +
        parseInt($("#g-b").val(), 10) +
        parseInt($("#g-w").val(), 10) +
        parseInt($("#g-h").val(), 10) +
        parseInt($("#g-o").val(), 10);

      this.setState({
        totalP: total
      });
      if (total !== 100) {
        $("#next").text("Total: " + total + "%");
      } else {
        $("#next").text("Next");
      }
    } else if (this.props.pid === 4) {
      let total =
        parseInt($("#g-a-a").val(), 10) +
        parseInt($("#g-b-a").val(), 10) +
        parseInt($("#g-w-a").val(), 10) +
        parseInt($("#g-h-a").val(), 10) +
        parseInt($("#g-o-a").val(), 10);

      this.setState({
        totalPa: total
      });
      if (total !== 100) {
        $("#next").text("Total: " + total + "%");
      } else {
        $("#next").text("Submit");
      }
    }
    if (e > 100 || e < 0) {
      this.setState({ valid: false });
    } else {
      this.setState({ valid: true });
    }
    this.props.onChange(e, g);
    if (g === 0) {
      $("#g-m").val(100 - e);
    } else if (g === 1) {
      $("#g-f").val(100 - e);
    } else if (g === 7) {
      $("#g-m-a").val(100 - e);
    } else if (g === 8) {
      $("#g-f-a").val(100 - e);
    }
  };
}
export default Menu;
