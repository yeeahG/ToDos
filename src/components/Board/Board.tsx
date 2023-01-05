import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import DragCard from "../Card/DragCard";
import { ITodo, toDoState } from "../Model/atoms";

const Wrapper = styled.div<{isDragging: boolean}>`
  background-color: ${props => props.theme.boardColor};
  padding-top: 20px;
  padding: 20px 10px;
  border-radius: 5px;
  min-height: 300px;
  width: 300px;
  disply: flex;
  flex-direction: column;
`;

const Header = styled.div<{ isDragging: boolean }>`
  padding-top: 10px;
  border-radius: 5px 5px 0 0;
  position: relative;
  justify-content: space-between;
`;

const Button = styled.div`

`;

const Title = styled.h2`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    background-color: inherit;
    color: #FFFACD;
`;

interface IBoxProps {
    isDraggingOver: boolean;
    isDraggingFromThis: boolean;
}

const Box = styled.div<IBoxProps>`
    padding: 5px;
    border-radius: 10px;
    background-color: ${props => 
        props.isDraggingOver ? 
            "#2F4F4F" 
            : 
                props.isDraggingFromThis ? "#DCDCDC" : 
            "transparent"
        };
    flex-grow: 1;
    transition: background-color 0.3s ease-in-out;
`;

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;


interface IBoardProps {
    toDos: ITodo[];
    boardId: string;
    index: number;
}

interface IForm {
    toDo: string;
}

function Board( {toDos, boardId, index}:IBoardProps ) {
    const setToDos = useSetRecoilState(toDoState)

    const {register, setValue, handleSubmit} = useForm<IForm>();
    const onValid = ({toDo}:IForm) => {
        const newToDo = {
            id: Date.now(),
            text: toDo,
        }
        setToDos(allBoards => {
            return {
                ...allBoards,
                [boardId]: [
                    ...allBoards[boardId],
                    newToDo,
                ]
            }
        })
        setValue("toDo", "");
    }

    const onClick = (boardId: string) => {
        //console.log("Click");

    }

    return (
    <Draggable draggableId={boardId} index={index}>
        {(provided, snapshot) => (
        <Wrapper
            ref={provided.innerRef}
            key={index}
            isDragging={snapshot.isDragging}
            {...provided.draggableProps}
        >
          <Header
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            <Button onClick={() => onClick(boardId)}>
                X
            </Button>
            <Title>{boardId}</Title>
            <Form onSubmit={handleSubmit(onValid)}>
                <input 
                    type="text" 
                    {...register("toDo", { required: true })}
                    placeholder={`새로운 ${boardId}를 입력하세요`}
                />
            </Form>
            <Droppable droppableId={boardId}>
            {(provided, snapshot) => 
                <Box 
                    isDraggingOver={snapshot.isDraggingOver}
                    isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
                    ref={provided.innerRef} 
                    {...provided.droppableProps}
                >
                    {toDos.map((toDo, index) => (
                    <DragCard 
                        key={toDo.id} 
                        toDoId={toDo.id} 
                        index={index}
                        toDoTask={toDo.text}
                    />
                    )
                    )}
                    {provided.placeholder}
                </Box>
            }
            </Droppable>
            </Header>
        </Wrapper>
        )}
    </Draggable>
    )
}

export default React.memo(Board);