import * as C from "./App.styles";
import { useState } from "react";
import { Item } from "./types/Item";

const App = () => {
  const [list, setList] = useState([]);

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