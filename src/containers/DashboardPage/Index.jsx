import { useState } from 'react';
import { Menu, tabListBehavior, MenuIcon, MoreIcon} from '@fluentui/react-northstar';
import '../../styles/DashboardPage/Main/Styles.css';
import MenuItem1 from '../../components/DashboardPage/MenuItems/MenuItem1/Index';


export default function Index() {
    const [dashActiveNav, setDashActiveNav] = useState(0);

    const dashNavItems = [
        {
            key: 'dashMenuIcon', content: <MenuIcon />,
        },
        {
            key: 'menuItem1', tabIndex: 0, content: 'Menu Item 1', onClick: () => setDashActiveNav(0), styles: { boxShadow: 'none' }
        },
        {
            key: 'menuItem2', tabIndex: 0, content: 'Menu Item 2', onClick: () => setDashActiveNav(1),
        },
        {
            key: 'menuItem3', tabIndex: 0, content: 'Menu Item 3', onClick: () => setDashActiveNav(2),
        },
        {
            key: 'menuItem4', tabIndex: 0, content: 'Menu Item 4', onClick: () => setDashActiveNav(3),
        },
        {
            key: 'menuItem5', tabIndex: 0, content: 'Menu Item 5', onClick: () => setDashActiveNav(4),
        },
        {
            key: 'dashMoreIcon', content: <MoreIcon />
        }
    ]

    const renderSubMenu = () => {
        switch (dashActiveNav) {
            case 0:
                return <MenuItem1 />
            default:
                break;
        }
    }

    return (
        <div className='dashboard__container'>
            <Menu
                defaultActiveIndex={1}
                items={dashNavItems}
                className="dashboard__nav-container"
                accessibility={tabListBehavior}
                aria-label="Dashboard Navigation"
            />
            {renderSubMenu()}
        </div>
    )
}