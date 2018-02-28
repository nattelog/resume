import React from 'react';
import { getData } from '../i18n';

export default class List extends React.Component {
  render() {
    const { selector, mapper } = this.props;
    const data = getData(selector);
    const out = Array.isArray(data) ?
      data.map(mapper) :
      (<p>{data}</p>);

    return (
      <div>
        {out}
      </div>
    );
  }
}
