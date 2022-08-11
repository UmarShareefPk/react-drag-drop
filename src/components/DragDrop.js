import React, { useState, useEffect } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";

const PictureList = [
    {
      id: 1,
      url:
        "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    },
    {
      id: 2,
      url:
        "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    },
    {
      id: 3,
      url:
        "https://i.picsum.photos/id/253/200/300.jpg?blur=5&hmac=FXcXERA5uo7sklAep2MU935VysdfXWQM1QAclUlbHP0",
    },
  ];

  function DragDrop() {
    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
      accept: "image",
      drop: (item) => addImageToBoard(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }), [board]);
  
    const addImageToBoard = (id) => {
       
      const pictureList = PictureList.filter((picture) => id === picture.id);
      if(board.filter((picture) => id === picture.id).length === 0) {
        console.log("should add");
        setBoard((board) => [...board, pictureList[0]]);
      }
     
   
    };
    
     return (
      <>
        <div className="Pictures">
          {PictureList.map((picture) => {
            return <Picture url={picture.url} id={picture.id} />;
          })}
        </div>
        <div className="Board" ref={drop}>
          {board.map((picture) => {
            return <Picture url={picture.url} id={picture.id} />;
          })}
        </div>
      </>
    );
  }
  
  export default DragDrop;