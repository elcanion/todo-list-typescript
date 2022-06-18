import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
    item: Item,
    onChange: (id: string, taskName: string, taskIsDone: boolean) => void;
    onDelete: (id: string) => void;
}

export const ListItem = ({ item, onChange, onDelete }: Props) => {
    const timestamp = item.createdAt;
    const date = new Date(timestamp.toDate());
    const fullDate = `
        ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
    `

    return (
        <C.Container isDone={item.isDone}>
            <input 
                type="checkbox" 
                checked={item.isDone}   
                onChange={e => onChange(item.id, item.taskName, e.target.checked)}
            />
            <label>{item.taskName}</label>
            <div>
                <C.DateLabel>created at:{fullDate}</C.DateLabel>
                <button onClick={e => onDelete(item.id)}>❌</button>
            </div>
        </C.Container>
    );
}