// @flow

import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import slice from 'lodash/slice';
import BreadcrumbPanel from './BreadcrumbPanel';

type Props = {
  events: Array<BreadcrumbEvent>,
  perPage: number
};

type State = {
  paginatedData: [],
  offset: number,
  pageCount: number
};

class BreadcrumbList extends Component<Props, State> {
  state = {
    paginatedData: [],
    offset: 0,
    pageCount: 0
  };

  componentDidMount() {
    const totalCount = this.props.events.length;
    this.setState({
      pageCount: totalCount / this.props.perPage
    });
  }

  loadPaginatedData() {
    //use offset and selected to get a slice of all events for pagination
    this.setState({
      paginatedData: slice(this.props.events, 10)
    });
  }

  handlePageClick = (data: Object) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    this.setState({ offset: offset }, () => {
      this.loadPaginatedData();
    });
  };

  render() {
    return (
      <div className="bc-container">
        <div className="bc-map">This is where the map goes</div>
        <div className="bc-bottom-controls">
          This is where the bottom controls go
        </div>
        <div className="bc-list-panel">
          <div className="bc-list-panel__toggle">
            <i className="fa fa-ellipsis-v" />
          </div>
          <div className="bc-list-panel__brand">
            <img
              src="./images/branding_images/logo/temeda_logo_notag.png"
              alt="Logo"
            />
            History Trail
          </div>
          <div className="bc-list-panel__header">
            <select
              id="bca_assetSelection"
              className="bca_headertext form-control bca_form-control"
            >
              <option value="">-- Select Asset --</option>
              <option value="1865">Bear-0002 IgnOnUptime</option>
              <option value="427">Bear-0005 EngineBus</option>
              <option value="438">Bear-0007</option>
              <option value="1807">Bear-0008</option>
              <option value="440">Bear-0009</option>
              <option value="2162">Bear-0013</option>
              <option value="3388">Bear-0016</option>
              <option value="442">Bear-0029</option>
              <option value="1810">Bear-0031</option>
              <option value="441">Bear-0049</option>
              <option value="430">Bear-0054</option>
              <option value="431">Bear-0057</option>
              <option value="432">Bear-0082</option>
              <option value="433">Bear-0085 Engine BUS</option>
              <option value="1750">Bear-0092</option>
              <option value="3493">Bear-0099</option>
              <option value="1813">Dan's Altima</option>
              <option value="3396">Dan's MC4-LTE</option>
              <option value="3395">Dave's MC4-LTE</option>
              <option value="3499">Dave's Phone</option>
              <option value="1798">Dave's Sequoia</option>
              <option value="3511">Drake's Phone</option>
              <option value="3419">Fourth MC-4LTE Test Device</option>
              <option value="3384">Julie's Toyota Highlander</option>
              <option value="3397">Matt's MC4-LTE</option>
              <option value="3510">new asset with no latlong23</option>
              <option value="3492">Sir Charles's Party Truck</option>
              <option value="2591">SmartWitness Cam (Dave)</option>
              <option value="2592">SmartWitness Cam (SW Office)</option>
              <option value="2285">Thai Guy</option>
              <option value="3500">Thai Guy's Phone</option>
              <option value="3512">thaiguy android</option>
            </select>
            <span id="bca_headertext" className="bca_headertext">
              Julie's Toyota Highlander
            </span>
            <span id="bca_headeraddress" className="bca_headeraddress">
              723-905 Carlisle Rd, Batavia, IL
            </span>
            <span id="bca_headerdistance" className="bca_headertext" />
          </div>
          <div className="bc-list-panel__list">
            <ol id="bc_list" className="styled-ol">
              {this.props.events.map(event => (
                <BreadcrumbPanel key={event.idRaw_Data} event={event} />
              ))}

              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={<a href="">...</a>}
                breakClassName={'break-me'}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
              />
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default BreadcrumbList;
