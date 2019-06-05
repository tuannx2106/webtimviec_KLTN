import React, { Component } from 'react';
import JobItem from './JobItem';
import Pagination from "./Pagination";


class ListJob extends Component {
  render() {
    const { jobs } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center">
            <h3 className="font-weight-light text-primary">Công Việc</h3>
          </div>
        </div>
        <div className="mt-5">
          <Pagination
            data={jobs}
          >
            <JobItem />
          </Pagination>
        </div>
      </div>
    );
  }
}

export default ListJob;