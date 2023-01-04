import { atom } from "recoil";

export interface IToDo {
    category: "TODO"|"DOING"|"DONE";
    text: string;
    id: number;
}

export const toDoState = atom<IToDo[]>({
    key:"toDo",
    default: [],
})