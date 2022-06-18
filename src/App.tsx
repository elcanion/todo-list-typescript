import * as C from "./App.styles";
import { useEffect, useState } from "react";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddItem } from "./components/AddItem";
import { app } from "./firebase.config";
import { deleteDoc, doc, getDoc, getFirestore, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { query, collection, addDoc, getDocs } from "firebase/firestore";


const App = () => {
  const [list, setList] = useState<Item[]>([
  ]);

  const db = getFirestore(app);

  useEffect(() => {
    query();
  }, []);

  async function query() {
    
    //let newList = [...list];
    //var newList = new Array<Item>();
    var newList : Item[] = [];
    const querySnapshot = await getDocs(collection(db, "todo"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id);
      newList.push({
        id: doc.id,
        taskName: doc.data().taskName,
        isDone: doc.data().isDone,
      });
      setList(newList);
    });

  }


  const handleAddTask = async (taskName: string) => {
    try {
      console.log("trying to add...");
      const docRef = await addDoc(collection(db, "todo"), {
        taskName: taskName,
        isDone: false,
      })
      
      let newList = [...list];
      newList.push({
        id: docRef.id,
        taskName: taskName,
        isDone: false
      });
      setList(newList);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  }


  const addToFirestore = async (id: number, taskName: string, isDone: boolean) => {
    const newTodoRef = doc(collection(db, "todo"));
    console.log(newTodoRef);
    try {
      console.log("trying to add...");
      await setDoc(newTodoRef, {
        id: newTodoRef,
        taskName: taskName,
        isDone: isDone,
      });
      //console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  }

  const handleCheckbox = (id: string, taskname: string, taskIsDone: boolean) => {
      let newList = [...list];
      for (let i in newList) {
        if (newList[i].id === id) {
          newList[i].isDone = taskIsDone;
        }
      }
      setList(newList);
      changeToFirestore(id, taskname, taskIsDone);
  }

  const changeToFirestore = async (id: string, taskName: string, isDone: boolean) => {
    const taskDocRef = doc(db, "todo", id)
    try {
      console.log("trying to change...");
      await updateDoc(taskDocRef, {
        isDone: isDone,
      });
      //console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("Error changing document: ", e);
    }    
  }

  const handleDelete = (id: string) => {
    let newList = [...list];
    let filtered = newList.filter((item) => item.id !== id);
    setList(filtered);
    
    deleteOnFirestore(id);
    
}

  const deleteOnFirestore = async (id: string) => {
    await deleteDoc(doc(db, "todo", id));
  }

 return (
  <C.Container>
    <C.Area>
      <C.Header>
        To-do list
      </C.Header>

      <AddItem onEnter={handleAddTask} />

      {list.map((item, index) => (
        <ListItem key={index} item={item} onChange={handleCheckbox} onDelete={handleDelete}/>
      ))}
      
    </C.Area>
  </C.Container>
 );
}

export default App;