import React, {Component} from 'react';
import Link from 'gatsby-link';

class Counter extends Component{
  constructor () {
    super();
    this.state = {
      count: 0
    }
  }
  render () {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Counter</h1>
        <h2>Current count: {this.state.count}</h2>
        <p><Link to='/'>Home</Link></p>
        <button onClick={() => this.setState({count: this.state.count + 1})}>plus</button>
        <button onClick={() => this.setState({count: this.state.count - 1})}>minus</button>
      </div>
      )
  }
}

export default Counter;