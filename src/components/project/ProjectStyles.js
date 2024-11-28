import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: #f4f4f4;
  border-bottom: 1px solid #ddd;
`;

export const BoardContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

export const Column = styled.div`
  flex: 1;
  background: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  min-height: 300px;
`;

export const Task = styled.div`
  background: white;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: grab;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 40px;
  right: 16px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  list-style: none;
  padding: 8px;
  z-index: 1000;

  li {
    padding: 8px;
    cursor: pointer;

    &:hover {
      background: #f0f0f0;
    }
  }
`;

export const AddTaskInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const AddColumnButton = styled.button`
  padding: 8px 16px;
  margin-top: 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;
