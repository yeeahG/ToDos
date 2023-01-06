import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { useRecoilState, useRecoilValue } from "recoil";
import { saveTodos } from "./components/Model/localAtoms";
import { toDoState } from "./components/Model/atoms";
import DragCard from "./components/Card/DragCard";
import Board from "./components/Board/Board";
import AddBoard from "./components/Board/AddBoard";
import styled from "styled-components";

const BigBox = styled.div`
  width: 100%;
  position: relative;

`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 30px 50px;
  color: #2F4F4F;
`

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
`;

const Boards = styled.div`
  display: flex;
  gap: 10px;
  width: auto;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10px;
  flex-wrap: wrap;
`;


function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const [boardTitle, setTitle] = useState<any | null>(null);

  const onDragEnd = (info:DropResult) => {
    const {source, destination, draggableId} = info;
    console.log(info);
    
    if(!destination) return;

    if(source.droppableId === "Boards") {
      setToDos(allBoards => {
        const boardList = Object.keys(allBoards);
        const boardObj = boardList[source.index];

        boardList.splice(source.index, 1);
        boardList.splice(destination.index, 0, boardObj);

        let boards= {};
        boardList.map(board => {
          boards = {
            ...boards, 
            [board]: allBoards[board],
          };
        })
        return {...boards};
      });
    } else {
      if(destination?.droppableId === source.droppableId) {
        setToDos(allBoards => {
          const todoCopy = [...allBoards[source.droppableId]];
          const todoObj = todoCopy[source.index];

          todoCopy.splice(source.index, 1);
          todoCopy.splice(destination?.index, 0, todoObj )
            return {
              ...allBoards, 
              [source.droppableId]: todoCopy,
            }; 
        });
      }

      if(destination?.droppableId !== source.droppableId) {
        setToDos( (allBoards) => {
          const sourceBCopy = [...allBoards[source.droppableId]];
          const todoObj = sourceBCopy[source.index];
          const destBCopy = [...allBoards[destination.droppableId]];

          sourceBCopy.splice(source.index, 1);
          destBCopy.splice(destination?.index, 0, todoObj );
          return {
            ...allBoards, 
            [source.droppableId]: sourceBCopy,
            [destination.droppableId]: destBCopy,
          }; 
        })
      };
    }  
  };

  useEffect(() => {
    saveTodos(toDos);
  }, [toDos]);


  return (
    <BigBox>
      <TitleBox>
        <Title>Write my To Do</Title>
        <AddBoard />
      </TitleBox>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Droppable 
            droppableId="Boards"
            direction="horizontal" 
            type="BOARD"
          >
            {provided => (
              <Boards ref={provided.innerRef} {...provided.droppableProps}>
                {Object.keys(toDos).map(
                    (boardId, index) => (
                      <Board 
                        boardId={boardId} 
                        key={boardId}
                        toDos={toDos[boardId]}
                        index={index}
                      />
                    )
                  )}
                {provided.placeholder}
              </Boards>
            )}
          </Droppable>

        </Wrapper>
      </DragDropContext>
    </BigBox>
  );
}

export default App;