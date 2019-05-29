import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom"

class RecruiterItem extends Component {
  render() {
    const { recruiters } = this.props;
    return (
      <Fragment>
        {recruiters && recruiters.map(item => (
          <div className="col-lg-3" style={{marginBottom:"10px"}}>
            <div className="d-block d-md-flex listing vertical w-254">
              <div className="img d-block"> <img className="img-recruiter" src={item.logo} /> </div>
              <div className="lh-content">
                <h3><a href="#"> {item.companyName}</a></h3>
                <address className="address">Địa chỉ: {item.address}</address>
              </div>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default RecruiterItem;