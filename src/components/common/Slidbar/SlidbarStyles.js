import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
  width: ${(props) => (props.isExpanded ? '200px' : '60px')};
  transition: width 0.3s ease;
  overflow: hidden;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  height: 100vh; /* 전체 높이 *
`;

export const SidebarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex-grow: 1;
`;

export const SidebarItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px; 
  margin-right: ${(props) => (props.isExpanded ? '10px' : '0')};
  transition: margin 0.3s ease;
`;

export const Text = styled.span`
  opacity: ${(props) => (props.isExpanded ? '1' : '0')};
  transition: opacity 0.3s ease;
  margin-left: 10px;
`;

export const Button = styled.button`
    padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-top: auto; /* 자동으로 아래로 밀리게 설정 */
  border-radius: 4px;
  text-align: center;
  &:hover {
    background-color: #0056b3;
  }
`;
