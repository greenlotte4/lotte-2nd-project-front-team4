/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import {
  SidebarContainer,
  SidebarList,
  SidebarItem,
  Icon,
  Text,
  Button,
} from './SlidbarStyles';

const Sidebar = ({ items, userButtonText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  return (
    <SidebarContainer
      isExpanded={isExpanded}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SidebarList>
        {items.map((item, index) => (
          <SidebarItem key={index}>
            <a
              href={item.link}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Icon src={item.icon} alt={item.text} isExpanded={isExpanded} />
              <Text isExpanded={isExpanded}>{item.text}</Text>
            </a>
          </SidebarItem>
        ))}
      </SidebarList>
      <Button>{userButtonText}</Button>
    </SidebarContainer>
  );
};

export default Sidebar;
