import React, { Component } from 'react';

class InputEmail extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Hãy cho chúng tôi email của bạn.</h2>
            <p>Chúng tôi sẽ gửi bạn những công việc tốt nhất</p>
          </div>
          <div className="col-md-6">
            <form className="d-flex">
              <input type="text" className="form-control " placeholder="Email" />
              <button className="btn btn-warning btn-white" >Nhập</button> 
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default InputEmail;