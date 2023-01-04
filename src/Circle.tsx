import styled from "styled-components"


interface ContainerProps {
    bgColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px;
`;


interface CircleProps {
    bgColor: string;
}

function Circle({bgColor}:CircleProps) {
    return <Container bgColor={bgColor} /> 
}

export default Circle;

interface PlayerShape {
    name: string;
    age: string
}
const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.name}`
sayHello({name:"yeji",age:"19"})
sayHello({name:"yije", age:"20"})