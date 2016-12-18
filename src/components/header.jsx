import React from 'react';
import './header.css';
import picture from '../../static/natanael.jpg';
import Row from './row';
import Col from './col';
import { getData, getHeader } from '../i18n';

const data = {
  name: 'Natanael Log',
  title: 'Computer Engineering Student',
  location: 'Linköping, Sweden'
};

export default class Header extends React.Component {
  render() {
    const name = getData('name');
    const title = getData('title');
    const location = getData('location');

    return (
      <Row>
        <Col n="12">
          <img className="header-picture" src={picture} />
          <div className="header-information">
            <h1 className="header-name">{name}</h1>
            <h4>{title}</h4>
            <p>
              <i className="fa fa-map-marker"/> {location}
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}
