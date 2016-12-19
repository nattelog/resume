import React from 'react';
import './cover-letter.css';
import Row from './row';
import Col from './col';
import Header from './header';
import BorderedBox from './bordered-box';
import letter from '../../cover-letter.txt';
import signature from '../../static/signature.png';
import { getHeader } from '../i18n';

export default class CoverLetter extends React.Component {
  render() {
    const paragraphs = letter.split('\n\n');
    const br = getHeader('br');

    return (
      <Row>
        <Col n="12">
          <Header />
          <BorderedBox title="Hi">
            { paragraphs.map((p, index) => <p key={index}>{p}</p>) }
            <p>{br},</p>
            <img className="signature" src={signature} />
          </BorderedBox>
        </Col>
      </Row>
    );
  }
}
