import { atom, selector } from "recoil";

export interface IToDo {
    category: "TODO"|"DOING"|"DONE";
    text: string;
    id: number;
}

export const toDoState = atom<IToDo[]>({
    key:"toDo",
    default: [],
})

export const toDoSelector = selector({
    key: "toDoSelectore",
    get: ({get}) => {
        const toDos = get(toDoState)
        return [
            toDos.filter(toDo => toDo.category === "TODO"),
            toDos.filter(toDo => toDo.category === "DOING"),
            toDos.filter(toDo => toDo.category === "DONE"),
        ];
    }
}) 