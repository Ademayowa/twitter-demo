import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feed from './components/Feed/Feed';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets';

const App = () => {
  return (
    <Router>
      <Switch>
        <div className='col-sm-12 app'>
          <Route component={Sidebar} />
          <Route component={Feed} />
          <Route component={Widgets} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
