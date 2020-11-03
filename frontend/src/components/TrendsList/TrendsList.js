import React from 'react';
import './TrendsList.css';

const TrendsList = ({ title, Icon, text, heading, info }) => {
  return (
    <div className='trendsList'>
      <div className='trendsList__body'>
        <div className='trendsList__contents'>
          <div className='trendsList__icon'>
            <Icon />
          </div>

          <div className='trendsList__top'>
            <p>{text}</p>
          </div>
          <div className='trendsList__center'>
            <h4>{heading}</h4>
          </div>
          <div className='trendsList__bottom'>
            <p>{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendsList;
