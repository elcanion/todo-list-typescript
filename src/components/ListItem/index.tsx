import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
    item: Item,
    onChange: (id: number, taskIsDone: boolean) => void;
}

export const ListItem = ({ item, onChange }: Props) => {

    return (
        <C.Container isDone={item.isDone}>
            <input 
                type="checkbox" 
                checked={item.isDone}   
                onChange={e => onChange(item.id, e.target.checked)}
            />
            <label>{item.taskName}</label>
        </C.Container>
    );
}