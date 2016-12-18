import React from 'react';
import BorderedBox from './bordered-box';
import { getData, getHeader } from '../i18n';

export default class Profile extends React.Component {
  render() {
    const profile = getData('profile');
    const header = getHeader('profile');

    return (
      <BorderedBox title={header}>
        <p>{profile}</p>
      </BorderedBox>
    );
  }
}
