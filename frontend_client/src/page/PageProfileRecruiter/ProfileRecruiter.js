import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { curentRecruiter } = this.props;
    if (!curentRecruiter)
      return <div>Loading ...</div>
    return (
      <form className="form" action="##" method="post" id="registrationForm">
        <div className="form-group form-style">
          <div className="col-xs-6">
            <label htmlFor="name"><h4>Tên công ty</h4></label>
            <input type="text" className="form-control input-form" value ={curentRecruiter.companyName ? curentRecruiter.companyName : ""} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="phone"><h4>Số điện thoại</h4></label>
            <input type="text" className="form-control input-form" value ={curentRecruiter.phone ? curentRecruiter.phone : ""} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="email"><h4>Email</h4></label>
            <input type="email" className="form-control input-form" value ={curentRecruiter.email ? curentRecruiter.email : ""} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="address"><h4>Địa chỉ</h4></label>
            <input type="text" className="form-control input-form" value ={curentRecruiter.address ? curentRecruiter.address : ""} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="password"><h4>Mật khẩu</h4></label>
            <input type="password" className="form-control input-form" name="password" id="password" value ={curentRecruiter.password ? curentRecruiter.password : ""} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="password2"><h4>Nhập lại mật khẩu</h4></label>
            <input type="password" className="form-control input-form" name="password2" id="password2" value ={curentRecruiter.password ? curentRecruiter.password : ""} />
          </div>
        </div>
        <div className="form-btn">
          <div className="col-xs-12">
            <button className="btn btn-lg btn-primary mt-5" type="submit"> Cập nhật</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Profile;