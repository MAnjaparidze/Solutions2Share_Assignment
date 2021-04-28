import { FunctionComponent, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainNav from './components/MainNavigation/Index';

import DashboardPage from './containers/DashboardPage/Index';
import SettingsPage from './containers/SettingsPage/Index';
import './App.css';

const App: FunctionComponent = () => {
  const [mainNavIndex, setMainNavIndex] = useState(0);

  const renderMainContent = () => {
    switch (mainNavIndex) {
      case 0:
        return <DashboardPage />;
      case 1:
        return <SettingsPage />;
    }
  }

  return (
    <div className="main__container">
        <MainNav mainNavIndex={mainNavIndex} setMainNavIndex={setMainNavIndex} />
        {renderMainContent()}
    </div>
  );
}

export default App;
