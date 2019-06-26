import React, { Component } from 'react';
import Menu from "../../Component/Header/Menu"
import Header from './component/Header';
import Footer from '../../Component/Footer/Footer';
import InputEmail from '../../Component/Container/InputEmail/InputEmail';
import Job from './component/Job';
import Pagination from "../../Component/Pagination/Pagination";
import Filter from './component/Filter';


class AllJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      cities: [],
      professions: [],
      pageOfItems: [],
      filterCity: 0,
      filterProf: 0
    };
    this.allJob = [{
      city: {},
      jobRequireProfessionJobList: [{ professionJob: {} }],
      title: ""
    }];
  }

  async componentDidMount() {
    const { selectedCity, selectedProf, searchInput } = this.props.location.state ? this.props.location.state : { selectedCity: 0 }

    this.allJob = await fetch('/admin/api/job/list').then(response => response.json())
    let cityList = await fetch('/admin/api/city/list').then(response => response.json())
    let profList = await fetch('admin/api/profession/list').then(response => response.json())
    let jobsResult = this.jobsSearchResult(this.allJob, searchInput, parseInt(selectedCity), parseInt(selectedProf))

    if (jobsResult.length !== 0) {
      this.setState({
        jobs: jobsResult,
        professions: profList,
        cities: cityList
      })
    } else {
      this.setState({
        jobs: this.allJob,
        professions: profList,
        cities: cityList
      })
    }
  }

  jobsSearchResult = (jobList, inputSearch, cityId, professionId) => {
    return jobList.filter(job => {
      return job.city.id === cityId
        && job.jobRequireProfessionJobList.filter(jrpj => jrpj.professionJob.id === professionId).length !== 0
        && job.title.toLowerCase().trim().indexOf(inputSearch.toLowerCase().trim()) !== -1
    })
  }

  jobsFilterByCity = (jobList, cityId) => (jobList.filter(job => job.city.id === cityId))

  jobsFilterByProf = (jobList, profId) => (jobList.filter(job => {
    return job.jobRequireProfessionJobList.filter(jrpj => jrpj.professionJob.id === profId).length !== 0 ? job : null
  }))

  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems: pageOfItems });
  }

  onClickCity = e => {
    this.setState({ jobs: this.jobsFilterByCity(this.state.jobs, parseInt(e.target.dataset.id)) })
  }

  onClickProf = e => {
    this.setState({ jobs: this.jobsFilterByProf(this.state.jobs, parseInt(e.target.dataset.id)) })
  }

  render() {
    const { cities, jobs, professions } = this.state;

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
            <Header cities={cities} professions={professions} />
          </div>
        </div>

        <div className="site-section bg">
          <div className="container">
            <div className="row">
              <div className="title-list-job">
                <h5 style={{ lineHeight: "1", margin: "0", fontFamily: "Roboto, Verdana", fontSize: "17px" }}>TẤT CẢ CÔNG VIỆC TÌM THẤY</h5>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  <Job jobs={this.state.pageOfItems} />
                </div>
                <div className='pagination-controls' style={{ display: "flex", float: "right", marginRight: "11px" }}>
                  <Pagination items={jobs} onChangePage={this.onChangePage} pageJob />
                </div>
              </div>
              <div className="col-lg-3">
                <Filter cities={cities}
                  onClickCity={this.onClickCity}
                  professions={professions}
                  onClickProf={this.onClickProf} />
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
