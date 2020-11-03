import React from 'react';
import './Title.css';

const Title = ({ Icon, title }) => {
  return (
    <div className='title'>
      <h2>{title}</h2>
      {Icon ? <Icon className='title__icon' /> : ''}
    </div>
  );
};

export default Title;
