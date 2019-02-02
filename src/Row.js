import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
  render() {
    const { children, side, style, className, ...rest } = this.props
    return (
      <div className={`${className} row`} {...rest} style={{ justifyContent: side, alignItems: 'center', ...style }}>
        {children}
      </div>
    );
  }
}

export default Row;

Row.defaultProps = {
  side: 'flex-start',
};

Row.propTypes = {
  side: PropTypes.string,
};

//    example ------
//   <Row side='space-between'>
//   <div>1111</div>
//   <div>2222</div>
// </Row>
