import React, { Component, Fragment } from 'react';

class Filter extends Component {
  render() {
    const { cities, professions } = this.props;
    return (
      <Fragment>
        <div>
          <div className="mb-3 p-2 bord bg-w">
            <h6 className=" font mb-3 ">ĐỊA ĐIỂM</h6>
            <div style={{ overflow: "auto", maxHeight: "175px" }}>
              {cities && cities.map(item => (
                <div className="select-wrap">
                  <span className="form-control item-fil"> {item.name} </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3 p-2 bord bg-w">
            <h6 className="font mb-3 ">NGÀNH NGHỀ</h6>
            <div style={{ overflow: "auto", maxHeight: "195px" }}>
              {professions && professions.map(item => (
                <div className="select-wrap">
                  <span className="form-control item-fil"> {item.professionJobName} </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Filter;