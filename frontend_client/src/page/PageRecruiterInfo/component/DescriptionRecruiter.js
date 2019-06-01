import React, { Component } from 'react';

class DescriptionRecruiter extends Component {
  render() {
    const {recruiter} = this.props;
    return (
      <div className="info-employer col-xs-12">
        {recruiter.description}
      </div>
    );
  }
}

export default DescriptionRecruiter;