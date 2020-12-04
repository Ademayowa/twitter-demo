import React from 'react';
import {
  AiFillPicture,
  AiOutlineFileGif,
  AiOutlineSmile,
  AiOutlineCalendar,
} from 'react-icons/ai';
import { GoGraph } from 'react-icons/go';
import './TweetBox.css';

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <img
            src='https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            alt=''
            style={{
              width: '50px',
              borderRadius: '40px',
              height: '50px',
              objectFit: 'cover',
            }}
          />
          <input type='text' placeholder={`What's happening?`} />
        </div>

        <div className='tweetBox__bottom'>
          <div className='tweetBox__icons'>
            <AiFillPicture />
            <AiOutlineFileGif />
            <GoGraph />
            <AiOutlineSmile />
            <AiOutlineCalendar />
          </div>
          <button type='submit' className='btn btn-primary btn-sm'>
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
