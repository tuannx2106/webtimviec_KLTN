import React, { Component } from 'react';
import { Link } from "react-router-dom"

class myJobRecruiter extends Component {
  render() {
    return (
      <div className="d-block d-md-flex listing border">
        <div className="img d-block" style={{ backgroundImage: 'url("images/img_1.jpg")' }}>
          <img className="img-JobUser" src="" alt="" />
        </div>
        <div className="lh-content" >
          <Link to="/info-job"><h4> NodeJS</h4></Link>
          <Link to="/user-apply-job" className="btn btn-warning btn-apply">Hồ sơ đã ứng tuyển</Link>
          <h3>Nhà tuyển dụng:<Link to="#"> FPT</Link></h3>
          <address className="addre">Địa chỉ: Đà Nẵng</address>
          <p className="mb-0">
            <span className="review">Hạn nộp hồ sơ: 2019-09-09</span>
          </p>

        </div>
      </div>
    );
  }
}

export default myJobRecruiter;