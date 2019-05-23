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
        <div class="site-section bg-light" data-aos="fade">
         
        </div>
        <br></br>
        <div className="site-section bg-light">
        
        </div>
        <br></br>
        <div className="site-section bg-light">
        
        </div>
        <div className="newsletter bg-primary py-5">
          <InputEmail />
        </div>
        <div className="site-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePageRcruiter;