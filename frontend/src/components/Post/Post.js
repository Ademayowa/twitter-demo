import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsFillChatFill } from 'react-icons/bs';
import { GiSelfLove } from 'react-icons/gi';
import { HiOutlineUpload } from 'react-icons/hi';
import { IoMdShare } from 'react-icons/io';
import { GoVerified } from 'react-icons/go';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({ src, name, handle, verified, time, text, image }) => {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <img src={src} alt='' />
      </div>

      <div className='post__body'>
        <Link to='#'>
          <div className='text-dark post__info'>
            <h4>{name}</h4>
            <span className='post__badge'>{verified && <GoVerified />}</span>
            <span className='mx-1'>@{handle}</span>
            <span>· {time}</span>
            <BiDotsHorizontalRounded className='post__editIcon' />
          </div>
        </Link>
        <div className='post__userText'>
          <p>{text}</p>
        </div>

        {image ? (
          <img className='post__userImagePost' src={image} alt='' />
        ) : null}
        <div className='post__footerIcons mt-4'>
          <BsFillChatFill />
          <IoMdShare />
          <GiSelfLove />
          <HiOutlineUpload />
        </div>
      </div>
    </div>
  );
};

export default Post;
