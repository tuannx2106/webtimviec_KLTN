import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="mb-5 bg-light p-2 bord">
        <h3 className="h5 text-black mb-3 text-center">Lọc theo</h3>
        <br></br>
        <form action="#" method="post">
          <div className="form-group">
            <div className="select-wrap">
              <span className="icon"><span className="icon-keyboard_arrow_down" /></span>
              <select className="form-control" >
                <option value>Ngành nghề...</option>
                <option value>Real Estate</option>
                <option value>Books &amp;  Magazines</option>
                <option value>Furniture</option>
                <option value>Electronics</option>
                <option value>Cars &amp; Vehicles</option>
                <option value>Others</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="select-wrap">
              <span className="icon"><span className="icon-keyboard_arrow_down" /></span>
              <select className="form-control" >
                <option value>Thành phố...</option>
                <option value>Real Estate</option>
                <option value>Books &amp;  Magazines</option>
                <option value>Furniture</option>
                <option value>Electronics</option>
                <option value>Cars &amp; Vehicles</option>
                <option value>Others</option>
              </select>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default Filter;