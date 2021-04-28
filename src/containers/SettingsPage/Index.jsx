import React, { useState, useEffect } from 'react';
import { Header, Menu, Text, OpenOutsideIcon } from '@fluentui/react-northstar';
import '../../styles/SettingsPage/Main/style.css';

import SettingsContentItem1 from '../../components/SettingsPage/SettingsContentItems/Index';

export default function Index() {
    const [activeSubMenu, setActiveSubMenu] = useState(0);

    const renderActiveSubMenu = () => {
        switch (activeSubMenu) {
            case 0:
                return <SettingsContentItem1 />;
            case 1:
                return <></>
            default:
                break;
        }
    }

    const settingsItems = [
        {
            key: 'settings-step-1',
            content: <> <OpenOutsideIcon /><Text content="Step 1" /></>,
            style: { padding: 0 },
            onClick: () => setActiveSubMenu(0)
        },
        {
            key: 'settings-step-2',
            content: <> <OpenOutsideIcon /> <Text content="Step 2" /></>,
            style: { padding: 0 },
            onClick: () => setActiveSubMenu(1)
        },
        {
            key: 'settings-step-3',
            content: <> <OpenOutsideIcon /> <Text content="Step 3" /></>,
            style: { padding: 0 },
            onClick: () => setActiveSubMenu(2)
        },
    ];
    const administrationItems = [
        {
            key: 'licensing',
            content: <> <OpenOutsideIcon /><Text content="Licensing" /></>,
            style: { padding: 0 },
            disabled: true,
            onClick: () => setActiveSubMenu(3)
        },
        {
            key: 'administrators',
            content: <> <OpenOutsideIcon /><Text content="Administrators" /></>,
            style: { padding: 0 },
            disabled: true,
            onClick: () => setActiveSubMenu(4)
        },

    ];

    return (
        <div className='settings__container'>
            <div className="settings__menu-container">
                <Header as='h2' content="Settings" />
                <div className="divider_horizontal"></div>
                <div className="settings__menu-item">
                    <div className="settings__menu-header">
                        <div className="settings__menu-ball">1</div>
                        <Header as='h4' content="Settings" />
                    </div>
                    <Menu defaultActiveIndex={activeSubMenu} className="settings__menu-body" style={{ border: 'none', width: "100%", paddingLeft: 30 }} items={settingsItems} vertical />
                </div>
                <div className="settings__menu-item">
                    <div className="settings__menu-header">
                        <div className="settings__menu-ball">2</div>
                        <Header as='h4' content="Administration" />
                    </div>
                    <Menu className="settings__menu-body" style={{ border: 'none', width: "100%", paddingLeft: 30 }} items={administrationItems} vertical />
                </div>
            </div>
            <div className="divider_vertical"></div>
            <div className='settings__menu-content'>
                {renderActiveSubMenu()}
            </div>
        </div>
    )
}
