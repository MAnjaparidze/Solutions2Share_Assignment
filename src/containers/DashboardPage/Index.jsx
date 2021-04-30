import { useState, useEffect } from 'react';
import { Menu, tabListBehavior, Button, MenuIcon, MoreIcon, Flex } from '@fluentui/react-northstar';
import '../../styles/DashboardPage/Main/Styles.css';

import MenuItem1 from '../../components/DashboardPage/MenuItems/MenuItem1/Index';


export default function Index() {
    const [dashActiveNav, setDashActiveNav] = useState(0);
    const [dashNavItems, setDashNavItems] = useState([]);

    useEffect(() => {
        handleGetDashNavItems();
    }, []);

    const handleGetDashNavItems = () => {
        let navItems = JSON.parse(localStorage.getItem('navItems'));
        navItems.map((item, index) => {
            console.log(index);
            item['onClick'] = () => setDashActiveNav(index);
            item['content'] = item.title;
            item['key'] = item.id;
            console.log(item);
        });
        setDashNavItems(navItems);
    }

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
            <Flex gap='gap.small' vAlign='center' className='dashboard__nav-container' style={{ borderBottom: '1px solid #f5f5f5' }}>
                <Button icon={<MenuIcon />} iconOnly title="Menu" />
                <Menu
                    defaultActiveIndex={0}
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