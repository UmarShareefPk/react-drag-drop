import './App.css';
import Draggable from 'react-draggable';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";

//https://www.youtube.com/watch?v=4bzJrEETW4w

function App() {


  return (
   
      <div>
        
         <h1>Test</h1>
      <Draggable>
        <div>I can now be moved around!</div>
      </Draggable> 

      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <DragDrop />
        </div>
      </DndProvider>


        </div>       
   
  );
}

export default App;
