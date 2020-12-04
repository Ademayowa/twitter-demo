import React from 'react';
import TrendsList from '../TrendsList/TrendsList';
import Title from '../Title/Title';
import { HiCog } from 'react-icons/hi';
import './Trends.css';

const Trends = () => {
  return (
    <div className='trends'>
      <Title Icon={HiCog} title='Trends for you' />
      <TrendsList
        text='Burna · Boy'
        heading='latest tweets today'
        info='This is how we do'
      />
      <TrendsList
        text='education · trending'
        heading='NANS'
        info='116k tweets'
      />
      <TrendsList
        text='football · trending'
        heading='Ronaldo'
        info='278k tweets'
      />
    </div>
  );
};

export default Trends;
