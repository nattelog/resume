import React from 'react';
import Row from './row';
import Col from './col';
import Header from './header';
import BorderedBox from './bordered-box';
import letter from '../../cover-letter.txt';

export default class CoverLetter extends React.Component {
  render() {
    return (
      <Row>
        <Col n="12">
          <Header />
          <BorderedBox title="Hi">
            {letter}
          </BorderedBox>
        </Col>
      </Row>
    );
  }
}
