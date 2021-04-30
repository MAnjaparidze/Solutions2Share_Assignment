import React, { useEffect, useState } from 'react';
import { Header, Flex, Input, Tree, Button, Popup } from '@fluentui/react-northstar';
import { SearchIcon, TriangleDownIcon, TriangleEndIcon, AcceptIcon } from '@fluentui/react-icons-northstar'

interface NavItems {
  type: Object,
  title: string
}

interface InputChange {
  type: React.SyntheticEvent,
  target: { value: string }
}

interface ITreeItems {
  id: string,
  title: string
}

const titleRenderer = (Component: any, { content, expanded, open, hasSubtree, ...restProps }: any) => (
  <Component expanded={expanded} hasSubtree={hasSubtree} {...restProps}>
    {expanded ? <TriangleDownIcon /> : <TriangleEndIcon />}
    {content}
  </Component>
);

export default function Index() {
  const [treeItems, setTreeItems] = useState<ITreeItems[]>([]);
  const [newEntry, setNewEntry] = useState("");

  useEffect(() => {
    handleGetNavItems();
  }, [])

  const handleChange = (e: InputChange) => {
    setNewEntry(e.target.value);
  }

  const handleFilter = (e: InputChange) => {
    let navItems = JSON.parse(localStorage.getItem('navItems') || "[]");
    let filteredArr = navItems.filter((item: NavItems) => item.title.includes(e.target.value));
    setTreeItems(filteredArr);
  }

  const handleGetNavItems = () => {
    let navItems = JSON.parse(localStorage.getItem('navItems') || "[]");
    setTreeItems(navItems);
  }

  const handleEntrySubmit = () => {
    let newEntryItem: any = {
      id: `navigation-item-${treeItems.length + 1}`,
      title: newEntry
    }
    setTreeItems(prevState => [...prevState, newEntryItem]);
  }

  const handleSave = () => {
    localStorage.setItem('navItems', JSON.stringify(treeItems));
  }

  return (
    <>
      <Header className='header' as='h2' content="Configure Navigation" description={{ className: 'header_descr', as: 'span', content: 'The Mega Menu can be configured here' }} />
      <Header className='header' as='h4' content='Add Navigation Entries' description={{ className: 'header_descr', as: 'span', content: "Here's an example of how a section can be used to group inputs" }} />
      <Flex gap="gap.smaller" className='settings__entry-container'>
        <Popup
          content={<Input id='new-entry-name' placeholder="Type Entry Name" onChange={(e: any) => handleChange(e)} icon={newEntry.length >= 3 ? <AcceptIcon onClick={handleEntrySubmit} /> : null} />}
          trigger={<Button content="+ Add Entry" primary />}
          autoFocus
          onOpenChange={() => setNewEntry("")}
        />
        <Input
          className="settings__entry-search"
          icon={<SearchIcon />}
          onChange={(e: any) => handleFilter(e)}
          placeholder="Search for a navigation entry..."
        />
      </Flex>
      <Tree
        className='settings__content-tree'
        aria-label="Entry Tree"
        items={treeItems}
        renderItemTitle={titleRenderer}
      />
      <Flex className='settings__action-btns' gap="gap.smaller" hAlign='end'>
        <Button content="Discard" secondary />
        <Button content="Save" onClick={handleSave} primary />
      </Flex>
    </>
  )
}
