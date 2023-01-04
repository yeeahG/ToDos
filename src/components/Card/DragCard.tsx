import React from "react";
import { Draggable } from "react-beautiful-dnd";
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
  margin-bottom: 5px
`;

interface IDragCardPrps {
  toDoId: number;
  toDoTask: string;
  index: number;
}


function DragCard( {toDoId, toDoTask, index}:IDragCardPrps ) {

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
          </Card>
        }
    </Draggable>
    )

}

export default React.memo(DragCard);