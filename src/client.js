import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './components/container.css';
import './components/styles.css';
import Row from './components/row';
import Col from './components/col';
import Header from './components/header';
import Profile from './components/profile';
import Contact from './components/contact';
import BorderedBoxList from './components/bordered-box-list';
import ProgressList from './components/progress-list';

const app = (
  <div className="container">
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
  </div>
);

ReactDOM.render(app, document.getElementById('content'));
