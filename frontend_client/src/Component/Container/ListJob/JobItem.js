import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

class JobItem extends Component {

  render() {
    const { data } = this.props;
    if (!data)
      return <div>Loading ...</div>
    return (
      <Fragment>
        <div className="col-lg-12">
          <div className="job-list">
            {data && data.map(item => (
              <div className="info-employer-job">
                <div className="info-left">
                  <span className="icon-detail-company"><img className="img-job" src={item.recruiter.logo}></img></span>
                  <div className="text-gray-light">
                    <Link to={"/job/" + item.id}><h6 className="txt-title">{item.title}</h6></Link>
                    <address className="addre">{item.recruiter.companyName}</address>
                  </div>
                </div>
                <div className="info-right">
                  <span className="review"><img className="icon3" src={"/images/icon7.png"}></img></span>
                  <p>{item.city.name}</p>
                </div>

                <div className="info-right">
                  <span className="review"><img className="icon3" src={"/images/icon6.png"}></img></span>
                  <p className="color-red">{item.expired}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default JobItem;
