import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import { Button } from '@material-ui/core';
import SidebarOption from '../SidebarOption/SidebarOption';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <TwitterIcon className='sidebar__twitterIcon' />
      <SidebarOption active Icon={HomeIcon} text='Home' />
      <SidebarOption Icon={AcUnitIcon} text='Explore' />
      <SidebarOption Icon={NotificationsNoneIcon} text='Notifications' />
      <SidebarOption Icon={MailOutlineIcon} text='Messages' />
      <SidebarOption Icon={PermIdentityIcon} text='Profile' />
      <SidebarOption Icon={BlurCircularIcon} text='More' />
      <Button variant='outlined' className='sidebar__tweet'>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
