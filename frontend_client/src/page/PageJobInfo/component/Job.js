import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Job extends Component {
  render() {
    const {job} = this.props

    return (
      <div className="col-lg-12 block" >
        <div className="d-block d-md-flex listing" style={{height:"163px", padding:"5px", border:"1px solid #e1e1e1"}}>
          <Link to="#" className="img d-block img-max" style={{ backgroundImage: `url("${job.recruiter.logo}")`}}></Link>
          <div className="lh-content" >
            <h6 style={{fontWeight:"bold"}}>{job.title}</h6>
            <a href="/" className="bookmark"><span className="icon-heart"></span></a>
            <h3>Nhà tuyển dụng:<Link to="#">{job.recruiter.companyName}</Link></h3>
            <address className="mb-0">Địa chỉ: {job.recruiter.address} </address>
            <span className="review mb-0">Hạn nộp hồ sơ: {job.expired}</span>
            <div className=" submit-bt">
              <Link to="#" className="btn btn-primary rounded py-2 px-4 text-white">NỘP ĐƠN</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Job;
