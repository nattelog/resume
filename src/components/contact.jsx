import React from 'react';
import './contact.css';
import Box from './box';
import { getData, getHeader } from '../i18n';

export default class Contact extends React.Component {
  render() {
    const data = getData('contact');
    const header = getHeader('contact');

    return (
      <Box title={header}>
        <div className="contact-box">
          {
            data.map((row, index) => {
              let className;

              if (index === data.length - 1) {
                className = 'base-color';
              }
              return <p key={index} className={className}>{row}</p>;
            })
          }
        </div>
      </Box>
    );
  }
}
