import React, { Component } from 'react';
import Menu from "../../Component/Header/Menu"
import Header from './component/Header';
import Footer from '../../Component/Footer/Footer';
import InputEmail from '../../Component/Container/InputEmail/InputEmail';
import Job from './component/Job';
import Filter from './component/Filter';

class AllJob extends Component {
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
        <div className="site-blocks-cover inner-page-cover overlay" style={{ backgroundImage: 'url(images/hero_2.jpg)' }} data-aos="fade" data-stellar-background-ratio="0.5">
          <div className="container">
            <Header />
          </div>
        </div>
        <div className="site-section bg">
          <div className="container">
            <div className="row">
            <div className="col-lg-3">
                <Filter />
              </div>
              <div className="col-lg-9">
                <div className="row scroll">
                  <Job />
                  <Job />
                  <Job />
                  <Job />
                  <Job />
                  <Job />
                  <Job />
                  <Job />
                  <Job />
                  <Job />
                </div>
                
              </div>
              <div className="col-12 mt-5 text-center">
                  <div className="custom-pagination" style={{marginLeft:"25%"}}>
                    <span>1</span>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <span className="more-page">...</span>
                    <a href="#">10</a>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className="newsletter bg-primary py-5">
          <InputEmail />
        </div>
        <div className="site-footer">
          <Footer />
        </div>
      </div >

    );
  }
}

export default AllJob;