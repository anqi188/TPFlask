import React from "react";
import { Component } from "react";
import { Table } from "antd";

import "../css/comp/CTable.less";

// BF
const columnsBF = [
  {
    title: " ",
    dataIndex: "tbname",
    width: 500,
  },
  {
    title: "Tremor",
    dataIndex: "tremor",
  },
  {
    title: "Expertise",
    dataIndex: "expertise",
  },
  {
    title: "Dyslexia",
    dataIndex: "dyslexia",
  },
];
const dataBF = [
  {
    key: "1",
    tbname: "Behavioural Feature",
    tremor: 0.3,
    expertise: 0.1,
    dyslexia: 0.0,
  },
];

class EvTable1 extends Component {
  render() {
    return (
      <div>
        {/* <h4>Behavioural Feature</h4> */}
        <Table
          pagination={false}
          columns={columnsBF}
          dataSource={dataBF}
          size="default"
        />
      </div>
    );
  }
}

// VM
const columnsVM = [
  {
    title: " ",
    dataIndex: "tbname",
    width: 500,
  },
  {
    title: "K",
    dataIndex: "k1",
  },
  {
    title: "k",
    dataIndex: "k2",
  },
  {
    title: "exec",
    dataIndex: "exec",
  },
  {
    title: "saccade",
    dataIndex: "saccade",
  },
  {
    title: "prep",
    dataIndex: "prep",
  },
];
const dataVM = [
  {
    key: "1",
    tbname: "Vison Model (EMMA)",
    k1: 0.3,
    k2: 0.1,
    exec: 0.0,
    saccade: 80,
    prep: 80,
  },
];

class EvTable2 extends Component {
  render() {
    return (
      <div>
        {/* <h4>Behavioural Feature</h4> */}
        <Table
          pagination={false}
          columns={columnsVM}
          dataSource={dataVM}
          size="default"
        />
      </div>
    );
  }
}

// FM
// VM
const columnsFM = [
  {
    title: " ",
    dataIndex: "tbname",
    width: 500,
  },
  {
    title: "x0",
    dataIndex: "x0",
  },
  {
    title: "y0",
    dataIndex: "y0",
  },
  {
    title: "alpha",
    dataIndex: "alpha",
  },
  {
    title: "x_min",
    dataIndex: "x_min",
  },
  {
    title: "x_max",
    dataIndex: "x_max",
  },
  {
    title: "k_alpha",
    dataIndex: "k_alpha",
  },
];
const dataFM = [
  {
    key: "1",
    tbname: "Finger Model (WHo)",
    x0: 0.3,
    y0: 0.1,
    alpha: 0.0,
    x_min: 80,
    x_max: 80,
    k_alpha: 0.0,
  },
];

class EvTable3 extends Component {
  render() {
    return (
      <div>
        {/* <h4>Behavioural Feature</h4> */}
        <Table
          pagination={false}
          columns={columnsFM}
          dataSource={dataFM}
          size="default"
        />
      </div>
    );
  }
}

// Main Result - General
const columnsMRG = [
  {
    title: " ",
    dataIndex: "mrg1",
    width: 500,
  },
  {
    title: " ",
    dataIndex: "mrg1num",
  },
];
const dataMRG = [
  {
    key: "1",
    mrg1: "Number of sentences typed:",
    mrg1num: 32,
  },
  {
    key: "2",
    mrg1: "Number of trials completed:",
    mrg1num: 320,
  },
];

class MRGeneral extends Component {
  render() {
    return (
      <div>
        <Table
          className="mrgeneral"
          pagination={false}
          columns={columnsMRG}
          dataSource={dataMRG}
          style={{ margin: "-20px auto" }}
        />
      </div>
    );
  }
}

// Main Result - Performance
const columnsMRP = [
  {
    title: " ",
    dataIndex: "mrp1",
    width: 500,
  },
  {
    title: "Mean",
    dataIndex: "mrpM",
  },
  {
    title: "SD",
    dataIndex: "mrpSD",
  },
];
const dataMRP = [
  {
    key: "1",
    mrp1: "Inter-key interval (IKI, ms):",
    mrpM: 380.94,
    mrpSD: 50.95,
  },
  {
    key: "2",
    mrp1: "Words per minute (WPM):",
    mrpM: 27.19,
    mrpSD: 3.61,
  },
  {
    key: "3",
    mrp1: "Number of backspaces:",
    mrpM: 2.61,
    mrpSD: 1.81,
  },
  {
    key: "4",
    mrp1: "Uncorrected error rate (%):",
    mrpM: 0.56,
    mrpSD: 0.71,
  },
  {
    key: "5",
    mrp1: "Corrected error rate (%):",
    mrpM: 9.38,
    mrpSD: 5.75,
  },
];

class MRPerformance extends Component {
  render() {
    return (
      <div>
        <Table
          pagination={false}
          columns={columnsMRP}
          dataSource={dataMRP}
          style={{ margin: "-20px auto", backgroundColor: "#fffff!important" }}
        />
      </div>
    );
  }
}

// Main Result - Eye Gaze
const columnsMRE = [
  {
    title: " ",
    dataIndex: "mre1",
    width: 500,
  },
  {
    title: "Mean",
    dataIndex: "mreM",
  },
  {
    title: "SD",
    dataIndex: "mreSD",
  },
];
const dataMRE = [
  {
    key: "1",
    mre1: "Number of fixations:",
    mreM: 24.04,
    mreSD: 4.56,
  },
  {
    key: "2",
    mre1: "Fixation duration:",
    mreM: 303.99,
    mreSD: 45.72,
  },
  {
    key: "3",
    mre1: "Number of gaze shift:",
    mreM: 3.91,
    mreSD: 1.5,
  },
  {
    key: "4",
    mre1: "Uncorrected error rate (%):",
    mreM: 0.56,
    mreSD: 0.71,
  },
  {
    key: "5",
    mre1: "Time ratio for gaze on keyboard:",
    mreM: 0.7,
    mreSD: 0.14,
  },
];

class MREye extends Component {
  render() {
    return (
      <div>
        <Table
          pagination={false}
          columns={columnsMRE}
          dataSource={dataMRE}
          style={{ margin: "-20px auto", backgroundColor: "#fffff!important" }}
        />
      </div>
    );
  }
}

// Main Result - Finger Movement
const columnsMRF = [
  {
    title: " ",
    dataIndex: "mrf1",
    width: 500,
  },
  {
    title: "Mean",
    dataIndex: "mrfM",
  },
  {
    title: "SD",
    dataIndex: "mrfSD",
  },
];
const dataMRF = [
  {
    key: "1",
    mrf1: "Number of fixations:",
    mrfM: 24.04,
    mrfSD: 4.56,
  },
];

class MRFinger extends Component {
  render() {
    return (
      <div>
        <Table
          pagination={false}
          columns={columnsMRF}
          dataSource={dataMRF}
          style={{ margin: "-20px auto", backgroundColor: "#fffff!important" }}
        />
      </div>
    );
  }
}

export {
  EvTable1,
  EvTable2,
  EvTable3,
  MRGeneral,
  MRPerformance,
  MREye,
  MRFinger,
};
