import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragCard from "../Card/DragCard";

const Wrapper = styled.div`
  background-color: ${props => props.theme.boardColor};
  padding-top: 20px;
  padding: 20px 10px;
  border-radius: 5px;
  min-height: 300px;
  width: 300px;
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    background-color: inherit;
    color: #FFFACD;
`;

interface IBoardProps {
    toDos: string[];
    boardId: string;
}

function Board( {toDos, boardId}:IBoardProps ) {
    return (
    <Wrapper>
        <Title>{boardId}</Title>
        <Droppable droppableId={boardId}>
        {(provided) => 
            <div 
                ref={provided.innerRef} 
                {...provided.droppableProps}
            >
                {toDos.map((toDo, index) => (
                <DragCard key={toDo} toDo={toDo} index={index}/>
                )
                )}
                {provided.placeholder}
            </div>
        }
    </Droppable>
    </Wrapper>
    )
}

export default Board;