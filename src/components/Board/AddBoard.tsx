import clsx from "clsx";
import { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from 'recoil';
import {toDoState} from '../Model/atoms';
import { useForm, SubmitHandler } from "react-hook-form";

const AddContainer = styled.div`
    min-width: 100px;
    max-width: 300px;
    height: 50px;
    margin: 50px 50px 20px 50px;
    padding: 10px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;

    button {
        background-color: transparent;
        border: none;
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
        color: #FFFACD;
        margin: 10px;
    }

    form {
        border: none;
        border-radius: 5px 5px 0 0;
        width: 100%;
        height: auto;
        border: none;

        input {
            overflow-x: auto;
        }
    }

    .open {
        display: block;
    }

    .hidden {
        display: none;
    }
`;

interface NewBoardType {
    newboard?: string;
}

function AddBoard() {
    const [open, setOpen] = useState(false);
    const [toDos, setToDos] = useRecoilState(toDoState)
    const { register, setValue, handleSubmit } = useForm();

    const onOpen = () => {
        console.log("open");
        setOpen(true)
    };
    const onClose = () => {
        setOpen(false)
    };

    const onValid: SubmitHandler<NewBoardType> = ({ newboard }) => {
        setToDos({
            ...toDos,
            [newboard + ""]: []
        });
        setValue("newboard","")
    };

    return (
        <AddContainer>
            {!open && <button onClick={onOpen}>+ Add new List</button>}
            <form
                className={clsx(open ? 'open' : 'hidden')}
                onSubmit={handleSubmit(onValid)}
            >
                <input 
                    placeholder="새로운 List를 입력해주세요"
                    type={'text'}
                    {...register("newboard",{required: true})}
                />
                <button onClick={onClose}>X</button>
            </form>
        </AddContainer>
    );
}
export default AddBoard;