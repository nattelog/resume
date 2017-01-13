import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './components/container.css';
import './components/styles.css';
import Resume from './components/resume';
import CoverLetter from './components/cover-letter';

const resume = false;
const content = resume ? <Resume /> : <CoverLetter />;

const app = (
  <div className="container">
    {content}
  </div>
);

ReactDOM.render(app, document.getElementById('content'));
