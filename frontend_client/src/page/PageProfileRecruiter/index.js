import React, { Component, Fragment } from 'react';
import Menu from "../../PageRecruiter/ComponentRecruiter/Header/Menu";
import "./style.css"
// import ProfileRecruiter from './ProfileRecruiter';
import JobRecruiter from "./myJobRecruiter";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curentRecruiter: null,
      listJobRecruiter: []
    };
  }

  async componentDidMount() {
    const curRecruiter = await JSON.parse(localStorage.getItem('currentRecruiter'));

    let data = await fetch(`/admin/api/job/recruiter/` + curRecruiter.id).then(response => response.json())
    this.setState({
      curentRecruiter: curRecruiter,
      listJobRecruiter: data,
    })
  }

  handleChange = event => {
    const { curentRecruiter } = this.state
    curentRecruiter[event.target.name] = event.target.value
    this.setState({ curentRecruiter: { ...curentRecruiter } })
  };

  onUpdateRecruiter = () => {
    const { curentRecruiter } = this.state;
    // curentUser = { ...curentUser };
    fetch(`/admin/api/recruiter/`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(curentRecruiter)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ curentRecruiter: data, })
        localStorage.setItem('currentRecruiter', JSON.stringify(data));
        alert("Cập nhật thông tin thành công !")
      })
  };

  render() {
    const { curentRecruiter, listJobRecruiter } = this.state;
    if (!curentRecruiter)
      return <div>Đang tải ...</div>
    return (
      <Fragment>
        <div className="site-navbar container py-0 " style={{ backgroundImage: 'url(images/hero-1.jpg)' }} role="banner">
          <Menu />
        </div>
        <div className="container bootstrap snippet" data-aos="fade" data-stellar-background-ratio="0.5">
          <div className="row" style={{ marginTop: "135px" }}>
            <div className="col-sm-3">
              <div className="text-center">
                {curentRecruiter.logo && (
                  <div className="img-select">
                    <img
                      src={curentRecruiter.logo}
                      className="avatar img-circle img-thumbnail"
                      alt="avatar"
                    />
                  </div>
                )}
                <h6 className="txt-img">Dán link ảnh vào đây để cập nhật logo công ty</h6>
                <input type="text" className="center-block file-upload"
                  name="logo"
                  value={curentRecruiter.logo ? curentRecruiter.logo : ""}
                  onChange={this.handleChange}
                />
                {/* <button className="btn btn-primary mt-3" >Cập nhật logo</button> */}
              </div>
            </div>
            <div className="col-sm-9">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" href="#profilerecruiter" role="tab" data-toggle="tab">Hồ sơ công ty</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#myjobrecruiter" role="tab" data-toggle="tab">Công việc đã đăng</a>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane active" id="profilerecruiter">
                  <hr />
                  <div className="form">
                    <div className="form-group form-style">
                      <div className="col-xs-6">
                        <label htmlFor="name"><h4>Tên công ty</h4></label>
                        <input type="text" className="form-control input-form" value={curentRecruiter.companyName ? curentRecruiter.companyName : ""} name="companyName" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="phone"><h4>Số điện thoại</h4></label>
                        <input type="text" className="form-control input-form" value={curentRecruiter.phone ? curentRecruiter.phone : ""} name="phone" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="email"><h4>Email</h4></label>
                        <input type="email" className="form-control input-form" value={curentRecruiter.email ? curentRecruiter.email : ""} name="email" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="address"><h4>Địa chỉ</h4></label>
                        <input type="text" className="form-control input-form" value={curentRecruiter.address ? curentRecruiter.address : ""} name="address" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="password"><h4>Mật khẩu</h4></label>
                        <input type="password" className="form-control input-form" value={curentRecruiter.password ? curentRecruiter.password : ""} name="password" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="password2"><h4>Thuộc thành phố</h4></label>
                        <input type="text" className="form-control input-form" value={curentRecruiter.password ? curentRecruiter.password : ""} name="password" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-btn">
                      <div className="col-xs-12">
                        <button className="btn btn-lg btn-primary mt-5" onClick={this.onUpdateRecruiter}> Cập nhật</button>
                      </div>
                    </div>
                  </div>
                  {/* <ProfileRecruiter curentRecruiter={curentRecruiter} /> */}
                  <hr />
                </div>
                <div className="tab-pane" id="myjobrecruiter">
                  <hr />
                  <JobRecruiter listJobRecruiter={listJobRecruiter} curentRecruiter={curentRecruiter} />
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