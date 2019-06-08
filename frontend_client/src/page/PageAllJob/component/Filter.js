import React, { Component, Fragment } from 'react';

class Filter extends Component {
  render() {
    const { cities, professions } = this.props;
    return (
      <Fragment>
        <div>
          <div className="mb-3 p-2 bord bg-w">
            <h6 className=" font mb-3 ">ĐỊA ĐIỂM</h6>
            <div style={{ overflow: "auto", maxHeight: "220px" }}>
              {cities && cities.map(item => (
                <div className="select-wrap">
                  <button className="form-control item-fil text-left"> {item.name} </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3 p-2 bord bg-w">
            <h6 className="font mb-3 ">NGÀNH NGHỀ</h6>
            <div style={{ overflow: "auto", maxHeight: "220px" }}>
              {professions && professions.map(item => (
                <div className="select-wrap">
                  <button className="form-control item-fil text-left"> {item.professionJobName} </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-2 bord bg-w">
             <img src="images/adver-side-2.png" alt="" style={{maxWidth:"237px"}}></img>
        </div>
      </Fragment>
    );
  }
}

export default Filter;