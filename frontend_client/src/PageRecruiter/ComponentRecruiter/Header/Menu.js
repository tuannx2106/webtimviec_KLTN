import React, { Component } from 'react';
import { NavLink, Link, withRouter } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curentRecruiter: null,
    };
  }
  componentDidMount() {
    const curRecruiter = JSON.parse(localStorage.getItem('currentRecruiter'));
    this.setState({ curentRecruiter: curRecruiter });
  }

  logOut = () => {
    localStorage.removeItem("currentRecruiter");
    this.setState({ curentRecruiter: null })
    this.props.history.push('/trang-nha-tuyen-dung');
  }
  render() {
    const { curentRecruiter } = this.state;
    return (
      <div className="row align-items-center">
        <div className="col-6 col-xl-2">
          <h1 className="mb-0 site-logo"><Link to="/trang-nha-tuyen-dung" className="text-white mb-0">Nhà tuyển dụng</Link></h1>
        </div>
        <div className="col-12 col-md-10 d-none d-xl-block">
          <nav className="site-navigation position-relative text-right" role="navigation">
            <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
              <li><NavLink exact activeStyle={{ fontWeight: "bold", color: "#7643ea" }} to="/trang-nha-tuyen-dung">Trang chủ</NavLink></li>
              <li><NavLink activeStyle={{ fontWeight: "bold", color: "#7643ea" }} to="/dang-cong-viec">Đăng tuyển</NavLink></li>
              <li><NavLink activeStyle={{ fontWeight: "bold", color: "#7643ea" }} to="#">Tìm hồ sơ</NavLink></li>

              {
                curentRecruiter ?
                  <>
                    <li className="nav-item">
                      <span className="border-left pl-xl-4 " > <img src={curentRecruiter.logo} alt="avatar" class="avatar-rounded img-style"></img> </span>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        {
                          curentRecruiter.companyName
                        }
                      </a>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile-recruiter">Quản lý hồ sơ</Link>
                        <span> <a href="#" className="dropdown-item" onClick={this.logOut}>Đăng xuất</a></span>
                      </div>
                    </li>
                  </>
                  :
                  <li className="ml-xl-3 login"><span className="border-left pl-xl-4" /><Link to="/login-recruiter">Đăng Nhập</Link><Link to="/register-recruiter">Đăng Ký</Link></li>
              }

              <li><Link to="/" className="cta"><span className="bg-primary text-white rounded">Người tìm việc</span></Link></li>
            </ul>
          </nav>
        </div>
        <div className="d-inline-block d-xl-none ml-auto py-3 col-6 text-right" style={{ position: 'relative', top: '3px' }}>
          <a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3" /></a>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);