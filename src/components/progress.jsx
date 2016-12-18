import React from 'react';
import './progress.css';
import { ProgressBar } from 'react-bootstrap';

export default class Progress extends React.Component {
  render() {
    const { title, skill } = this.props;
    return (
      <div>
        <p>{title}</p>
        <ProgressBar now={skill} />
      </div>
    );
  }
}
