import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./JiraBoard.css";

const initialTasks = {
  todo: [
    { id: "1", title: "프로젝트 계획 작성", description: "프로젝트 전체 계획 수립", assignee: "김상후" },
    { id: "2", title: "요구사항 분석", description: "클라이언트 요구사항 정리", assignee: "박수정" },
  ],
  inProgress: [
    { id: "3", title: "UI 디자인", description: "화면 UI 설계 및 디자인", assignee: "이도시" },
    { id: "4", title: "백엔드 개발", description: "API 엔드포인트 구현", assignee: "조수빈" },
  ],
  done: [
    { id: "5", title: "DB 설계", description: "데이터베이스 테이블 설계 완료", assignee: "박수정" },
    { id: "6", title: "테스트 케이스 작성", description: "기본 테스트 케이스 문서 작성 완료", assignee: "김상후" },
  ],
};

export default function JiraBoard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newColumnName, setNewColumnName] = useState("");
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [currentColumn, setCurrentColumn] = useState(null);
  const [newCard, setNewCard] = useState({ title: "", description: "", assignee: "" });

  // 드래그 앤 드롭 핸들러
  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      // 같은 컬럼에서 순서 변경
      const column = tasks[source.droppableId];
      const reorderedTasks = Array.from(column);
      const [movedTask] = reorderedTasks.splice(source.index, 1);
      reorderedTasks.splice(destination.index, 0, movedTask);

      setTasks((prev) => ({
        ...prev,
        [source.droppableId]: reorderedTasks,
      }));
    } else {
      // 다른 컬럼으로 이동
      const sourceColumn = tasks[source.droppableId];
      const destinationColumn = tasks[destination.droppableId];

      const sourceTasks = Array.from(sourceColumn);
      const destinationTasks = Array.from(destinationColumn);

      const [movedTask] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, movedTask);

      setTasks((prev) => ({
        ...prev,
        [source.droppableId]: sourceTasks,
        [destination.droppableId]: destinationTasks,
      }));
    }
  };

  // 새 컬럼 추가
  const handleAddColumn = () => {
    if (!newColumnName.trim()) return;

    setTasks((prev) => ({
      ...prev,
      [newColumnName]: [],
    }));
    setNewColumnName("");
  };

  // 새 작업 추가
  const handleAddCard = () => {
    if (!newCard.title.trim() || !currentColumn) return;

    setTasks((prev) => ({
      ...prev,
      [currentColumn]: [
        ...prev[currentColumn],
        {
          id: Date.now().toString(),
          title: newCard.title,
          description: newCard.description,
          assignee: newCard.assignee,
        },
      ],
    }));
    setNewCard({ title: "", description: "", assignee: "" });
    setIsAddingCard(false);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="jira-board">
          {Object.entries(tasks).map(([status, taskList]) => (
            <div className="column" key={status}>
              <h2>{status}</h2>
              <Droppable droppableId={status}>
                {(provided) => (
                  <div
                    className="task-list"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {taskList.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            className="task-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <small>담당자: {task.assignee}</small>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <button onClick={() => setCurrentColumn(status) || setIsAddingCard(true)}>
                새 작업 추가
              </button>
            </div>
          ))}
        </div>
      </DragDropContext>

      <div className="add-column">
        <input
          type="text"
          placeholder="새 컬럼 이름"
          value={newColumnName}
          onChange={(e) => setNewColumnName(e.target.value)}
        />
        <button onClick={handleAddColumn}>컬럼 추가</button>
      </div>

      {isAddingCard && (
        <div className="add-card-dialog">
          <input
            type="text"
            placeholder="작업 제목"
            value={newCard.title}
            onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="작업 설명"
            value={newCard.description}
            onChange={(e) => setNewCard({ ...newCard, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="담당자"
            value={newCard.assignee}
            onChange={(e) => setNewCard({ ...newCard, assignee: e.target.value })}
          />
          <button onClick={handleAddCard}>작업 추가</button>
        </div>
      )}
    </>
  );
}
