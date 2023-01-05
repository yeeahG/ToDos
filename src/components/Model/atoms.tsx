import { atom, selector } from "recoil";
import { loadTodos } from "./localAtoms";

export interface ITodo {
    id: number;
    text: string;
}

export interface IToDoState {
    [key: string]: ITodo[];
}


export const minuteState = atom({
    key: "minutes",
    default: 0,
})

export const defaultTodos: IToDoState = {
    Todos: [],
    Doing: [],
    Done: [],
};

export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: loadTodos() ?? defaultTodos,
})