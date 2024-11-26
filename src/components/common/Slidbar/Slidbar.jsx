/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import {
  SidebarContainer,
  SidebarList,
  SidebarItem,
  IconWrapper, // 스타일 컴포넌트를 추가
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
              <IconWrapper>{item.icon}</IconWrapper>
              <Text isExpanded={isExpanded}>{item.text} <style marginleft /></Text>
            </a>
          </SidebarItem>
        ))}
      </SidebarList>
      <Button>{userButtonText}</Button>
    </SidebarContainer>
  );
};

export default Sidebar;
