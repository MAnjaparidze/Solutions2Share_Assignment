import { useState, useEffect } from 'react';
import { Menu, tabListBehavior, Button, MenuIcon, MoreIcon, Flex } from '@fluentui/react-northstar';
import '../../styles/DashboardPage/Main/Styles.css';

import DashPageModel from './Index.model';

import MenuItem1 from '../../components/DashboardPage/MenuItems/MenuItem1/Index';
import MenuItem2 from '../../components/DashboardPage/MenuItems/MenuItem2/Index';
import MenuItem3 from '../../components/DashboardPage/MenuItems/MenuItem3/Index';
import MenuItem4 from '../../components/DashboardPage/MenuItems/MenuItem4/Index';


export default function Index({ isItemsSet }: DashPageModel) {
    const [dashActiveNav, setDashActiveNav] = useState(0);
    const [dashNavItems, setDashNavItems] = useState([]);

    useEffect(() => {
        handleGetDashNavItems();
    }, [isItemsSet]);

    const handleGetDashNavItems = () => {
        let navItems = JSON.parse(localStorage.getItem('navItems') || "[]");
        navItems.map((item, index) => {
            item['onMouseEnter'] = () => setDashActiveNav(index);
            item['content'] = item.title;
            item['key'] = item.id;
        });
        setDashNavItems(navItems);
    }

    const renderSubMenu = () => {
        switch (dashActiveNav) {
            case 0:
                return <MenuItem1 />
            case 1:
                return <MenuItem2 />
            case 2:
                return <MenuItem3 />
            case 3:
                return <MenuItem4 />
            default:
                break;
        }
    }

    return (
        <div className='dashboard__container'>
            <Flex gap='gap.small' vAlign='center' className='dashboard__nav-container' style={{ borderBottom: '1px solid #f5f5f5' }}>
                <Button icon={<MenuIcon />} iconOnly title="Menu" />
                <Menu
                    defaultActiveIndex={0}
                    activeIndex={dashActiveNav}
                    items={dashNavItems}
                    accessibility={tabListBehavior}
                    aria-label="Dashboard Navigation"
                />
                <Button icon={<MoreIcon />} iconOnly title="More" />
            </Flex>
            {renderSubMenu()}
        </div>
    )
}