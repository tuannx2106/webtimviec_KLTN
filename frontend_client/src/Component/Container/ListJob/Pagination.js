import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'; 

class Pagination extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentPage: null,
      pageCount: null
    }
  }

  componentWillMount() {
    const startingPage = this.props.startingPage ? this.props.startingPage : 1;
    const data = this.props.data;
    const pageSize = this.props.pageSize;
    let pageCount = parseInt(35 / pageSize);
    if (data.length % pageSize > 0) {
      pageCount++;
    }
    this.setState({
      currentPage: startingPage,
      pageCount: pageCount
    });
  }

  setCurrentPage(num) {
    this.setState({ currentPage: num });
  }

  createControls() {
    let controls = [];
    const pageCount = this.state.pageCount;
    for (let i = 1; i <= pageCount; i++) {
      const baseClassName = 'pagination-controls__button';
      const activeClassName = i === this.state.currentPage ? `${baseClassName}--active` : '';
      controls.push(
        <div
          className={`${baseClassName} ${activeClassName}`}
          onClick={() => this.setCurrentPage(i)}
        >
          {i}
        </div>
      );
    }
    return controls;
  }

  createPaginatedData() {
    const data = this.props.data;
    const pageSize = this.props.pageSize;
    const currentPage = this.state.currentPage;
    const upperLimit = currentPage * pageSize;
    const dataSlice = data.slice((upperLimit - pageSize), upperLimit);
    return dataSlice;
  }
  render() {
    return (
      <div className='pagination'>
        <div className='col-lg-8 cbLeftHome'>
          {React.cloneElement(this.props.children, { data: this.createPaginatedData() })}
          <Link to="/tatcacongviec"><div style={{float:"left",margin: "5px 0px 0px 15px", color: "darkorange"}}>Xem thêm...</div></Link>
          <div className='pagination-controls' style={{ display: "flex", float:"right", marginRight:"11px" }}>
            {this.createControls()}
          </div>
        </div>
        <div className="col-lg-4 cbRightHome">
          <div className="block20">
            <img src="images/adver-side-2.png" alt=""></img>
          </div>
        </div>
      </div>
    );
  }
}

Pagination.propTypes = {
  data: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  startingPage: PropTypes.number.isRequired
};

Pagination.defaultProps = {
  pageSize: 7,
  startingPage: 1
};

export default Pagination;

