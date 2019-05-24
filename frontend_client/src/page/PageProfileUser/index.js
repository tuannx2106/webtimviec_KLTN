import React, { Component, Fragment } from 'react';
import Menu from "../../Component/Header/Menu";
import "./style.css"
import Profile from './ProfileUser';
import Myjob from './myJob';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curentUser: null,
    };
  }

  componentDidMount() {
    const curUser = JSON.parse(localStorage.getItem('currentUser'));
    this.setState({ curentUser: curUser });
  }
  
  render() {
    const { curentUser } = this.state;
    if (!curentUser)
      return <div>Loading ...</div>
    return (
      <Fragment>
        <div className="site-navbar container py-0" style={{ backgroundImage: 'url(images/hero-1.jpg)' }} role="banner">
          <Menu />
        </div>
        <div className="container bootstrap snippet" data-aos="fade" data-stellar-background-ratio="0.5">
          <div className="row" style={{ marginTop: "135px" }}>
            <div className="col-sm-3">
              <div className="text-center">
                <img src={curentUser.avatar} className="avatar img-circle img-thumbnail" alt="avatar" />
                <h6 className="txt-img">Cập nhật hình đại diện</h6>
                <input type="file" className="text-center center-block file-upload" />
              </div>
            </div>
            <div className="col-sm-9">
              <ul className="nav nav-tabs" role="ta blist">
                <li className="nav-item">
                  <a className="nav-link active" href="#profile" role="tab" data-toggle="tab">Hồ sơ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#myjob" role="tab" data-toggle="tab">Công việc của bạn</a>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane active" id="profile">
                  <hr />
                  <Profile curentUser={curentUser} />
                  <hr />
                </div>
                <div className="tab-pane" id="myjob">
                  <hr />
                  <Myjob />
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default index;