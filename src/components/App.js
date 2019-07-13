import React from 'react';
import Display from './Display';
import Panel from './Panel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      err: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(btn) {
    this.setState(calculate(this.state, btn));
  }
  render() {
    return (
      <div className='calculator'>
        <p className='brand'>Girly-Girl</p>
        <Display show={this.state.next || this.state.total || '0'} error={this.state.err} />
        <Panel handleClick={this.handleClick}/>
      </div>
    );
  }
}
