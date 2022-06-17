import * as C from "./App.styles";
import { useState } from "react";
import { Item } from "./types/Item";

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
  ]);

 return (
  <C.Container>
    <C.Area>
      <C.Header>
        To-do list
      </C.Header>
    </C.Area>
  </C.Container>
 );
}

export default App;