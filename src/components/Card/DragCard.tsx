import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../Model/atoms";


const Card = styled.div<{isDragging:boolean}>`
  background-color: ${props => 
    props.isDragging ? "#F08080" : props.theme.cardColor
  };
  box-shadow: ${props => 
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"}
  }
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`

`;

interface IDragCardPrps {
  toDoId: number;
  toDoTask: string;
  index: number;
  boardId: string;
}


function DragCard( {toDoId, toDoTask, index, boardId}:IDragCardPrps ) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (index: number) => {
    console.log("Click", index, boardId);

      setToDos(allBoards => {
        const todoCopy = [...allBoards[boardId]];
        const todoObj = todoCopy[index];

        todoCopy.splice(index, 1);

          return {
            ...allBoards, 
            [boardId]: todoCopy,
          }; 
      });

  }

    return (
    <Draggable draggableId={toDoId + ""} index={index} >
      {(provided, snapshot) => 
        <Card 
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {toDoTask}
          <Button onClick={() => onClick(index)}>
            X
          </Button>
        </Card>
      }
    </Draggable>
    )

}

export default React.memo(DragCard);