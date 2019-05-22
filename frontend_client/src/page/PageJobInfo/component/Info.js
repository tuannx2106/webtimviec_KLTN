import React, { Component } from 'react';

class Infomation extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-8">
          <h3>Phúc lợi dành cho bạn</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ratione dolores expedita id repudiandae nostrum aut, impedit repellat nam veritatis, pariatur facere reprehenderit alias atque molestias ipsum officia asperiores possimus eos, quis nemo hic. Autem molestias dolorum blanditiis quibusdam culpa nobis quam, soluta quasi quis, fugiat delectus pariatur, eos quae.</p>
          
          <h3 className="mt-5">Mô tả công việc</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ratione dolores expedita id repudiandae nostrum aut, impedit repellat nam veritatis, pariatur facere reprehenderit alias atque molestias ipsum officia asperiores possimus eos, quis nemo hic. Autem molestias dolorum blanditiis quibusdam culpa nobis quam, soluta quasi quis, fugiat delectus pariatur, eos quae.</p>
          
          <h3 className="mt-5">Yêu cầu công việc</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ratione dolores expedita id repudiandae nostrum aut, impedit repellat nam veritatis, pariatur facere reprehenderit alias atque molestias ipsum officia asperiores possimus eos, quis nemo hic. Autem molestias dolorum blanditiis quibusdam culpa nobis quam, soluta quasi quis, fugiat delectus pariatur, eos quae.</p>
        </div>
        <div className="col-lg-3 ml-auto">
          <div className="mb-5">
            <h3 className="h5 text-black mb-3">Filters</h3>
            <form action="#" method="post">
              <div className="form-group">
                <input type="text" placeholder="What are you looking for?" className="form-control" />
              </div>
              <div className="form-group">
                <div className="select-wrap">
                  <span className="icon"><span className="icon-keyboard_arrow_down" /></span>
                  <select className="form-control" name id>
                    <option value>All Categories</option>
                    <option value selected>Real Estate</option>
                    <option value>Books &amp;  Magazines</option>
                    <option value>Furniture</option>
                    <option value>Electronics</option>
                    <option value>Cars &amp; Vehicles</option>
                    <option value>Others</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                {/* select-wrap, .wrap-icon */}
                <div className="wrap-icon">
                  <span className="icon icon-room" />
                  <input type="text" placeholder="Location" className="form-control" />
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default Infomation;