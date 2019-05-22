import React, { Component, Fragment } from 'react';

class Infomation extends Component {
  render() {
    const { recruiters } = this.props;
    return (
      <div className="row">

        <div className="col-lg-8">
          {recruiters.map(item => (
            <Fragment>
              {/* <figure>
                <img src="images/img_2.jpg" alt="Image" className="img-fluid" />
                <figcaption>Hình ảnh công ty</figcaption>
              </figure>
              <h5>Thông tin</h5>
              <p>Lorem ipsum dolor sit amet, consectuta quasi quis, fugiat delectus pariatur, eos quae.</p> */}
              {item.description}
            </Fragment>
          ))}
        </div>

       {/* <div className="col-lg-3 ml-auto">
      //   <div className="mb-5">
      //     <h3 className="h5 text-black mb-3">Filters</h3>
      //     <form action="#" method="post">
      //       <div className="form-group">
      //         <input type="text" placeholder="What are you looking for?" className="form-control" />
      //       </div>
      //     </form>
      //   </div>
      // </div> */}


      </div>

    );
  }
}

export default Infomation;