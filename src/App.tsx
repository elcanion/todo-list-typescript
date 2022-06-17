import * as C from "./App.styles";
import { useState } from "react";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddItem } from "./components/AddItem";

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

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      isDone: false
    });
    setList(newList);
  }

  const handleCheckbox = (id: number, taskIsDone: boolean) => {
      let newList = [...list];
      for (let i in newList) {
        if (newList[i].id === id) {
          newList[i].isDone = taskIsDone;
        }
      }
      setList(newList);
  }

 return (
  <C.Container>
    <C.Area>
      <C.Header>
        To-do list
      </C.Header>

      <AddItem onEnter={handleAddTask} />

      {list.map((item, index) => (
        <ListItem key={index} item={item} onChange={handleCheckbox}/>
      ))}
      
    </C.Area>
  </C.Container>
 );
}

export default App;