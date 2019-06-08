import React, { Component } from 'react';
import Menu from "../ComponentRecruiter/Header/Menu";
import Header from "../../PageRecruiter/PostJob/component/Header";
import Footer from "../ComponentRecruiter/Footer/Footer";
// import InputEmail from '../../Component/Container/InputEmail/InputEmail';
import InfoRecruiter from './component/InfoRecruiter';
import NewPost from "./component/NewPost"

const getInitialState = () => {
  const initialState = {
    jobs: [],
    cities: [],
    status: [],
    recruiter: [],
    curentRecruiter: null,
  };
  return initialState;
};

class PostJob extends Component {

  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  componentWillMount() {
    const token = localStorage.getItem("currentRecruiter");
    console.log(token)
    if(!token){
      this.props.history.push("/login-recruiter")
    }
  }

  componentDidMount() {
    this.getList();
    const curRecruiter = JSON.parse(localStorage.getItem('currentRecruiter'));
    this.setState({ curentRecruiter: curRecruiter });
  }

  getList = () => {
    fetch("/admin/api/city/list")
      .then(response => response.json())
      .then(data => this.setState({ cities: data, isLoading: false }));

    fetch("/admin/api/status/list")
      .then(response => response.json())
      .then(data => this.setState({ status: data, isLoading: false }));
    fetch("/admin/api/recruiter/list")
      .then(response => response.json())
      .then(data => this.setState({ recruiter: data, isLoading: false }));
  };

  render() {
    const { cities, status, curentRecruiter } = this.state;
    if (!curentRecruiter)
      return <div>Loading ...</div>
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
        <div className="site-blocks-cover inner-page-cover overlay" style={{ backgroundImage: 'url(images/img_3.jpg)' }} data-aos="fade" data-stellar-background-ratio="0.5">
          <div className="container">
            <Header />
          </div>
        </div>

        <div className="site-section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8 mb-5">
                <NewPost curentRecruiter={curentRecruiter} cities={cities} status={status} />
              </div>
              <div className="col-lg-4">
                <InfoRecruiter curentRecruiter={curentRecruiter} />
              </div>
            </div>
          </div>
        </div>

        <div className="newsletter bg-primary py-5">
          {/* <InputEmail /> */}
        </div>
        <div className="site-footer">
          <Footer />
        </div>
      </div >

    );
  }
}

export default PostJob;