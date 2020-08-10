import React from "react";
import { Component } from "react";
import { Checkbox } from "antd";
import { Input } from "antd";
import { Button } from "antd";
import "./css/Ev/EvEvaluate.less";

import { EStep2, EStepV } from "./comp/CSteps";
import { CProgress } from "./comp/CProgress";
import { EvCard1 } from "./comp/CCard";

class EvEvaluate extends Component {
  state = {
    checked: false,
    modelProc: " ",
  };

  onChange = (e) => {
    console.log("checked");
    this.setState({
      checked: !this.state.checked,
    });
  };

  handleClickEvR = () => {
    this.props.history.push("/evaluate/result");
  };

  render() {
    const { checked } = this.state;

    const checkStyle = {
      marginTop: 20,
    };

    const bgStyle = {
      backgroundColor: "#fff",
      marginTop: 40,
      padding: "30px 30px",
    };

    return (
      <div>
        <EStep2 />
        <div style={bgStyle}>
          <CProgress percent={60} />
          <h4
            style={{
              marginBottom: "20px",
              marginTop: "20px",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Estimated time remaining: 48min
          </h4>
          <div className="evprocess">
            <EStepV />
            <EvCard1 content={<p>{this.state.modelProc}</p>} />
          </div>
          <Checkbox
            onChange={this.onChange}
            checked={checked}
            style={{ fontSize: 18 }}
          >
            Notifying me when the results are ready
            {checked === true ? (
              <Input
                placeholder="Input your email address"
                size="large"
                style={checkStyle}
              />
            ) : (
              <Input
                placeholder="Input your email address"
                size="large"
                style={checkStyle}
                disabled
              />
            )}
          </Checkbox>
        </div>
        <div style={bgStyle}>
          <div className="check-result-btn">
            <Button
              className="button"
              type="primary"
              size="large"
              disabled
              onClick={this.handleClickEvR}
            >
              Check Results
            </Button>

            <Button className="button" size="large">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default EvEvaluate;
