import { FunctionComponent, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainNav from './components/MainNavigation/Index';

import DashboardPage from './containers/DashboardPage/Index';
import SettingsPage from './containers/SettingsPage/Index';
import './App.css';

const items = [
  {
    id: 'menu-item-1',
    title: 'Menu Items 1',
    items: [
      {
        id: 'menu-item-1-1',
        title: 'Sub Menu Items 1',
        items: [
          {
            id: 'menu-item-1-1-1',
            title: 'Sub Sub Menu Items 1',
          },
        ],
      },
    ],
  },
  {
    id: 'menu-item-2',
    title: 'Menu Items 2',
    items: [
      {
        id: 'menu-item-2-1',
        title: 'Sub Menu Items 1',
      },
    ],
  },
  {
    id: 'menu-item-3',
    title: 'Menu Items 3',
  },
  {
    id: 'menu-item-4',
    title: 'Menu Items 4',
  },
  {
    id: 'menu-item-5',
    title: 'Menu Items 5',
  },
]

const App: FunctionComponent = () => {
  const [mainNavIndex, setMainNavIndex] = useState(0);
  const [isItemsSet, setItemsSset] = useState(false);

  useEffect(() => {
    handleNavItemUpload();
  }, [])


  const handleNavItemUpload = () => {
    const asyncLocalStorage = {
      setItem: function (key, value) {
        return Promise.resolve().then(function () {
          localStorage.setItem(key, value);
        });
      }
    }

    if (localStorage.getItem('navItems') === null) asyncLocalStorage.setItem('navItems', JSON.stringify(items)).then(() => { setItemsSset(true) });
  }

  const renderMainContent = () => {
    switch (mainNavIndex) {
      case 0:
        return <DashboardPage isItemsSet={isItemsSet} />;
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
