import React, { Component, Fragment } from 'react';

class ProfileUser extends Component {
  render() {
    const { curentUser } = this.props;
    if (!curentUser)
      return <div>Loading ...</div>
    // console.log(curentUser)
    return (
      <form className="form" action="##" method="post" id="registrationForm">
        <div className="form-group form-style">
          <div className="col-xs-6">
            <label htmlFor="first_name"><h4>Họ và tên</h4></label>
            <input type="text" className="form-control input-form" value ={curentUser.name ? curentUser.name : ""} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="last_name"><h4>Số điện thoại</h4></label>
            <input type="text" className="form-control input-form" value ={curentUser.sdt ? curentUser.sdt : ""} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="phone"><h4>Địa chỉ</h4></label>
            <input type="text" className="form-control input-form" value ={curentUser.address ? curentUser.address : ""} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="mobile"><h4>Giới tính</h4></label>
            <input type="text" className="form-control input-form" value ={curentUser.gender ? curentUser.gender : ""} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="email"><h4>Email</h4></label>
            <input type="email" className="form-control input-form" value ={curentUser.email ? curentUser.email : ""} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="email"><h4>Ngày sinh</h4></label>
            <input type="date" className="form-control input-form"  value ={curentUser.date_of_birth ? curentUser.date_of_birth : ""} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="password"><h4>Mật khẩu</h4></label>
            <input type="password" className="form-control input-form" name="password" id="password" value ={curentUser.password ? curentUser.password : ""} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label htmlFor="password2"><h4>Nhập lại mật khẩu</h4></label>
            <input type="password" className="form-control input-form" name="password2" id="password2" value ={curentUser.password ? curentUser.password : ""} />
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

export default ProfileUser;