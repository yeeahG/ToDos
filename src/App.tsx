import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoState } from "./components/Model/atoms";
import DragCard from "./components/Card/DragCard";
import Board from "./components/Board/Board";

const Wrapper = styled.div`
  display: flex;
  width: 90vw;
  height: 100vh;
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
    console.log(info);

    const {source, destination, draggableId} = info;
    if(!destination) return;

    if(destination?.droppableId === source.droppableId) {
      setToDos(allBoards => {
        const todoCopy = [...allBoards[source.droppableId]];

        todoCopy.splice(source.index, 1); //delete item
        todoCopy.splice(destination?.index, 0, draggableId ) //item 돌려놓기
          return {
            ...allBoards, 
            [source.droppableId]: todoCopy,
          }; 
        });
    }

    if(destination?.droppableId !== source.droppableId) {
      setToDos( allBoards => {
        const sourceBCopy = [...allBoards[source.droppableId]];
        const destBCopy = [...allBoards[destination.droppableId]];

        sourceBCopy.splice(source.index, 1); //delete item
        destBCopy.splice(destination?.index, 0, draggableId ) //item 돌려놓기
        return {
          ...allBoards, 
          [source.droppableId]: sourceBCopy,
          [destination.droppableId]: destBCopy,
        }; 
      })
    }
    
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map(
              (boardId) => (
                <Board 
                  boardId={boardId} 
                  key={boardId}
                  toDos={toDos[boardId]}
                />
              )
            )}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;