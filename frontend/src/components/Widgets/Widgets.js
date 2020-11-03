import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Trends from '../Trends/Trends';
import WhoToFollow from '../WhoToFollow/WhoToFollow';
import Title from '../Title/Title';
import './Widgets.css';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>

      <div className='widgets__trends'>
        <Trends />
      </div>

      <div className='widgets__follow'>
        <Title title='Who to follow' />
        <hr />

        <WhoToFollow
          src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          name='David Brown'
          handle='davidomega'
        />
        <WhoToFollow
          src='https://images.unsplash.com/photo-1596193318541-2a6d89421dcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          name='John Doe'
          handle='doejohn'
        />
        <WhoToFollow
          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          name='Mary Jane'
          handle='mary'
        />
      </div>
    </div>
  );
};

export default Widgets;
