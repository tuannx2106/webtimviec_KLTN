import React, { Component } from 'react';
import Menu from "../ComponentRecruiter/Header/Menu";
import Header from "../ComponentRecruiter/Header/Header";
import Footer from "../ComponentRecruiter/Footer/Footer"
import InputEmail from "../ComponentRecruiter/Container/InputEmail/InputEmail"

class HomePageRcruiter extends Component {

  render() {
    return (
      <div className="site-wrap">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>
        <div className="site-navbar container py-0 " role="banner">
          <Menu />
        </div>
        <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url(images/recruiter-bg.jpg)' }} data-aos="fade" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <Header />
            </div>
          </div>
        </div>
        <div class="bg-light" data-aos="fade">
          <div className="row product-list">
            <div className="product-list-box">
              <img className="product-list__numberEMRank" src='logo/logo1.png' ></img>
              <div className="product-list__textNew">Đăng tuyển công việc</div>
              <div className="product-list__benefit">Giúp đẩy mạnh, quảng bá thương hiệu tuyển dụng</div>
            </div>
            <div className="product-list-box">
              <img className="product-list__numberEMRank" src="logo/logo2.png" />
              <div className="product-list__textNew">Lọc hồ sơ ứng viên </div>
              <div className="product-list__benefit">Giúp đẩy mạnh, quảng bá thương hiệu tuyển dụng</div>
            </div>
            <div className="product-list-box">
              <img className="product-list__numberEMRank" src="logo/logo3.png"  />
              <div className="product-list__textNew">Quảng bá tuyển dụng</div>
              <div className="product-list__benefit">Giúp đẩy mạnh, quảng bá thương hiệu tuyển dụng</div>
            </div>
          </div>
        </div>
        <div className="row list-pro">
          <div className="container">
            <div className="row relative">
              <div className="col-xs-12 col-sm-5 paddingRight0 padding0-mb">
                <h2 className="fontsize40">Đăng tin tuyển dụng</h2>
                <ul className="list-char-pr">
                  <li>
                    <span class="cycle-green">1</span>
                    <span class="txt-in-70">Nhiều ứng viên xem tin</span>
                  </li>
                  <li>
                    <span class="cycle-green">2</span>
                    <span class="txt-in-70">Đăng tin nhanh chóng và nhận được nhiều hồ sơ ứng tuyển</span>
                  </li>
                  <li>
                    <span class="cycle-green">3</span>
                    <span class="txt-in-70">Quản lý hồ sơ ứng viên thuận tiện</span>
                  </li>
                </ul>
                <div style={{ textAlign: "left" }}>
                  <a href="#" class="btn btn-orange-48 w100p-mb">ĐĂNG TUYỂN NGAY</a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-7 padding0-mb">
                <img src="logo/logo4.png" />
              </div>
            </div>
          </div>

        </div>
        <div className="row list-pro bg-light">
          <div className="container" style={{ maxWidth: "980px" }}>
            <div className="row relative">
              <div className=" col-sm-7 padding0-mb">
                <img className="mar-img" src="logo/logo5.png" />
              </div>
              <div className="col-xs-12 col-sm-5 marginTop25-mb padding0-mb">
                <h2 className="fontsize40">Lọc hồ sơ</h2>
                <ul className="list-char-pr">
                  <li>
                    <span class="cycle-green">1</span>
                    <span class="txt-in-70">Nhiều ứng viên xem tin</span>
                  </li>
                  <li>
                    <span class="cycle-green">2</span>
                    <span class="txt-in-70">Đăng tin nhanh chóng và nhận được nhiều hồ sơ ứng tuyển</span>
                  </li>
                  <li>
                    <span class="cycle-green">3</span>
                    <span class="txt-in-70">Quản lý hồ sơ ứng viên thuận tiện</span>
                  </li>
                </ul>
                <div style={{ textAlign: "left" }}>
                  <a href="#" class="btn btn-orange-48 w100p-mb">LỌC HỒ SƠ ỨNG VIÊN</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="bg-w">
          <div className="container" style={{ maxWidth: "980px" }}>
            <div className="font300">Quảng bá tuyển dụng với<br />
              <b className="font600">các gói dịch vụ tốt nhất</b>
            </div>
            <div className="row row-10">
              <div className="col-xs-12 col-sm-4 paddingRight10 paddingLeft10">
                <div className="box-dv">
                  <img className="icon-dv-1" src="logo/logo6.png" />
                  <div style={{ fontSize: "18px", color: "#363636", textTransform: "uppercase", fontWeight: "700" }}>
                    Đăng tin trang chủ</div>
                  <div style={{ fontSize: "18px", color: "#f87612 ", textTransform: "uppercase", fontWeight: "700" }}>
                    2.000.000 VND/1 Tuần</div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 paddingRight10 paddingLeft10">
                <div className="box-dv">
                  <img className="icon-dv-1" src="logo/logo7.png" />
                  <div style={{ fontSize: "18px", color: "#363636", textTransform: "uppercase", fontWeight: "700" }}>
                    Đăng tin trang ngành</div>
                  <div style={{ fontSize: "18px", color: "#f87612 ", textTransform: "uppercase", fontWeight: "700" }}>
                    1.430.000 VND/1 Tuần</div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-4 paddingRight10 paddingLeft10">
                <div className="box-dv">
                  <img className="icon-dv-1" src="logo/logo8.png" />
                  <div style={{ fontSize: "18px", color: "#363636", textTransform: "uppercase", fontWeight: "700" }}>
                    Lọc hồ sơ</div>
                  <div style={{ fontSize: "18px", color: "#f87612 ", textTransform: "uppercase", fontWeight: "700" }}>
                    1.500.000 VND/1 Tuần</div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="newsletter bg-primary py-5">
        </div>
        <div className="site-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePageRcruiter;