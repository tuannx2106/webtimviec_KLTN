import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

class Recruiter extends Component {
  render() {
    const { recruiters } = this.props;
    return (
      <Fragment>
        {recruiters.map(item => (
          <div className="col-lg-3 pb-3">
            <div className="d-block d-md-flex listing vertical">
              <Link to="#" className="img d-block" style={{ backgroundImage: 'url("images/img_1.jpg")' }} />
              <div className="lh-content">
                {/* <Link to="/info"> <span className="category">{item.companyName}</span></Link> */}
                <a href="/" className="bookmark"><span className="icon-heart"></span></a>
               <Link to="/info"> <h3>{item.companyName}</h3></Link>
                <address>{item.address}</address>

               <div dangerouslySetInnerHTML={{__html: item.description}}></div>

              </div>
            </div>

          </div>
        ))}
      </Fragment>

    );
  }
}

export default Recruiter;