import React from 'react';

export default class Button extends React.Component {
  render() {
    const customStyle = {backgroundColor: this.props.color};
     if (this.props.big) {
      customStyle.height = '132px';
      customStyle.lineHeight = '132px';
    }
    return (
      <div className='button' style={customStyle} onClick={() => this.props.handleClick(this.props.name)}>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
