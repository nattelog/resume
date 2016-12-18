import React from 'react';
import './container.css';
import Row from './row';
import Header from './header';

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}
