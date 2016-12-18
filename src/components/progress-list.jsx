import React from 'react';
import Box from './box';
import List from './list';
import Progress from './progress';
import { getHeader } from '../i18n';

export default class ProgressList extends React.Component {
  render() {
    const { selector } = this.props;
    const config = {
      selector,
      mapper: (item, index) => <Progress key={index} {...item} />
    };
    const title = getHeader(config.selector);

    return (
      <Box title={title}>
        <List {...config} />
      </Box>
    );
  }
}
