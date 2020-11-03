import React from 'react';
import Feed from './components/Feed/Feed';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets';

const App = () => {
  return (
    <>
      <div className='app'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </>
  );
};

export default App;
