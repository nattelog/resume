import React from 'react';

export default class Col extends React.Component {
  render() {
    const { n } = this.props;
    const className = 'col-xs-' + n;
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
