import * as C from "./App.styles";
import { useEffect, useState } from "react";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddItem } from "./components/AddItem";
import { app } from "./firebase.config";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";


const App = () => {
  const [list, setList] = useState<Item[]>([

  ]);

  const db = getFirestore(app);

  useEffect(() => {
    query();
  }, []);

  async function query() {
    let newList = [...list];
    const querySnapshot = await getDocs(collection(db, "todo"));
    querySnapshot.forEach((doc) => {
      newList.push({
        id: doc.data().id,
        taskName: doc.data().taskName,
        isDone: doc.data().isDone,
      });
      setList(newList);
    });
  }


  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      taskName: taskName,
      isDone: false
    });
    setList(newList);
    addToFirestore(list.length + 1, taskName, false)
  }

  const addToFirestore = async (id: number, taskName: string, isDone: boolean) => {
    try {
      console.log("trying to add...");
      const docRef = await addDoc(collection(db, "todo"), {
        id: id,
        taskName: taskName,
        isDone: isDone
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("Error adding document: ", e);
    }
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