import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Job extends Component {
  render() {
    const {job} = this.props

    return (
      <div className="col-lg-12 block" >
        <div className="d-block d-md-flex listing" style={{ height: "150px" }}>
          <a href="#" className="img d-block" style={{ backgroundImage: `url("${job.recruiter.logo}")` }} />
          <div className="lh-content">
            <h6>{job.title}</h6>
            <a href="/" className="bookmark"><span class="icon-heart"></span></a>
            <h3>Nhà tuyển dụng:<Link to="#">{job.recruiter.companyName}</Link></h3>
            <address className="mb-0">Địa chỉ: {job.recruiter.address} </address>
            <span className="review mb-0">Hạn nộp hồ sơ: {job.expired}</span>
            <div className=" submit-bt">
              <a href="#" className="btn btn-primary rounded py-2 px-4 text-white">NỘP ĐƠN</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Job;
