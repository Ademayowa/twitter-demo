import React from 'react';
import { Button } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import './WhoToFollow.css';

const WhoToFollow = ({ img, name, verified, handle, src }) => {
  return (
    <div className='whoToFollow'>
      <div className='whoToFollow__body'>
        <div className='whoToFollow__avatar'>
          <Avatar src={src} />
        </div>

        <div className='whoToFollow__userInfo'>
          <div className='whoToFollow__userName'>
            <h4>{name}</h4>
            <h4 className='whoToFollow__userHandle '>@{handle}</h4>
          </div>

          <div className='whoToFollow__button'>
            <Button variant='outlined'>Follow</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoToFollow;
