import React from 'react';
import './WhoToFollow.css';

const WhoToFollow = ({ img, name, verified, handle, src }) => {
  return (
    <div className='whoToFollow'>
      <div className='whoToFollow__body'>
        <div className='whoToFollow__avatar'>
          <img
            alt=''
            src={src}
            className='rounded-circle'
            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          />
        </div>

        <div className='whoToFollow__userInfo'>
          <div className='whoToFollow__userName'>
            <h4 className='font-weight-bold'>{name}</h4>
            <h4 className='whoToFollow__userHandle'>@{handle}</h4>
          </div>

          <div className='whoToFollow__button'>
            <button className='btn__follow'>Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoToFollow;
