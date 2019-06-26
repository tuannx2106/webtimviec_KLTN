import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

class ProfessionItem extends Component {
  render() {
    const { professions } = this.props
    return (
      <Fragment>
        {professions.map(item => (
<<<<<<< HEAD
        <div class="col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
          <Link to="" class="popular-category h-100">
            {/* <div  class="icon" ><img src = {professions.logo} /></div> */}
            <span class="icon"><span class="flaticon-open-book"></span></span>
            <span class="caption mb-2 d-block">{item.professionJobName}</span>
=======
        <div className="col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
          <Link to="/tatcacongviec" className="popular-category h-100">
            <span className="icon"><span className="flaticon-car"></span></span>
            <span className="caption mb-2 d-block">{item.professionJobName}</span>
>>>>>>> b671874... search recruiter
          </Link>
        </div>
        ))}
      </Fragment>
    );
  }
}

export default ProfessionItem;