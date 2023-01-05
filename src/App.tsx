import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoState } from "./components/Model/atoms";
import DragCard from "./components/Card/DragCard";
import Board from "./components/Board/Board";
import { useEffect } from "react";
import { saveTodos } from "./components/Model/localAtoms";

const BigBox = styled.div`
  width: 100%;
  padding-top: 20px;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10px;
`;


function App() {
  const [toDos, setToDos] = useRecoilState(toDoState)
  const onDragEnd = (info:DropResult) => {
    const {source, destination, draggableId} = info;
    console.log(info);
    
    if(!destination) return;

    if(destination?.droppableId === source.droppableId) {
      setToDos(allBoards => {
        const todoCopy = [...allBoards[source.droppableId]];
        const todoObj = todoCopy[source.index];

        todoCopy.splice(source.index, 1); //delete item
        todoCopy.splice(destination?.index, 0, todoObj ) //item 돌려놓기
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

        sourceBCopy.splice(source.index, 1); //delete item
        destBCopy.splice(destination?.index, 0, todoObj ) //item 돌려놓기
        return {
          ...allBoards, 
          [source.droppableId]: sourceBCopy,
          [destination.droppableId]: destBCopy,
        }; 
      })
    };


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
      return;
    }
    
  };

  useEffect(() => {
    saveTodos(toDos);
  }, [toDos]);


  return (
    <BigBox>
      <h1>Write my To Do</h1>
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
            )
            }
          </Droppable>
        </Wrapper>
      </DragDropContext>
    </BigBox>
  );
}

export default App;