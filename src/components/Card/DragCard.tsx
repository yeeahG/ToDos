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
  toDo: string;
  index: number;
}


function DragCard( {toDo, index}:IDragCardPrps ) {

    return (
    <Draggable draggableId={toDo} index={index} key={toDo} >
        {(provided, snapshot) => 
          <Card 
            isDragging={snapshot.isDragging}
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