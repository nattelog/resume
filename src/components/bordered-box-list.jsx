import React from 'react';
import BorderedBox from './bordered-box';
import List from './list';
import InfoItem from './info-item';
import { getHeader } from '../i18n';

export default class BorderedBoxList extends React.Component {
  render() {
    const { selector } = this.props;
    const config = {
      selector,
      mapper: (item, index) => <InfoItem key={index} {...item} />
    };
    const title = getHeader(selector);

    return (
      <BorderedBox title={title}>
        <List {...config} />
      </BorderedBox>
    );
  }
}
