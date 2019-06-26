import React, { Component } from 'react';
import Menu from "../../Component/Header/Menu"
import Header from './component/Header';
import Footer from '../../Component/Footer/Footer';
import InputEmail from '../../Component/Container/InputEmail/InputEmail';
import Recruiter from './component/Recruiter';
import Pagination from "../../Component/Pagination/Pagination";

class PageRecruiter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruiters: [],
      cities: [],
      pageOfItems: [],
      valueInput: "",
      selectedCity: 0,
    };
    this.allRecruiter = [{
      city: {},
      title: ""
    }];
  }

  async componentDidMount() {
    const { selectedCity, valueInput } = this.state
    this.allRecruiter = await fetch("/admin/api/recruiter/list").then(response => response.json())
    let cityList = await fetch("/admin/api/city/list").then(response => response.json())
    let RecruitersResult = this.RecSearchResult(this.allRecruiter, valueInput, parseInt(selectedCity))

    if (RecruitersResult.length !== 0) {
      this.setState({
        recruiters: RecruitersResult,
        cities: cityList
      })
    } else {
      this.setState({
        recruiters:  this.allRecruiter,
        cities: cityList
      })
    }

  }

  RecSearchResult = (RecruiterList, inputSearch, cityId) => {
    return RecruiterList.filter(rec => {
      return rec.city.id === cityId
        && rec.title.toLowerCase().trim().indexOf(inputSearch.toLowerCase().trim()) !== -1
    })
  }

  onChangePage = (pageOfItems) => {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  handleData = (valueInput, selectedCity) => {
    this.setState({
      valueInput: valueInput,
      selectedCity: selectedCity
    });
    console.log(selectedCity)
  }

  render() {
    const { recruiters, cities } = this.state;
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
            <Header cities={cities} handlerFromParant={this.handleData} />
          </div>
        </div>
        <div className="site-section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <Recruiter recruiters={this.state.pageOfItems} />
                </div>
                <div className='pagination-controls' style={{ display: "flex", float: "right", marginRight: "11px" }}>
                  <Pagination items={recruiters} onChangePage={this.onChangePage} pageJob />
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

export default PageRecruiter;