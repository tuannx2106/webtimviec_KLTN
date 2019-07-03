import React, { Component, Fragment } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }
  handleClick() {
    this.setState(() => ({ checked: false }));
  }

  handleCheckboxChange = (e) => {
    this.setState({ checked: e.target.checked });
  }

  render() {
    const { cities, professions } = this.props;
    const { checked } = this.state
    return (
      <Fragment>
        <button className="btn btn-primary col-lg-12 mb-3" onClick={() => this.handleClick()}>Tất cả công việc</button>
        <div>
          <div className="mb-3 p-2 bord bg-w">
            <h6 className=" font mb-3 text-center " style={{ borderBottom: "1px solid #c1c1c1", paddingBottom: "5px" }}>Địa điểm</h6>
            <div style={{ overflow: "auto", display: "block", maxHeight: "220px" }}>
              <ul className="mb-0" style={{ lineHeight: "20px", listStyle: "none" }}>
                {cities && cities.map(item => (
                  <li className="super-search-filter">
                    <label className="lable-filter">
                      <input type="checkbox" className="ipt_check" onChange={this.handleCheckboxChange} checked={checked}></input>
                      <span className="value">{item.name}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3 p-2 bord bg-w">
            <h6 className="font mb-3 text-center" style={{ borderBottom: "1px solid #c1c1c1", paddingBottom: "5px" }}>Ngành nghề</h6>
            {/* <div style={{ overflow: "auto", maxHeight: "220px" }}>
              {professions && professions.map(item => (
                <div className="select-wrap">
                  <button className="form-control item-fil text-left" data-id={item.id} onClick={onClickProf}> {item.professionJobName} </button>
                </div>
              ))}
            </div> */}
            <div style={{ overflow: "auto", display: "block", maxHeight: "220px" }}>
              <ul className="mb-0" style={{ lineHeight: "20px", listStyle: "none" }}>
                {professions && professions.map(item => (
                  <li className="super-search-filter">
                    <label className="lable-filter">
                    <input type="checkbox" className="ipt_check" onChange={this.handleCheckboxChange} checked={checked}></input>
                      <span className="value">{item.professionJobName}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="p-2 bord bg-w">
          <img src="images/adver-side-2.png" alt="" style={{ maxWidth: "237px" }}></img>
        </div>
      </Fragment>
    );
  }
}

export default Filter;