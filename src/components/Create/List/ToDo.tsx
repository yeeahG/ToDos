import { IToDo } from "../../atoms";

function ToDo( {text, category }:IToDo ) {
    //To do category 변경
    const onClick = (newCategory: IToDo["category"]) => {
        console.log("I wanna ", newCategory);
        
    }

    return (
    <li>
        <span>{text}</span>
        {category !== "TODO" && <button onClick={() => onClick("TODO")}>To Do</button>}
        {category !== "DOING" && <button onClick={() => onClick("DOING")}>-ing</button>}
        {category !== "DONE" && <button onClick={() => onClick("DONE")}>Done</button>}
    </li>
    );
}

export default ToDo;