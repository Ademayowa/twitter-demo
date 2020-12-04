import React from 'react';
import { BsSearch } from 'react-icons/bs';
import Trends from '../Trends/Trends';
import WhoToFollow from '../WhoToFollow/WhoToFollow';
import Title from '../Title/Title';
import './Widgets.css';

const Widgets = () => {
  return (
    <div className='col mt-1 widgets'>
      <BsSearch className='widgets__icon' />
      <input
        type='text'
        className='form-control widgets__form'
        placeholder='Search Twitter'
      />

      <div className='widgets__trends'>
        <Trends />
      </div>

      <div className='widgets__follow'>
        <Title title='Who to follow' />
        <hr />
      </div>
      <WhoToFollow
        src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
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
  );
};

export default Widgets;
