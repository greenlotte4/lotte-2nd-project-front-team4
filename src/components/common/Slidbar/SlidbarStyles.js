// src/components/Sidebar/SidebarStyles.js
import styled from '@emotion/styled';

export const SidebarContainer = styled.nav`
  width: ${(props) => (props.isExpanded ? '200px' : '60px')};
  height: 100vh;
  background-color: #00a1b9;
  overflow: hidden;
  transition: width 0.3s ease;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarItem = styled.li`
  margin: 10px 0;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  display: block;
  opacity: ${(props) => (props.isExpanded ? '1' : '0')};
  transition: opacity 0.3s ease;
`;

export const Text = styled.span`
  display: ${(props) => (props.isExpanded ? 'inline-block' : 'none')};
  margin-left: 10px;
  font-size: 14px;
  color: white;
`;

export const Button = styled.button`
  margin-top: auto;
  padding: 10px;
  background-color: #007c92;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
`;
