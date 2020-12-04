import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import './TrendsList.css';

const TrendsList = ({ title, text, heading, info }) => {
  return (
    <div className='trendsList'>
      <div className='triendsList__body'>
        <RiArrowDownSLine className='trendsList__icon' />
        <div className='trendsList__top'>
          <h6>{text}</h6>
          <p className='font-weight-bold'>
            <strong>{heading}</strong>
          </p>
          <h6>{info}</h6>
        </div>
      </div>
    </div>
  );
};

export default TrendsList;
