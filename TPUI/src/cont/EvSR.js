import React from "react";
import { Component } from "react";
import { Radio, Descriptions, Tabs } from "antd";
import { EvCard3 } from "../comp/CCard";
import { Statfilter, SRSelect } from "../comp/CFilter";
import { EvCard2 } from "../comp/CCard";
import { MRPerformance, MREye, MRFinger } from "../comp/CTable";
import Heatmap from "../img/heatmap.png";

import "../css/Ev/EvSR.less";

class SentenceD extends Component {
  render() {
    return (
      <div className="sentenced">
        <Descriptions title="Sentence Info" column={1}>
          <Descriptions.Item label="Sentence ID">S12</Descriptions.Item>
          <Descriptions.Item label="Content">
            This is a demo for the model
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

class EvSR extends Component {
  state = {
    value: 1,
  };

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      // display: 'block',
      height: "80px",
      lineHeight: "30px",
    };

    const { value } = this.state;

    const { TabPane } = Tabs;

    return (
      <div className="evsr" value={value}>
        <EvCard3 title="Filter">
          <Radio.Group
            className="radioG1"
            onChange={this.onChange}
            value={value}
          >
            <div className="corpus">
              <Radio style={radioStyle} value={1}>
                Statistic feature
              </Radio>
              <Radio style={radioStyle} value={2}>
                Sentence
              </Radio>
            </div>
          </Radio.Group>
          {value === 1 ? <Statfilter /> : <SRSelect />}
        </EvCard3>
        <SentenceD />
        <Tabs defaultActiveKey="1" size="large" style={{ margin: "0 40px" }}>
          <TabPane tab="Statistic Result" key="1">
            <EvCard2 title="Performance (average per sentence)">
              <MRPerformance />
            </EvCard2>
            <EvCard2 title="Eye Gaze (average per sentence)">
              <MREye />
            </EvCard2>
            <EvCard2 title="Finger Movement (average per sentence)">
              <MRFinger />
            </EvCard2>
          </TabPane>
          <TabPane tab="Heatmap" key="2">
            <div style={{ textAlign: "center" }}>
              <img src={Heatmap} style={{ margin: "0 auto" }} />
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export { EvSR };
