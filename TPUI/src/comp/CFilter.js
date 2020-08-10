import React from "react";
import { Component } from "react";
import { Select, Divider } from "antd";
import { Slider, InputNumber, Button } from "antd";
import { PlusOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";

import "../css/comp/CFilter.less";

const { Option } = Select;

// Sentence level
class SRFilter extends Component {
  state = {
    inputValue: [0, 100],
  };

  onChange = (value) => {
    console.log(value);
    this.setState({
      inputValue: value,
    });
  };

  onChange1 = (value) => {
    console.log(tmp);
    var tmp = this.state.inputValue;
    tmp[0] = value;

    this.setState({
      inputValue: tmp,
    });
  };

  onChange2 = (value) => {
    console.log(tmp);
    var tmp = this.state.inputValue;
    tmp[1] = value;

    this.setState({
      inputValue: tmp,
    });
  };

  render() {
    const marks = {
      26: "",
      37: "",
      100: "",
    };

    const { inputValue } = this.state;

    return (
      <div className="myfilter">
        <Select
          showSearch
          style={{ width: 240 }}
          placeholder="Select a feature"
          defaultValue="wpm"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          size="large"
        >
          <Option value="iki">Inter-key interval</Option>
          <Option value="wpm">Words per minute</Option>
          <Option value="bs">Number of backspaces</Option>
          <Option value="uer">Uncorrected error rate</Option>
          <Option value="cer">Corrected error rate</Option>
          <Option value="fx">Number of fixations</Option>
          <Option value="fd">Fixation duration</Option>
          <Option value="gs">Number of gaze shift</Option>
          <Option value="gk">Time ratio for gaze on keyboard</Option>
          <Option value="ds">Distance to the next key</Option>
        </Select>
        <div>
          <Slider
            className="cslider"
            range
            step={0.001}
            marks={marks}
            defaultValue={[26, 37]}
            onChange={this.onChange}
            value={typeof inputValue === "object" ? inputValue : [0, 100]}
          />
        </div>
        <div className="myinput">
          <InputNumber
            className="cinput"
            range
            style={{ margin: "0 16px" }}
            value={inputValue[0]}
            onChange={this.onChange1}
            size="large"
          />
          <span>-</span>
          <InputNumber
            className="cinput"
            range
            style={{ margin: "0 16px" }}
            value={inputValue[1]}
            onChange={this.onChange2}
            size="large"
          />
        </div>
      </div>
    );
  }
}

class Statfilter extends Component {
  state = {
    value: 3,
  };

  render() {
    const { value } = this.state;

    return (
      <div className="statfilter">
        <SRFilter />
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          size="large"
          style={{ marginTop: 10 }}
        />
        <div className="numf">
          <span className="spant">Number of sentence(s) filtered: </span>
          <InputNumber
            min={1}
            max={10}
            disabled={true}
            // defaultValue={3}
            value={value}
            // size="large"
            style={{ margin: "0px 20px", width: 40 }}
          />
          <span className="spant">= 1 </span>
          {value === 1 ? (
            <CheckOutlined
              style={{ margin: "0px 30px", color: "#0ba331", fontSize: 28 }}
            />
          ) : (
            <CloseOutlined
              style={{ margin: "0px 30px", color: "#f20000", fontSize: 28 }}
            />
          )}
        </div>
      </div>
    );
  }
}

class SRSelect extends Component {
  render() {
    const options = [
      { value: "S1" },
      { value: "S2" },
      { value: "S3" },
      { value: "S4" },
    ];

    return (
      <div className="statfilter">
        <Select
          showSearch
          style={{ width: 240 }}
          placeholder="Select a sentence"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          size="large"
          options={options}
        ></Select>
      </div>
    );
  }
}

// Trial level

class SRSelect1 extends Component {
  render() {
    const options = [
      { value: "S1" },
      { value: "S2" },
      { value: "S3" },
      { value: "S4" },
    ];

    return (
      <div>
        <Select
          showSearch
          style={{ width: 240 }}
          placeholder="Select a sentence"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          size="large"
          options={options}
        ></Select>
      </div>
    );
  }
}

class StatfilterT extends Component {
  state = {
    value: 3,
  };

  render() {
    const { value } = this.state;

    return (
      <div className="statfilter">
        <SRSelect1 />
        <Divider />
        <SRFilter />
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          size="large"
          style={{ marginTop: 10 }}
        />
        <div className="numf">
          <span className="spant">Number of sentence(s) filtered: </span>
          <InputNumber
            min={1}
            max={10}
            disabled={true}
            // defaultValue={3}
            value={value}
            // size="large"
            style={{ margin: "0px 20px", width: 40 }}
          />
          <span className="spant">= 1 </span>
          {value === 1 ? (
            <CheckOutlined
              style={{ margin: "0px 30px", color: "#0ba331", fontSize: 28 }}
            />
          ) : (
            <CloseOutlined
              style={{ margin: "0px 30px", color: "#f20000", fontSize: 28 }}
            />
          )}
        </div>
      </div>
    );
  }
}

class TRSelect extends Component {
  render() {
    const options = [
      { value: "S1" },
      { value: "S2" },
      { value: "S3" },
      { value: "S4" },
    ];

    const options1 = [
      { value: "T1" },
      { value: "T2" },
      { value: "T3" },
      { value: "T4" },
    ];

    return (
      <div className="statfilter">
        <Select
          showSearch
          style={{ width: 240 }}
          placeholder="Select a sentence"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          size="large"
          options={options}
        ></Select>
        <Select
          showSearch
          style={{ width: 240, marginLeft: 200 }}
          placeholder="Select a trial"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          size="large"
          options={options1}
        ></Select>
      </div>
    );
  }
}

class TrmFilter extends Component {
  state = {
    inputValue: 0,
  };

  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div className="trmfilter">
        <div className="trmlabel">
          <span>0</span>
          <strong>
            <i>{this.props.lb1}</i>
          </strong>
        </div>
        <Slider
          max={1}
          defaultValue={0}
          style={{ width: 400 }}
          onChange={this.onChange}
          size="large"
          step={0.001}
          value={typeof inputValue === "number" ? inputValue : 0}
        />
        <div className="trmlabel">
          <span>1</span>
          <strong>
            <i>{this.props.lb2}</i>
          </strong>
        </div>
        <InputNumber
          style={{ margin: "0 24px" }}
          value={inputValue}
          onChange={this.onChange}
          size="large"
        />
      </div>
    );
  }
}

export { Statfilter, SRSelect, StatfilterT, TRSelect, TrmFilter };
