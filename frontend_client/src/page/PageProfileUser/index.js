import React, { Component, Fragment } from 'react';
import Menu from "../../Component/Header/Menu";
import "./style.css"
// import Profile from './ProfileUser';
import Myjob from './myJob';


class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curentUser: null,
      jobUsers: [],
    };
  }

  async componentDidMount() {
    const curUser = await JSON.parse(localStorage.getItem('currentUser'));
    let data = await fetch(`/admin/api/userjob/user/` + curUser.id).then(response => response.json())
    this.setState({
      curentUser: curUser,
      jobUsers: data,
    })
  }

  handleChange = event => {
    const { curentUser } = this.state
    curentUser[event.target.name] = event.target.value
    this.setState({ curentUser: { ...curentUser } })
  };

  onUpdateUser = () => {
    const { curentUser } = this.state;
    fetch(`/admin/api/users/`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(curentUser)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ curentUser: data, })
        localStorage.setItem('currentUser', JSON.stringify(data));
        alert("Cập nhật thông tin thành công !")
      })
  };


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
                <h6 className="txt-img">Dán link hình vào đây để cập nhật hình đại diện</h6>
                <input
                  type="text"
                  name="avatar"
                  value={curentUser.avatar ? curentUser.avatar : ""}
                  onChange={this.handleChange}
                  className="center-block file-upload"
                />
                {/* <button className="btn btn-primary mt-3" onClick={this.onUpdateAvarta}>Cập nhật hình đại diện</button> */}
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
                  {/* <Profile curentUser={curentUser} /> */}
                  <div className="form">
                    <div className="form-group form-style">
                      <div className="col-xs-6">
                        <label htmlFor="name"><h4>Họ và tên</h4></label>
                        <input type="text" className="form-control input-form" value={curentUser.name ? curentUser.name : ""} name="name" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="phone"><h4>Số điện thoại</h4></label>
                        <input type="text" className="form-control input-form" value={curentUser.sdt ? curentUser.sdt : ""} name="sdt" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="phone"><h4>Số chứng minh nhân dân</h4></label>
                        <input type="text" className="form-control input-form" value={curentUser.cmnd ? curentUser.cmnd : ""} name="cmnd" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="address"><h4>Địa chỉ</h4></label>
                        <input type="text" className="form-control input-form" value={curentUser.address ? curentUser.address : ""} name="address" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="gender"><h4>Giới tính</h4></label>
                        <input type="text" className="form-control input-form" value={curentUser.gender ? curentUser.gender : ""} name="gender" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="email"><h4>Email</h4></label>
                        <input type="email" className="form-control input-form" value={curentUser.email ? curentUser.email : ""} name="email" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="password"><h4>Mật khẩu</h4></label>
                        <input type="password" className="form-control input-form" id="password" value={curentUser.password ? curentUser.password : ""} name="password" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="birthday"><h4>Ngày sinh</h4></label>
                        <input type="date" className="form-control input-form" value={curentUser.birthday ? curentUser.birthday : ""} name="birthday" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="password2"><h4>Nhập lại mật khẩu</h4></label>
                        <input type="password" className="form-control input-form" id="password" value={curentUser.password ? curentUser.password : ""} name="password" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-btn">
                      <div className="col-xs-12">
                        <button className="btn btn-lg btn-primary mt-5" onClick={this.onUpdateUser}> Cập nhật</button>
                      </div>
                    </div>
                  </div>
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