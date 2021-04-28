import React, { useEffect, useState } from 'react';
import { Header, Flex, Input, Tree, Button, Popup } from '@fluentui/react-northstar';
import { SearchIcon, TriangleDownIcon, TriangleEndIcon, AcceptIcon } from '@fluentui/react-icons-northstar'

const items = [
  {
    id: 'navigation-item-1',
    title: 'Navigation Item 1',
    items: [
      {
        id: 'navigation-item-1-1',
        title: 'Sub Navigation Item 1',
        items: [
          {
            id: 'navigation-item-1-1-1',
            title: 'Sub Sub Navigation Item 1',
            className: 'settings__tree-items'
          },
        ],
      },
    ],
  },
  {
    id: 'navigation-item-2',
    title: 'Navigation Item 2',
    items: [
      {
        id: 'navigation-item-2-1',
        title: 'Sub Navigation Item 1',
      },
    ],
  },
  {
    id: 'navigation-item-3',
    title: 'Navigation Item 3',
  },
  {
    id: 'navigation-item-4',
    title: 'Navigation Item 4',
  },
  {
    id: 'navigation-item-5',
    title: 'Navigation Item 5',
  },
];

const titleRenderer = (Component, { content, expanded, open, hasSubtree, ...restProps }) => (
  <Component expanded={expanded} hasSubtree={hasSubtree} {...restProps}>
    {expanded ? <TriangleDownIcon /> : <TriangleEndIcon />}
    {content}
  </Component>
);

export default function Index() {
  const [treeItems, setTreeItems] = useState([]);
  const [newEntry, setNewEntry] = useState("");
  
    useEffect(() => {
      setTreeItems(items);
    }, [])

  const handleChange = (e) => {
    setNewEntry(e.target.value)
  }

  const handleFilter = (e) => {
    let filteredArr = items.filter(item => item.title.includes(e.target.value));
    setTreeItems(filteredArr);
  }

  const handleEntrySubmit = () => {
    let newEntryItem = {
      id: `navigation-item-${treeItems.length + 1}`,
      title: newEntry
    }
    setTreeItems(prevState => [...prevState, newEntryItem]);
  }

  return (
    <>
      <Header className='header' as='h2' content="Configure Navigation" description={{ className: 'header_descr', as: 'span', content: 'The Mega Menu can be configured here' }} />
      <Header className='header' as='h4' content='Add Navigation Entries' description={{ className: 'header_descr', as: 'span', content: "Here's an example of how a section can be used to group inputs" }} />
      <Flex gap="gap.smaller" className='settings__entry-container'>
        <Popup
          content={<Input id='new-entry-name' placeholder="Type Entry Name" onChange={handleChange} icon={newEntry.length >= 3 ? <AcceptIcon onClick={handleEntrySubmit} />: null} />}
          trigger={<Button content="+ Add Entry" primary />}
          autoFocus
          onOpenChange={() => setNewEntry("")}
        />
        <Input
          className="settings__entry-search"
          icon={<SearchIcon />}
          onChange={handleFilter}
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
        <Button content="Save" primary />
      </Flex>
    </>
  )
}
