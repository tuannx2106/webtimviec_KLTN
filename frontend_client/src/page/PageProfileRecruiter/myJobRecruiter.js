import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

class myJobRecruiter extends Component {
  handClick = (id) => {
    localStorage.setItem('userAddJob', id);
  }

  render() {
    const { listJobRecruiter, curentRecruiter } = this.props;
    return (
      <Fragment>
        {listJobRecruiter && listJobRecruiter.map(item => (
          <div className="d-block d-md-flex listing border">
            <div className="img d-block text-center">
              <img className="img-JobUser" src={item.recruiter.logo} alt="" />
            </div>
            <div className="lh-content" >
              <Link to={"/job-recruiter/"+item.id}><h6> {item.title}</h6></Link>
              <Link to="/user-apply-job" className="btn btn-warning btn-apply" onClick={() => this.handClick(item.id)}>Hồ sơ đã ứng tuyển</Link>
              <h3>Nhà tuyển dụng:<Link to="#"> {curentRecruiter.companyName}</Link></h3>
              <address className="addre">Địa chỉ: {item.city.name}</address>
              <p className="mb-0">
                <span className="review">Hạn nộp hồ sơ: {item.expired}</span>
              </p>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default myJobRecruiter;