import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom"

class Myjob extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     jobUsers: []
  //   };
  // }

  // componentDidMount() {
  //   fetch(`/admin/api/userjob/user/1`)
  //     .then(response => response.json())
  //     .then(data => this.setState({ jobUsers: data }));
  // }

  render() {
    const { jobUsers } = this.props;
    console.log(jobUsers);
    if (!jobUsers)
    return <div>Đang tải...</div>
    return (
      <Fragment>
        {jobUsers && jobUsers.map(item => (
        <div className="d-block d-md-flex listing border">
          <div className="img d-block" style={{textAlign:"center"}}>
              <img className="img-JobUser" src={item.job.recruiter.logo} alt="" />
            </div>
          <div className="lh-content" >
            <Link to={"/job/"+ item.job.id}><h6> {item.job.title}</h6></Link>
            <h3>Nhà tuyển dụng:<Link to="#"> {item.job.recruiter.companyName}</Link></h3>
            <address className="addre">Địa chỉ: {item.job.city.name}</address>
            <p className="mb-0">
              <span className="review">Hạn nộp hồ sơ: {item.job.expired}</span>
            </p>
          </div>
        </div>
        ))}
      </Fragment>
    );
  }
}

export default Myjob;