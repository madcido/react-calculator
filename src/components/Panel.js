import React from 'react';
import Button from './Button';

export default class Panel extends React.Component {
  render() {
    return (
      <div className='panel'>
        <div>
          <Button handleClick={this.props.handleClick} name={'C'} color={'#f66'} />
          <Button handleClick={this.props.handleClick} name={'7'} />
          <Button handleClick={this.props.handleClick} name={'4'} />
          <Button handleClick={this.props.handleClick} name={'1'} />
          <Button handleClick={this.props.handleClick} name={'0'} />
        </div>
        <div>
          <Button handleClick={this.props.handleClick} name={'+/-'} color={'#ccc'} />
          <Button handleClick={this.props.handleClick} name={'8'} />
          <Button handleClick={this.props.handleClick} name={'5'} />
          <Button handleClick={this.props.handleClick} name={'2'} />
          <Button handleClick={this.props.handleClick} name={'.'} />
        </div>
        <div>
          <Button handleClick={this.props.handleClick} name={'%'} color={'#ccc'} />
          <Button handleClick={this.props.handleClick} name={'9'} />
          <Button handleClick={this.props.handleClick} name={'6'} />
          <Button handleClick={this.props.handleClick} name={'3'} />
          <Button handleClick={this.props.handleClick} name={'='} color={'#ccc'}/>
        </div>
        <div>
          <Button handleClick={this.props.handleClick} name={'÷'} color={'#ccc'} />
          <Button handleClick={this.props.handleClick} name={'x'} color={'#ccc'} />
          <Button handleClick={this.props.handleClick} name={'-'} color={'#ccc'} />
          <Button handleClick={this.props.handleClick} name={'+'} color={'#999'} big={true}/>
        </div>
      </div>
    );
  }
}
