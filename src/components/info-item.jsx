import React from 'react';

export default class InfoItem extends React.Component {
  render() {
    const { title, date, description } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <h4>{date}</h4>
        <p>{description}</p>
      </div>
    );
  }
}
