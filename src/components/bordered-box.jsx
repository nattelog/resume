import React from 'react';
import './bordered-box.css';
import Box from './box';

export default class BorderedBox extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <Box title={title}>
        <div className="bordered-box">
          {children}
        </div>
      </Box>
    );
  }
}
