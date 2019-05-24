import React, { Component } from 'react';

class Infomation extends Component {
  render() {
    return (
      <div className="row" style={{background: "#fff",padding: "30px",border: "1px solid #eee"}}>
        <div className="col-lg-8">
          <h3>Phúc lợi dành cho bạn</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ratione dolores expedita id repudiandae nostrum aut, impedit repellat nam veritatis, pariatur facere reprehenderit alias atque molestias ipsum officia asperiores possimus eos, quis nemo hic. Autem molestias dolorum blanditiis quibusdam culpa nobis quam, soluta quasi quis, fugiat delectus pariatur, eos quae.</p>
          
          <h3 className="mt-5">Mô tả công việc</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ratione dolores expedita id repudiandae nostrum aut, impedit repellat nam veritatis, pariatur facere reprehenderit alias atque molestias ipsum officia asperiores possimus eos, quis nemo hic. Autem molestias dolorum blanditiis quibusdam culpa nobis quam, soluta quasi quis, fugiat delectus pariatur, eos quae.</p>
          
          <h3 className="mt-5">Yêu cầu công việc</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ratione dolores expedita id repudiandae nostrum aut, impedit repellat nam veritatis, pariatur facere reprehenderit alias atque molestias ipsum officia asperiores possimus eos, quis nemo hic. Autem molestias dolorum blanditiis quibusdam culpa nobis quam, soluta quasi quis, fugiat delectus pariatur, eos quae.</p>
        </div>
        <div className="col-lg-4">
          <div className="mb-5" style={{position:"relative",border:"1px solid rgba(0,185,242,.22)",backgroundColor:"rgba(234, 248, 252, 0.38);",padding:"12px"}}>
              <div className="form-group">
                <span className="wid">Ngày đăng tuyển: </span>
                <span className="wid">Ngày hết hạn: </span>
                <span className="wid">Thành phố: </span>
                <span className="wid">Kĩ năng: </span>
                <span className="wid">Ngành nghề: </span>
              </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Infomation;