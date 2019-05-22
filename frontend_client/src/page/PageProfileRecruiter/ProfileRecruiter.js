import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <form className="form" action="##" method="post" id="registrationForm">
        <div className="form-group form-style">
          <div className="col-xs-6">
            <label htmlFor="first_name"><h4>Tên công ty</h4></label>
            <input type="text" className="form-control input-form" title="enter your first name if any." />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="last_name"><h4>Số điện thoại</h4></label>
            <input type="text" className="form-control input-form" title="enter your last name if any." />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="email"><h4>Email</h4></label>
            <input type="email" className="form-control input-form" title="enter your email." />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="phone"><h4>Địa chỉ</h4></label>
            <input type="text" className="form-control input-form" title="enter your phone number if any." />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="password"><h4>Mật khẩu</h4></label>
            <input type="password" className="form-control input-form" name="password" id="password" title="enter your password." />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="password2"><h4>Nhập lại mật khẩu</h4></label>
            <input type="password" className="form-control input-form" name="password2" id="password2" title="enter your password2." />
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