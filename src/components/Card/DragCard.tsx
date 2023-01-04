import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";


const Card = styled.div`
  background-color: ${props => props.theme.cardColor};
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 5px
`;

interface IDragCardPrps {
  toDo: string;
  index: number;
}


function DragCard( {toDo, index}:IDragCardPrps ) {

    return (
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

}

export default React.memo(DragCard);