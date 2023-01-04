import { atom, selector } from "recoil";

export const minuteState = atom({
    key: "minutes",
    default: 0,
})

export const toDoState = atom({
    key: "toDo",
    default: ["a", "b", "c", "d", "e", "f"],
})