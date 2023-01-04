import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;

`;

const Board = styled.div`
  background-color: ${props => props.theme.boardColor};
  padding-top: 30px;
  padding: 20px 10px;
  border-radius: 5px;
  min-height: 200px;
`;

const Card = styled.div`
  background-color: ${props => props.theme.cardColor};
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 5px
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState)
  const onDragEnd = ({draggableId, destination, source}:DropResult) => {
    if(!destination) return;
    setToDos(oldToDos => {
      const copyToDos = [...oldToDos]; 
      copyToDos.splice(source.index, 1); //delete item
      copyToDos.splice(destination?.index, 0, draggableId ) //item 돌려놓기

      return copyToDos;
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => 
              <Board 
                {...provided.droppableProps} 
                ref={provided.innerRef}
              >
                {toDos.map((toDo, index) => (
                  <Draggable draggableId={toDo} index={index} key={toDo} >
                    {(provided) => 
                      <Card 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {toDo}
                      </Card>
                    }
                  </Draggable>
                  )
                )}
                {provided.placeholder}
              </Board>
            }
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;