import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="row justify-content-center mb-4">
          <div className="col-md-8 text-center">
            <h1 data-aos="fade-up">Để doanh nghiệp vươn xa !</h1>
            <p data-aos="fade-up" data-aos-delay={100}>Tìm đúng người - Trao đúng việc</p>
          </div>
        </div>
      </div> 
    );
  }
}

export default Header;