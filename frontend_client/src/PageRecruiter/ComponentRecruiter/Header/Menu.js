import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="row align-items-center">
        <div className="col-6 col-xl-2">
          <h1 className="mb-0 site-logo"><Link to="/trang-nha-tuyen-dung" className="text-white mb-0">Nhà tuyển dụng</Link></h1>
        </div>
        <div className="col-12 col-md-10 d-none d-xl-block">
          <nav className="site-navigation position-relative text-right" role="navigation">
            <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
              <li><NavLink exact activeStyle={{ fontWeight: "bold", color: "#7643ea" }} to="/">Trang chủ</NavLink></li>
              <li><NavLink activeStyle={{ fontWeight: "bold", color: "#7643ea" }} to="/tatcacongviec">Đăng tuyển</NavLink></li>
              <li><NavLink activeStyle={{ fontWeight: "bold", color: "#7643ea" }} to="/nhatuyendung">Tìm hồ sơ</NavLink></li>
              {/* <li className="mr-5"><NavLink to="/">Thông tin</NavLink></li> */}
             
              <li className="ml-xl-3 login"><span className="border-left pl-xl-4" /><Link to="/login">Đăng Nhập</Link><Link to="/register">Đăng Ký</Link></li>

             
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

export default Menu;