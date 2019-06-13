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
      selectedFile: null,
      jobUsers: []
    };
  }

  fileSelectHandle = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  onUpdateAvatar = () => {
    const body = new FormData();
    body.append('avatar', this.state.selectedFile);
    fetch(`/admin/api/users`, {
      method: "PUT",
      body: body
    })
      .then(response => {
        console.log(response);
      })
  };


  async componentDidMount() {
    const curUser = await JSON.parse(localStorage.getItem('currentUser'));
    let data = await fetch(`/admin/api/userjob/user/` + curUser.id).then(response => response.json())
    this.setState({ 
      curentUser: curUser,
      jobUsers: data,
     })
  }

  render() {
    const { curentUser, jobUsers } = this.state;
    if (!curentUser)
      return <div>Đang tải ...</div>
    return (
      <Fragment>
        <div className="site-navbar container py-0" style={{ backgroundImage: 'url(images/hero-1.jpg)' }} role="banner">
          <Menu />
        </div>
        <div className="container bootstrap snippet" data-aos="fade" data-stellar-background-ratio="0.5">
          <div className="row" style={{ marginTop: "135px" }}>
            <div className="col-sm-3">
              <div className="text-center">
                {curentUser.avatar && (
                  <div className="img-select">
                    <img
                      src={curentUser.avatar}
                      className="avatar img-circle img-thumbnail"
                      alt="avatar"
                    />
                  </div>
                )}
                {/* <img src={curentUser.avatar} className="avatar img-circle img-thumbnail" alt="avatar" /> */}
                <h6 className="txt-img">Cập nhật hình đại diện</h6>
                <input
                  type="file"
                  name="avatar"
                  onChange={this.fileSelectHandle}
                  className="text-center center-block file-upload"
                />
                <button className="btn btn-primary mt-3" onClick={this.onUpdateAvatar}>Cập nhật hình đại diện</button>
              </div>
            </div>
            <div className="col-sm-9">
              <ul className="nav nav-tabs">
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
                  <Myjob jobUsers={jobUsers} />
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