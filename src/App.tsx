import * as C from "./App.styles";
import { useState } from "react";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Drink water",
      isDone: false,
    },
    {
      id: 2,
      name: "Learn Typescript",
      isDone: false,
    },
    {
      id: 3,
      name: "Configure Git",
      isDone: true,
    },
    {
      id: 4,
      name: "Commit things",
      isDone: false,
    }
  ]);

 return (
  <C.Container>
    <C.Area>
      <C.Header>
        To-do list
      </C.Header>
      {list.map((item, index) => (
        <ListItem key={index} item={item}/>
      ))}
      
    </C.Area>
  </C.Container>
 );
}

export default App;