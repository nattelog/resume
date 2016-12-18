import React from 'react';
import Row from './row';
import Col from './col';
import Header from './header';
import Profile from './profile';
import Contact from './contact';
import BorderedBoxList from './bordered-box-list';
import ProgressList from './progress-list';

export default class Resume extends React.Component {
  render() {
    return (
      <Row>
        <Col n="8">
          <Header />
          <Profile />
          <BorderedBoxList selector="experience" />
          <BorderedBoxList selector="education" />
          <BorderedBoxList selector="references" />
        </Col>
        <Col n="4">
          <Contact />
          <ProgressList selector="skills" />
          <ProgressList selector="tools" />
          <ProgressList selector="languages" />
        </Col>
      </Row>
    );
  }
}
