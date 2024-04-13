import React, { Component } from 'react';
import propTypes from 'prop-types';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <h2>{title}</h2>
        {children}
      </>
    );
  }
}

Section.propTypes = {
  title: propTypes.string,
};

export default Section;
