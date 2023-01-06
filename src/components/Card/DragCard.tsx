import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { toDoState } from "../Model/atoms";
import clsx from "clsx";
import styled from "styled-components";


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

  .open {
    display: block;
  }

  .hidden {
      display: none;
  }
`;

const Button = styled.div`

`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    background-color: transparent;

  }
`;

interface IDragCardPrps {
  toDoId: number;
  toDoTask: string;
  index: number;
  boardId: string;
}

export type InputChangeEvent = ChangeEvent<HTMLInputElement>


function DragCard( {toDoId, toDoTask, index, boardId}:IDragCardPrps ) {
  const setToDos = useSetRecoilState(toDoState);
  
  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(toDoTask);

  const onDelete = (index: number) => {
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

    const ref = useRef(null);
    
    const onOpen = () => {
      setEdited(true)
    };
    const onClose = () => {
      setEdited(false)
    };

    const onEdit= (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewText(e.target.value);
      console.log(newText);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        setEdited(!edited);
        setNewText(newText === "" ? toDoTask : newText);

        
        setToDos(allBoards => {
          const todoCopy = [...allBoards[boardId]];
          const todoObj = todoCopy[index];
          
          const newToDo = {
            id: Date.now(),
            text: newText,
          }

          const updateObj = newToDo

          todoCopy.splice(index, 1);
          todoCopy.splice(index, 0, updateObj ) 

            return {
              ...allBoards, 
              [boardId]: todoCopy,
            }; 
        });

      } else return;
    };

    return (
    <Draggable draggableId={toDoId + ""} index={index} >
      {(provided, snapshot) => 
        <Card 
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
        <div ref={ref}>
          {edited ? (
            <Container>
              <input 
                type="text" 
                value={newText} 
                onChange={onEdit}
                onKeyDown={handleKeyDown}
              />
              <Button onClick={onClose}>cancel</Button>
            </Container>
          ) : (
            <Container>
              <div onClick={onOpen}>{toDoTask}</div>
              <Button onClick={() => onDelete(index)}> X </Button>
            </Container>
          )}
          </div>
        </Card>
      }
    </Draggable>
    )

}

export default React.memo(DragCard);