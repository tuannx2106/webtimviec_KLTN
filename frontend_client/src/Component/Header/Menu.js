import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

class Menu extends Component {
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

  logOut= () =>{
    localStorage.removeItem("currentUser");
    this.setState({curentUser : null})
  }

  render() {
    const { curentUser } = this.state;
    return (
      <div className="row align-items-center">
        <div className="col-6 col-xl-2">
          <h1 className="mb-0 site-logo"><Link to="/" className="text-white mb-0">Tim Viec Nhanh</Link></h1>
        </div>
        <div className="col-12 col-md-10 d-none d-xl-block">
          <nav className="site-navigation position-relative text-right" role="navigation">
            <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
              <li><NavLink exact activeStyle={{ fontWeight: "bold", color: "#7643ea" }} to="/">Trang chủ</NavLink></li>
              <li><NavLink activeStyle={{ fontWeight: "bold", color: "#7643ea" }} to="/tatcacongviec">Tất cả công việc</NavLink></li>
              <li><NavLink activeStyle={{ fontWeight: "bold", color: "#7643ea" }} to="/nhatuyendung">Nhà tuyển dụng</NavLink></li>
              {/* <li className="mr-5"><NavLink to="/">Thông tin</NavLink></li> */}
            
              {
                curentUser ? 
                <>
                <li className="nav-item">
                <span className="border-left pl-xl-4 " > <img src={curentUser.avatar} alt="avatar" class="avatar-rounded img-style"></img> </span>
              </li> 
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                 {
                   curentUser.name
                 }
                </a>
                <div class="dropdown-menu">
                  <Link class="dropdown-item" to="/profile-user">Quản lý hồ sơ</Link>
                  <span> <a href="#" class="dropdown-item" onClick={this.logOut}>Đăng xuất</a></span>
                </div>
              </li>
              </>
                :
              <li className="ml-xl-3 login"><span className="border-left pl-xl-4" /><Link to="/login">Đăng Nhập</Link><Link to="/register">Đăng Ký</Link></li>

              }
             
              <li><Link to="/trang-nha-tuyen-dung" className="cta"><span className="bg-primary text-white rounded">Nhà tuyển dụng</span></Link></li>
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

export default Menu;