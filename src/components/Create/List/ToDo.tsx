import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../../atoms";


// [
//     {
//         "text": "5",
//         "category": "TODO",
//         "id": 1672829869462
//     },
//     {
//         "text": "4",
//         "category": "TODO",
//         "id": 1672829869216
//     },
//     {
//         "text": "3",
//         "category": "TODO",
//         "id": 1672829868968
// ]

// 1) find to do based on id
// 2) Todo 카데고리의 text 3을 바꾸고 싶다면, array[2]가 경로라는걸 알기

// const food = ["pizza", "mango", "strawberry", "meat"];
// const front = ["pizza"];
// const back = ["strawberry", "meat"];
// const lastPart = [...front, "굴", ...back]

function ToDo( {text, category, id }:IToDo ) {
    //To do category 변경
    /*
    const onClick = (newCategory: IToDo["category"]) => {
        console.log("I wanna ", newCategory);
    }*/
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget:{name}} = event;
        setToDos(oldToDos => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const oldToDo = oldToDos[targetIndex];
            const newToDo = {text, id, category:name as any};
            //console.log(oldToDo, newToDo);
            
            return [
                ...oldToDos.slice(0,targetIndex), 
                newToDo, 
                ...oldToDos.slice(targetIndex+1)
            ];
        })
    }

    const setToDos = useSetRecoilState(toDoState);

    return (
    <li>
        <span>{text}</span>
        {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
         )}
        {category !== "TODO" && (
            <button name="TODO" onClick={onClick}>
            To Do
            </button>
        )}
        {category !== "DONE" && (
            <button name="DONE" onClick={onClick}>
            Done
            </button>
        )}


        {/*
        {category !== "TODO" && <button onClick={() => onClick("TODO")}>To Do</button>}
        {category !== "DOING" && <button onClick={() => onClick("DOING")}>-ing</button>}
        {category !== "DONE" && <button onClick={() => onClick("DONE")}>Done</button>}
        */}
    </li>
    );
}

export default ToDo;