import React from 'react';

export default class Display extends React.Component {
  render() {
    return (
      <div className='display'>
        <p>{this.props.show ? this.props.show : '0'}</p>
      </div>
    );
  }
}
