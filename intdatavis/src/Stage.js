import React, { Component } from "react";
import "./Stage.css";
import * as d3 from "d3";
import $ from "jquery";

class Stage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pid: 0,
      data: [20, 23, 18, 19, 29],
      data2: [80, 77, 82, 81, 71],
      data7: [53, 52, 46, 45, 36],
      data6: [39, 31, 48, 49, 57],
      data5: [1, 7, 3, 1, 2],
      data4: [3, 8, 3, 3, 4],
      data3: [4, 3, 3, 2, 1]
    };
  }

  render() {
    return (
      <div id="stage" className={"Stage " + this.props.place}>
        <div className={"wrapper " + this.props.place}>
          <div id="dimg1" className="dimg" />
          <div id="dimg2" className="dimg" />
          <div id="dimg3" className="dimg" />
          <div id="landing">
            <div id="heading">exploring diversity</div>
            <div id="subheading">in Silicon Valley</div>
            <div id="ctrl1" onClick={() => this.scroll(1)}>
              <a>Take the Quiz</a>
              <i className="fas fa-arrow-right" />
            </div>
            <div id="ctrl2" onClick={() => this.scroll(0)}>
              <a> View the Stats</a>
              <i className="fas fa-arrow-right" />
            </div>
          </div>
          <div id="sec2d" />
          <div id="sec2">
            <div className="section" id="data-header">
              <h3>The Stats</h3>
              <p>
                Below are graphs which contain an aggregation of data from the
                2017-2018 diversity reports from five major Silicon Valley tech
                companies:{" "}
                <a href="https://diversity.google/commitments/">Google</a>,{" "}
                <a href="https://www.apple.com/diversity/">Apple</a>,{" "}
                <a href="https://www.uber.com/about/diversity/">Uber</a>,{" "}
                <a href="https://fbnewsroomus.files.wordpress.com/2017/08/fb_diversity_2017_final.pdf">
                  Facebook
                </a>{" "}
                and{" "}
                <a href="https://newsroom.pinterest.com/en/post/building-a-pinterest-for-everyone">
                  Pinterest
                </a>. If you completed the quiz, your answers are represented by
                the dashed lines.
              </p>
            </div>
            <div className="chartTitle" id="chartTitle1">
              Gender Diversity
              <p />
              <span
                id="toggle1"
                className="toggle"
                onClick={i => this.changeGraph(0)}
              >
                <span id="technical" className="ul">
                  Technical
                </span>
                <span id="overall">Overall</span>
              </span>
            </div>
            <div className="legend" id="legend1">
              <div className="legendItem">
                <div className="legendColor" id="legendMale" />
                <div className="legendId">Male</div>
              </div>
              <div className="legendItem">
                <div className="legendColor" id="legendFemale" />
                <div className="legendId">Female</div>
              </div>
            </div>
            <div className="chart1">
              <div className="answer hide" id="m" />
              <div className="answer hide" id="f" />
              <svg className="chart" />
              <div className="chartX">
                <div className="chartXslot" id="x1">
                  Google
                </div>
                <div className="chartXslot" id="x2">
                  Apple
                </div>
                <div className="chartXslot" id="x3">
                  Uber
                </div>
                <div className="chartXslot" id="x4">
                  Facebook
                </div>
                <div className="chartXslot" id="x5">
                  Pinterest
                </div>
              </div>
              <div className="chartY">
                <div className="chartYslot" id="y9">
                  90%
                </div>
                <div className="chartYslot" id="y8">
                  80%
                </div>
                <div className="chartYslot" id="y7">
                  70%
                </div>
                <div className="chartYslot" id="y6">
                  60%
                </div>
                <div className="chartYslot" id="y5">
                  50%
                </div>
                <div className="chartYslot" id="y4">
                  40%
                </div>
                <div className="chartYslot" id="y3">
                  30%
                </div>
                <div className="chartYslot" id="y2">
                  20%
                </div>
                <div className="chartYslot" id="y1">
                  10%
                </div>
                <div className="chartYslot" id="y0">
                  0%
                </div>
                <div className="chartYslot" id="ycorner" />
              </div>
              <div className="chartLine">
                <div className="chartLineSlot" id="l9" />
                <div className="chartLineSlot" id="l8" />
                <div className="chartLineSlot" id="l7" />
                <div className="chartLineSlot" id="l6" />
                <div className="chartLineSlot" id="l5" />
                <div className="chartLineSlot" id="l4" />
                <div className="chartLineSlot" id="l3" />
                <div className="chartLineSlot" id="l2" />
                <div className="chartLineSlot" id="l1" />
                <div className="chartLineSlot" id="l0" />
              </div>
            </div>

            <div className="chartTitle" id="chartTitle2">
              Racial & Ethnic Diversity
              <p />
              <span
                id="toggle2"
                className="toggle"
                onClick={i => this.changeGraph(1)}
              >
                <span id="technical2" className="ul">
                  Technical
                </span>
                <span id="overall2">Overall</span>
              </span>
            </div>
            <div className="legend" id="legend2">
              <div className="legendItem">
                <div className="legendColor" id="legendWhite" />
                <div className="legendId">White</div>
              </div>
              <div className="legendItem">
                <div className="legendColor" id="legendAsian" />
                <div className="legendId">Asian</div>
              </div>
              <div className="legendItem">
                <div className="legendColor" id="legendBlack" />
                <div className="legendId">Black</div>
              </div>
              <div className="legendItem">
                <div className="legendColor" id="legendHispanic" />
                <div className="legendId">Hispanic</div>
              </div>
              <div className="legendItem">
                <div className="legendColor" id="legendOther" />
                <div className="legendId">Other</div>
              </div>
            </div>
            <div className="chart3">
              <div className="answer hide" id="w" />
              <div className="answer hide" id="a" />
              <div className="answer hide" id="b" />
              <div className="answer hide" id="h" />
              <div className="answer hide" id="o" />
              <svg className="chart2" />
              <div className="chartX">
                <div className="chartXslot" id="x1">
                  Google
                </div>
                <div className="chartXslot" id="x2">
                  Apple
                </div>
                <div className="chartXslot" id="x3">
                  Uber
                </div>
                <div className="chartXslot" id="x4">
                  Facebook
                </div>
                <div className="chartXslot" id="x5">
                  Pinterest
                </div>
              </div>
              <div className="chartY2">
                <div className="chartY2slot" id="y9">
                  90%
                </div>
                <div className="chartY2slot" id="y8">
                  80%
                </div>
                <div className="chartY2slot" id="y7">
                  70%
                </div>
                <div className="chartY2slot" id="y6">
                  60%
                </div>
                <div className="chartY2slot" id="y5">
                  50%
                </div>
                <div className="chartY2slot" id="y4">
                  40%
                </div>
                <div className="chartY2slot" id="y3">
                  30%
                </div>
                <div className="chartY2slot" id="y2">
                  20%
                </div>
                <div className="chartY2slot" id="y1">
                  10%
                </div>
                <div className="chartY2slot" id="y0">
                  0%
                </div>
                <div className="chartY2slot" id="ycorner2" />
              </div>
              <div className="chartLine">
                <div className="chartLineSlot" id="l9" />
                <div className="chartLineSlot" id="l8" />
                <div className="chartLineSlot" id="l7" />
                <div className="chartLineSlot" id="l6" />
                <div className="chartLineSlot" id="l5" />
                <div className="chartLineSlot" id="l4" />
                <div className="chartLineSlot" id="l3" />
                <div className="chartLineSlot" id="l2" />
                <div className="chartLineSlot" id="l1" />
                <div className="chartLineSlot" id="l0" />
              </div>
            </div>
            <div className="spacer" />
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate = () => {
    if (this.props.gw !== 0) {
      if (this.state.data[0] === 20) {
        $("#m")
          .removeClass("hide")
          .css("margin-top", (100 - this.props.gm) * 3);
        $("#f")
          .removeClass("hide")
          .css("margin-top", (100 - this.props.gf) * 3);
      } else {
        $("#m")
          .removeClass("hide")
          .css("margin-top", (100 - this.props.gma) * 3);
        $("#f")
          .removeClass("hide")
          .css("margin-top", (100 - this.props.gfa) * 3);
      }
      if (this.state.data7[0] === 53) {
        $("#w")
          .removeClass("hide")
          .css("margin-top", (100 - this.props.gw) * 3);
        $("#a")
          .removeClass("hide")
          .css("margin-top", (100 - this.props.ga) * 3);
        $("#b")
          .removeClass("hide")
          .css("margin-top", (100 - this.props.gb) * 3);
        $("#h")
          .removeClass("hide")
          .css("margin-top", (100 - this.props.gh) * 3);
        $("#o")
          .removeClass("hide")
          .css("margin-top", (100 - this.props.go) * 3);
      } else {
        $("#w")
          .removeClass("hide")
          .css("margin-top", (100 - this.props.gwa) * 3);
        $("#a")
          .removeClass("hide")
          .css("margin-top", (100 - this.props.gaa) * 3);
        $("#b")
          .removeClass("hide")
          .css("margin-top", (100 - this.props.gba) * 3);
        $("#h")
          .removeClass("hide")
          .css("margin-top", (100 - this.props.gha) * 3);
        $("#o")
          .removeClass("hide")
          .css("margin-top", (100 - this.props.goa) * 3);
      }
    }
  };
  scroll = i => {
    var element = document.getElementById("sec2d");
    if (i === 0) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"
      });
    } else {
      document.getElementById("stage").scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
      setTimeout(() => {
        this.props.onClick(1);
      }, 50);
    }
  };

  changeGraph = i => {
    console.log("ooof");
    if (i === 0) {
      if (this.state.data[0] !== 20) {
        $("#technical").addClass("ul");
        $("#overall").removeClass("ul");
        this.setState({
          data: [20, 23, 18, 19, 29],
          data2: [80, 77, 82, 81, 71]
        });
        if (this.props.gw !== 0) {
          $("#m")
            .removeClass("hide")
            .css("margin-top", (100 - this.props.gm) * 3);
          $("#f")
            .removeClass("hide")
            .css("margin-top", (100 - this.props.gf) * 3);
        }
      } else {
        $("#technical").removeClass("ul");
        $("#overall").addClass("ul");
        if (this.props.gw !== 0) {
          $("#m")
            .removeClass("hide")
            .css("margin-top", (100 - this.props.gma) * 3);
          $("#f")
            .removeClass("hide")
            .css("margin-top", (100 - this.props.gfa) * 3);
        }
        this.setState({
          data: [31, 32, 38, 35, 45],
          data2: [69, 68, 62, 65, 55]
        });
      }
      let height = 300;
      let GRAPH_SCALE = 3;
      setTimeout(() => {
        d3
          .selectAll(".g")
          .select("rect")
          .transition()
          .duration(500)
          .attr("y", (d, i) => height - GRAPH_SCALE * this.state.data[i])
          .attr("height", (d, i) => GRAPH_SCALE * this.state.data[i]);
        d3
          .selectAll(".e")
          .select("rect")
          .transition()
          .duration(500)
          .attr("y", (d, i) => height - GRAPH_SCALE * this.state.data2[i])
          .attr("height", (d, i) => GRAPH_SCALE * this.state.data2[i]);
      }, 1);
    } else {
      if (this.state.data7[0] !== 53) {
        $("#technical2").addClass("ul");
        $("#overall2").removeClass("ul");
        this.setState({
          data7: [53, 52, 46, 45, 36],
          data6: [39, 31, 48, 49, 57],
          data5: [1, 7, 3, 1, 2],
          data4: [3, 8, 3, 3, 4],
          data3: [4, 3, 3, 2, 1]
        });
      } else {
        $("#technical2").removeClass("ul");
        $("#overall2").addClass("ul");
        this.setState({
          data7: [56, 54, 49, 49, 48],
          data6: [35, 21, 32, 40, 41],
          data5: [2, 9, 8, 3, 3],
          data4: [4, 13, 6, 5, 6],
          data3: [5, 4, 5, 4, 3]
        });
      }
      let height = 300;
      let GRAPH_SCALE = 3;
      setTimeout(() => {
        d3
          .selectAll(".g1")
          .select("rect")
          .transition()
          .duration(500)
          .attr("y", (d, i) => height - GRAPH_SCALE * this.state.data3[i])
          .attr("height", (d, i) => GRAPH_SCALE * this.state.data3[i]);
        d3
          .selectAll(".g2")
          .select("rect")
          .transition()
          .duration(500)
          .attr("y", (d, i) => height - GRAPH_SCALE * this.state.data4[i])
          .attr("height", (d, i) => GRAPH_SCALE * this.state.data4[i]);
        d3
          .selectAll(".g3")
          .select("rect")
          .transition()
          .duration(500)
          .attr("y", (d, i) => height - GRAPH_SCALE * this.state.data5[i])
          .attr("height", (d, i) => GRAPH_SCALE * this.state.data5[i]);
        d3
          .selectAll(".g4")
          .select("rect")
          .transition()
          .duration(500)
          .attr("y", (d, i) => height - GRAPH_SCALE * this.state.data6[i])
          .attr("height", (d, i) => GRAPH_SCALE * this.state.data6[i]);
        d3
          .selectAll(".g5")
          .select("rect")
          .transition()
          .duration(500)
          .attr("y", (d, i) => height - GRAPH_SCALE * this.state.data7[i])
          .attr("height", (d, i) => GRAPH_SCALE * this.state.data7[i]);
      }, 1);
    }
  };

  componentDidMount = () => {
    let barWidth = 70;
    let height = 300;
    let width = 700;

    const GRAPH_SCALE = 3;

    let data = [20, 23, 18, 19, 29];
    let data2 = [80, 77, 82, 81, 71];

    let bar = d3
      .select(".chart")
      .selectAll("div")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "g")
      .attr(
        "transform",
        (d, i) => "translate(" + (i * (barWidth + 70) + 70) + ",0)"
      )
      .append("rect")
      .attr("y", (d, i) => height - GRAPH_SCALE * this.state.data[i])
      .attr("height", (d, i) => GRAPH_SCALE * this.state.data[i])
      .attr("width", barWidth - 1);

    let bar2 = d3
      .select(".chart")
      .selectAll("div")
      .data(data2)
      .enter()
      .append("g")
      .attr("class", "e")
      .attr(
        "transform",
        (d, i) => "translate(" + (i * (barWidth + 70) + 0) + ",0)"
      )
      .append("rect")
      .attr("y", (d, i) => height - GRAPH_SCALE * this.state.data2[i])
      .attr("height", (d, i) => GRAPH_SCALE * this.state.data2[i])
      .attr("width", barWidth - 1);

    //CHART 2
    let barWidth2 = 28;
    var y = d3.scaleLinear().range([height - 7, 7]);
    var x = d3.scaleLinear().range([0, width]);

    let data7 = [53, 52, 46, 45, 36];
    let data6 = [39, 31, 48, 49, 57];
    let data5 = [1, 7, 3, 1, 2];
    let data4 = [3, 8, 3, 3, 4];
    let data3 = [4, 3, 3, 2, 1];

    let bar21 = d3
      .select(".chart2")
      .selectAll("div")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "g1")
      .attr(
        "transform",
        (d, i) => "translate(" + (i * (barWidth2 + 112) + 112) + ",0)"
      )
      .append("rect")
      .attr("y", (d, i) => height - GRAPH_SCALE * data3[i])
      .attr("height", (d, i) => GRAPH_SCALE * data3[i])
      .attr("width", barWidth2 - 1);

    let bar22 = d3
      .select(".chart2")
      .selectAll("div")
      .data(data2)
      .enter()
      .append("g")
      .attr("class", "g2")
      .attr(
        "transform",
        (d, i) => "translate(" + (i * (barWidth2 + 112) + 84) + ",0)"
      )
      .append("rect")
      .attr("y", (d, i) => height - GRAPH_SCALE * data4[i])
      .attr("height", (d, i) => GRAPH_SCALE * data4[i])
      .attr("width", barWidth2 - 1);

    let bar23 = d3
      .select(".chart2")
      .selectAll("div")
      .data(data2)
      .enter()
      .append("g")
      .attr("class", "g3")
      .attr(
        "transform",
        (d, i) => "translate(" + (i * (barWidth2 + 112) + 56) + ",0)"
      )
      .append("rect")
      .attr("y", (d, i) => height - GRAPH_SCALE * data5[i])
      .attr("height", (d, i) => GRAPH_SCALE * data5[i])
      .attr("width", barWidth2 - 1);

    let bar24 = d3
      .select(".chart2")
      .selectAll("div")
      .data(data2)
      .enter()
      .append("g")
      .attr("class", "g4")
      .attr(
        "transform",
        (d, i) => "translate(" + (i * (barWidth2 + 112) + 28) + ",0)"
      )
      .append("rect")
      .attr("y", (d, i) => height - GRAPH_SCALE * data6[i])
      .attr("height", (d, i) => GRAPH_SCALE * data6[i])
      .attr("width", barWidth2 - 1);

    let bar25 = d3
      .select(".chart2")
      .selectAll("div")
      .data(data2)
      .enter()
      .append("g")
      .attr("class", "g5")
      .attr(
        "transform",
        (d, i) => "translate(" + (i * (barWidth2 + 112) + 0) + ",0)"
      )
      .append("rect")
      .attr("y", (d, i) => height - GRAPH_SCALE * data7[i])
      .attr("height", (d, i) => GRAPH_SCALE * data7[i])
      .attr("width", barWidth2 - 1);
    /*
    d3
      .select(".chart")
      .selectAll("div")
      .data(this.state.data)
      .enter()
      .append("div")
      .attr("class", "bar")
      .attr("id", (d, i) => d + i)
      //.on("click", (d, i) => this.onClick(d + i))
      .style("width", d => d + "px")
      .text(d => d);
      */
  };
}

export default Stage;

/*

<div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

<div>Icons made by <a href="https://www.flaticon.com/authors/recep-kutuk" title="Recep Kutuk">Recep Kutuk</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

<div>Icons made by <a href="https://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

<div>Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

*/
