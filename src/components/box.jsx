import React from 'react';
import './box.css';
import Row from './row';
import Col from './col';

export default class Box extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <Row>
        <Col n="12">
          <h2>{title}</h2>
            {children}
        </Col>
      </Row>
    );
  }
}
