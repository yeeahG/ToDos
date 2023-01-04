import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../../atoms";

// 1) find to do based on id
// 2) Todo 카데고리의 text 3을 바꾸고 싶다면, array[2]가 경로라는걸 알기


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

    const deleteTodo = () => {
        setToDos((oldToDos) => {
        const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
        return [
            ...oldToDos.slice(0, targetIndex),
            ...oldToDos.slice(targetIndex + 1),
        ];
        });
    };
        

    return (
    <li>
        <span>{text}</span>
        {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
         )}
        {category !== Categories.TODO && (
            <button name={Categories.TODO} onClick={onClick}>
            To Do
            </button>
        )}
        {category !== Categories.DONE && (
            <button name={Categories.DONE} onClick={onClick}>
            Done
            </button>
        )}
        <button onClick={deleteTodo}>
            Delete
        </button>


        {/*
        {category !== "TODO" && <button onClick={() => onClick("TODO")}>To Do</button>}
        {category !== "DOING" && <button onClick={() => onClick("DOING")}>-ing</button>}
        {category !== "DONE" && <button onClick={() => onClick("DONE")}>Done</button>}
        */}
    </li>
    );
}

export default ToDo;