import React from "react";
import { Component } from "react";
import { EvCard2 } from "../comp/CCard";
import { MRGeneral, MRPerformance, MREye, MRFinger } from "../comp/CTable";

import "../css/Ev/EvMR.less";

class EvMR extends Component {
  state = {};
  render() {
    return (
      <div>
        <EvCard2 title="General">
          <MRGeneral />
        </EvCard2>
        <EvCard2 title="Performance (average per sentence)">
          <MRPerformance />
        </EvCard2>
        <EvCard2 title="Eye Gaze (average per sentence)">
          <MREye />
        </EvCard2>
        <EvCard2 title="Finger Movement (average per sentence)">
          <MRFinger />
        </EvCard2>
      </div>
    );
  }
}

export { EvMR };
