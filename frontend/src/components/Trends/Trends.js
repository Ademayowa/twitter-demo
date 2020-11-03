import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import Title from '../Title/Title';
import TrendsList from '../TrendsList/TrendsList';
import './Trends.css';

const Trends = () => {
  return (
    <div className='trends'>
      <Title Icon={SettingsIcon} title='Trends for you' />
      <hr />
      <TrendsList
        Icon={KeyboardArrowDownIcon}
        text='Music . Trending'
        heading='Burna'
        info='166k Tweets'
      />
      <hr />
      <TrendsList
        Icon={KeyboardArrowDownIcon}
        text='Trending in Nigeria'
        heading='#IkoroduProtest'
        info='21.5k Tweets'
      />
      <hr />
      <TrendsList
        Icon={KeyboardArrowDownIcon}
        text='Hip hop . Trending'
        heading='Burna boy'
        info='78.5k Tweets'
      />
    </div>
  );
};

export default Trends;
