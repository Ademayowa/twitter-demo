import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeCircle, BiEnvelope } from 'react-icons/bi';
import { BsHash, BsBookmark, BsCardText, BsPerson } from 'react-icons/bs';
import { IoMdNotificationsOutline, IoLogoTwitter } from 'react-icons/io';
import { CgMoreO } from 'react-icons/cg';
import SidebarOption from '../SidebarOption/SidebarOption';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link>
        <IoLogoTwitter className='sidebar__twitterIcon' />
      </Link>
      <SidebarOption text='Home' Icon={BiHomeCircle} active />
      <SidebarOption text='Explore' Icon={BsHash} />
      <SidebarOption text='Notifications' Icon={IoMdNotificationsOutline} />
      <SidebarOption text='Messages' Icon={BiEnvelope} />
      <SidebarOption text='Bookmarks' Icon={BsBookmark} />
      <SidebarOption text='Lists' Icon={BsCardText} />
      <SidebarOption text='Profile' Icon={BsPerson} />
      <SidebarOption text='More' Icon={CgMoreO} />
      <button className='btn btn-primary btn-block sidebar__tweet'>
        Tweet
      </button>
    </div>
  );
};

export default Sidebar;
