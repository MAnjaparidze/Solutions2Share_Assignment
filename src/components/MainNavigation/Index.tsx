import React from 'react';
import { Menu, tabListBehavior, Layout, Flex, Button, SplitButton, Text } from '@fluentui/react-northstar';
import { MoreIcon, InfoIcon, VideoCameraEmphasisIcon } from '@fluentui/react-northstar';
import MainNav from './Index.model';

import IntranetIco from '../../assets/icons/intranet-logo.png';

const Index = ({ mainNavIndex, setMainNavIndex }: MainNav) => {

  const mainNavItems = [
    {
      key: 'dashboard', content: 'Dashboard', style: { padding: '10px 0px 10px 0px', borderWidth: 3 }, onClick: () => setMainNavIndex(0),
    },
    {
      key: 'settings', content: 'Settings', style: { padding: '10px 0px 10px 0px', borderWidth: 3 }, onClick: () => setMainNavIndex(1),
    }
  ]

  const meetItem = (<Flex gap="gap.smaller">
    <VideoCameraEmphasisIcon />
    <Text content="Meet" />
  </Flex>
  )

  let NavStart = (<>
  <img src={IntranetIco} alt="" style={{width: 30}} />
  <Text content="Intranet" weight='bold' size='large' style={{marginLeft: 5, marginRight: 10}} />
  <Menu
    defaultActiveIndex={mainNavIndex}
    items={mainNavItems}
    underlined
    primary
    accessibility={tabListBehavior}
    aria-label="Main Navigatio"
  /></>);

  let NavEnd = (
    <Flex gap="gap.smaller" className='nav-end__container'>
      <Button icon={<MoreIcon />} text iconOnly title="More" />
      <Button icon={<InfoIcon />} text iconOnly title="Info" />
      <SplitButton
        menu={[
          {
            key: 'create-meet',
            content: 'Create new meeting',
          },
          {
            key: 'join-meet',
            content: 'Join a meeting',
          },
        ]}
        button={{
          content: meetItem,
          'aria-roledescription': 'splitbutton',
          'aria-describedby': 'instruction-message-primary-button',
        }}
        secondary
        toggleButton={{
          'aria-label': 'Meet',
        }}
        onMainButtonClick={() => alert('button was clicked')}
      />
    </Flex>
  )

  return (
    <div className='main__nav-container'>
      <Layout start={NavStart} main={<div></div>} style={{ padding: "5px 10px 5px 10px", height: 50 }} end={NavEnd} />
    </div>
  )
}

export default Index;