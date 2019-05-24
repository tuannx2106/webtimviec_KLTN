import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Job extends Component {
  render() {
    return (
      <div className="col-lg-12 block" >
        <div className="d-block d-md-flex listing" style={{height:"150px"}}>
          <a href="#" className="img d-block" style={{ backgroundImage: 'url("images/img_1.jpg")'}}/>
          <div className="lh-content">
          <Link to="/info-job"><h6> NodeJS</h6></Link>
          <a href="/" className="bookmark"><span class="icon-heart"></span></a>
            <h3>Nhà tuyển dụng:<Link to="#"> FPT</Link></h3>
            <address className ="mb-0">Địa chỉ: Đà Nẵng</address>
            <span className="review mb-0">Hạn nộp hồ sơ: 2019-09-09</span>
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