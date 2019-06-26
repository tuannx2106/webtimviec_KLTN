import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: 0,
      searchInput: ""
    };
  };

  submitHandler = (evt) => {
    const {searchInput,selectedCity} = this.state;
    evt.preventDefault();
    this.props.handlerFromParant(searchInput, selectedCity);
    
    this.setState({
      searchInput: '',
      selectedCity:''
    });
  }

  handleOnChangeInput = (e) => {
    this.setState({ searchInput: e.target.value });
  }

  handleOnChangeSelectedCity = (e) => {
    this.setState({ selectedCity: e.target.value });
  }

  render() {
    const { cities } = this.props;
    return (
      <div className="row align-items-center justify-content-center text-center">
        <div className="col-md-10" data-aos="fade-up" data-aos-delay={400}>
          <div className="row justify-content-center mt-5">
            <div className="col-md-8 text-center">
              <h1>Nhà tuyển dụng</h1>
            </div>
          </div>
        </div>
        <div className="form-search-wrap mb-3" data-aos="fade-up" data-aos-delay={200} style={{width:"60%"}}>
       
            <div className="row align-items-center">
              <div className="col-lg-12 mb-4 mb-xl-0 col-xl-5">
                <input type="text" className="form-control rounded" placeholder="Tìm nhà tuyển dụng..." 
                  onChange={this.handleOnChangeInput}
                  />
              </div>
              <div className="col-lg-12 mb-4 mb-xl-0 col-xl-4">
                <div className="select-wrap">
                  <span className="icon"><span className="icon-keyboard_arrow_down" /></span>
                  <select className="form-control rounded" onChange={this.handleOnChangeSelectedCity}>
                    <option>Thành phố ...</option>
                    {cities && cities.map(item => (
                      <option value={item.id} >{item.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-12 col-xl-3 ml-auto text-right">
                <button className="btn btn-primary btn-block rounded padding8" onClick={this.submitHandler}>Tìm kiếm</button>
              </div>
            </div>
         
        </div>
      </div>
    );
  }
}

export default Header;