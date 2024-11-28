import React, { useState } from "react";
import { FaHome, FaUsers } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";
import { BiBookBookmark } from "react-icons/bi";
import { RiProjectorLine } from "react-icons/ri";
import { MdChat } from "react-icons/md";
import Sidebar from "@/components/common/Slidbar/Slidbar";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Container,
  MainContent,
  Header,
  BoardContainer,
  Column,
  Task,
  DropdownMenu,
  AddTaskInput,
  AddColumnButton,
} from "./ProjectStyles";

const initialTasks = {
  todo: ["Task 1", "Task 2", "Task 3"],
  inProgress: ["Task 4"],
  done: ["Task 5"],
};

const ProjectView = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newColumnName, setNewColumnName] = useState("");

  const addColumn = () => {
    if (newColumnName.trim()) {
      setTasks((prev) => ({
        ...prev,
        [newColumnName.trim()]: [],
      }));
      setNewColumnName("");
    }
  };

  return (
    <Container>
      <Sidebar
        items={[
            { text: "홈", link: "/main", icon: <FaHome /> },
            { text: "게시판", link: "/board", icon: <AiOutlineMail /> },
            { text: "캘린더", link: "/calendar", icon: <BsCalendar /> },
            { text: "자료실", link: "/drive", icon: <BiBookBookmark /> },
            { text: "커뮤니티", link: "/community", icon: <FaUsers /> },
            { text: "프로젝트", link: "/project", icon: <RiProjectorLine /> },
            { text: "채팅", link: "/chat", icon: <MdChat /> },
        ]}
        userButtonText="사용자"
      />
      <MainContent>
        <Header>
          <h1>Project Management</h1>
        </Header>
        <DragDropContext>
          <BoardContainer>
            {Object.entries(tasks).map(([key, items]) => (
              <Droppable key={key} droppableId={key}>
                {(provided) => (
                  <Column ref={provided.innerRef} {...provided.droppableProps}>
                    <h3>{key.toUpperCase()}</h3>
                    {items.map((task, index) => (
                      <Draggable key={task} draggableId={task} index={index}>
                        {(provided) => (
                          <Task
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {task}
                          </Task>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Column>
                )}
              </Droppable>
            ))}
          </BoardContainer>
        </DragDropContext>
        <AddTaskInput
          type="text"
          placeholder="새로운 컬럼 이름"
          value={newColumnName}
          onChange={(e) => setNewColumnName(e.target.value)}
        />
        <AddColumnButton onClick={addColumn}>컬럼 추가</AddColumnButton>
      </MainContent>
    </Container>
  );
};

export default ProjectView;
