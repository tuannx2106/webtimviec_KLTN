import React, { Component } from 'react';

class Infomation extends Component {
  render() {
    const {job} = this.props

    return (
      <div className="row" style={{ background: "#fff", padding: "30px", border: "1px solid #eee" }}>
        <div className="col-lg-8">
          {job.description}
        </div>
        <div className="col-lg-4">
          <div className="mb-5" style={{ position: "relative", border: "1px solid rgba(0,185,242,.22)", backgroundColor: "rgba(234, 248, 252, 0.38);", padding: "12px" }}>
            <div className="form-group">
              <span className="wid">Ngày đăng tuyển: {job.date}</span>
              <span className="wid">Ngày hết hạn: {job.expired}</span>
              <span className="wid">Thành phố: {job.city.name}</span>
              <span className="wid">Kĩ năng: </span>
              <span className="wid">Ngành nghề: {
                job.jobRequireProfessionJobList.map(jrpj => {
                  return jrpj.professionJob.professionJobName + ', '
              })}</span>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Infomation;
