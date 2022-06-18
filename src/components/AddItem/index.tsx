import { useState, KeyboardEvent } from "react";
import * as C from "./styles";

type Props = {
    onEnter: (taskName: string) => void;
}

export const AddItem = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState("");

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === "Enter" && inputText !== "") {
            onEnter(inputText);
            setInputText("");
        }
    }

    return (
        <C.Container>
            <div className="plus">+</div>
            <input 
                type="text"
                placeholder="New item (press enter to confirm)"
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}