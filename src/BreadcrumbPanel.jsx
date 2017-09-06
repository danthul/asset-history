// @flow

import React, { Component } from 'react';

type Props = {
  event: BreadcrumbEvent
};

class BreadCrumbPanel extends Component<Props> {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <li className="`status_{this.props.event.Event_Type} focus`">
        <span className="bc_lineitem" data-sequence="154">
          <span className="tds">
            <span className="time">
              {this.props.event.Event_Timestamp_Local}
            </span>
            <span className="bcdir stop">
              {this.props.event.Last_Heading_Cardinal}
            </span>
            <span className="speedur">{this.props.event.Last_Speed} mph</span>
          </span>
          <span className="addr">{this.props.event.Nearby_Address}</span>
          <span className="tds clearfix">
            <span className="event">{this.props.event.Event_Type}</span>
            <span className="camera" />
          </span>
        </span>
        <div className="bc_warns" />
      </li>
    );
  }
}

export default BreadCrumbPanel;
