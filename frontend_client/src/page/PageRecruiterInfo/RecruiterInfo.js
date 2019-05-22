import React, { Component } from 'react';
import Menu from '../../Component/Header/Menu';
import Header from './component/Header';
import Infomation from './component/Info';
import InputEmail from '../../Component/Container/InputEmail/InputEmail';
import Footer from '../../Component/Footer/Footer';

const getInitialState = () => {
  const initialState = {
    recruiters: [],
  };
  return initialState;
};

class RecruiterInfo extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    fetch("/admin/api/recruiter/list")
      .then(response => response.json())
      .then(data => this.setState({ recruiters: data, isLoading: false }));
  };
  render() {
    const { recruiters } = this.state;
    console.log(recruiters)
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
        <div className="site-section">
          <div className="container">
            <Infomation recruiters={recruiters}/>
          </div>
        </div>
        <div className="newsletter bg-primary py-5">
          <div className="container">
            <InputEmail />
          </div>
        </div>
        <div className="site-footer">
          <Footer />
        </div>
      </div>

    );
  }
}

export default RecruiterInfo;