import React from "react";
import { IToDo } from "../../atoms";

function ToDo( {text, category, id }:IToDo ) {
    //To do category 변경
    /*
    const onClick = (newCategory: IToDo["category"]) => {
        console.log("I wanna ", newCategory);
    }*/
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget:{name}} = event;
    }

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