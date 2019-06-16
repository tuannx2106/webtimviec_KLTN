import React, { Component, Fragment } from 'react';
import Menu from "../../PageRecruiter/ComponentRecruiter/Header/Menu";
import "./style.css"
import ProfileRecruiter from './ProfileRecruiter';
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
                <img src={curentRecruiter.logo} className="avatar img-thumbnail" alt="avatar" />
                <h6 className="txt-img">Dán link ảnh vào đây để cập nhật logo công ty</h6>
                <input type="text" className="center-block file-upload" />
                <button className="btn btn-primary mt-3" >Cập nhật logo</button>
              </div>
            </div>
            <div className="col-sm-9">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" href="#profilerecruiter" role="tab" data-toggle="tab">Hồ sơ công ty</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#myjobrecruiter" role="tab" data-toggle="tab">Công việc đã đăng</a>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane active" id="profilerecruiter">
                  <hr />
                  <ProfileRecruiter curentRecruiter={curentRecruiter} />
                  <hr />
                </div>
                <div className="tab-pane" id="myjobrecruiter">
                  <hr />
                  <JobRecruiter listJobRecruiter={listJobRecruiter} curentRecruiter={curentRecruiter}/>
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