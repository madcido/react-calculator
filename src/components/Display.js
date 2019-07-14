import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  render() {
    return (
      <div className='display'>
        <p>{this.props.error ? 'Error' : this.props.show}</p>
      </div>
    );
  }
}

Display.propTypes = {
  show: PropTypes.string.isRequired,
};
