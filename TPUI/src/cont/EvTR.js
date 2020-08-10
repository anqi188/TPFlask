import React from "react";
import { Component } from "react";
import { Radio, Descriptions, Tabs } from "antd";
import { EvCard3 } from "../comp/CCard";
import { StatfilterT, TRSelect } from "../comp/CFilter";
import { EvCard2 } from "../comp/CCard";
import { MRPerformance, MREye, MRFinger } from "../comp/CTable";
import Video from "../img/Video.png";

import "../css/Ev/EvTR.less";

class TrialD extends Component {
  render() {
    return (
      <div className="triald">
        <Descriptions title="Trial Info" column={1}>
          <Descriptions.Item label="Trial ID">S8 T2</Descriptions.Item>
          <Descriptions.Item label="Content">
            This is another demo
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

class EvTR extends Component {
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
      <div className="evtr" value={value}>
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
                Trial
              </Radio>
            </div>
          </Radio.Group>
          {value === 1 ? <StatfilterT /> : <TRSelect />}
        </EvCard3>
        <TrialD />
        <Tabs defaultActiveKey="1" size="large" style={{ margin: "0 40px" }}>
          <TabPane tab="Statistic Result" key="1">
            <EvCard2 title="Performance">
              <MRPerformance />
            </EvCard2>
            <EvCard2 title="Eye Gaze">
              <MREye />
            </EvCard2>
            <EvCard2 title="Finger Movement">
              <MRFinger />
            </EvCard2>
          </TabPane>
          <TabPane tab="Video" key="2">
            <div style={{ textAlign: "center" }}>
              <img src={Video} style={{ margin: "0 auto" }} />
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export { EvTR };
