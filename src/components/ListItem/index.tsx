import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
    item: Item,
    onChange: (id: string, taskName: string, taskIsDone: boolean) => void;
    onDelete: (id: string) => void;
}

export const ListItem = ({ item, onChange, onDelete }: Props) => {

    return (
        <C.Container isDone={item.isDone}>
            <input 
                type="checkbox" 
                checked={item.isDone}   
                onChange={e => onChange(item.id, item.taskName, e.target.checked)}
            />
            <label>{item.taskName}</label>
            <button onClick={e => onDelete(item.id)}>❌</button>
        </C.Container>
    );
}