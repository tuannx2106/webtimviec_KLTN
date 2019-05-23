import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="row justify-content-center mb-4">
          <div className="col-md-8 text-center">
            <h1 className data-aos="fade-up">Để doanh nghiệp vươn xa !</h1>
            <p data-aos="fade-up" data-aos-delay={100}>Tìm đúng người - Trao đúng việc</p>
          </div>
        </div>
        {/* <div className="form-search-wrap mb-3" data-aos="fade-up" data-aos-delay={200}>
          <form method="post">
            <div className="row align-items-center">
              <div className="col-lg-12 mb-4 mb-xl-0 col-xl-4">
                <input type="text" className="form-control rounded" placeholder="Tìm một công việc..." />
              </div>
              <div className="col-lg-12 mb-4 mb-xl-0 col-xl-3">
                <div className="select-wrap">
                  <span className="icon"><span className="icon-keyboard_arrow_down" /></span>
                  <select className="form-control rounded" >
                    <option selected>Nghề nghiệp ...</option>

                    <option value="1" >
                      option1
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-12 mb-4 mb-xl-0 col-xl-3">
                <div className="select-wrap">
                  <span className="icon"><span className="icon-keyboard_arrow_down" /></span>
                  <select className="form-control rounded" >
                    <option selected>Thành phố ...</option>
                   
                      <option value="1" >
                        "option1"
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-12 col-xl-2 ml-auto">
                <a href="#" className="btn btn-primary rounded py-2 px-4 text-white">Tìm kiếm</a>
              </div>
            </div>
          </form>
        </div>*/}
      </div> 
    );
  }
}

export default Header;