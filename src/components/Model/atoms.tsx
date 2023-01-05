import { atom, selector } from "recoil";
import { loadTodos } from "./localAtoms";

export interface ITodo {
    id: number;
    text: string;
}

export interface IToDoState {
    [key: string]: ITodo[];
}

export const defaultTodos: IToDoState = {
    TODO: [],
    DOING: [],
    DONE: [],
};

export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: loadTodos() ?? defaultTodos,
})