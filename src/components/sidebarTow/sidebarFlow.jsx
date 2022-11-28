import React, { useEffect, useState } from "react";
import "./style.css";
import { ReactSortable } from "react-sortablejs";
import { dataPanel } from "../../utils/consts";
import MyModal from "../modal/modal";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";

const SdbFlow = ({ items, setNodes }) => {
  const [state, setState] = useState(dataPanel);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEdit] = useState(false);
  const [itemForEdit, setItemForEdit] = useState({});

  const i = (item) => {
    item.position = position;
  };

  useEffect(() => {
    const mouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const edit = (item) => {
    setIsOpen(true);
    setEdit(true);

    setItemForEdit(item);
  };

  const deleteItem = (item) => {
    if (window.confirm("Seguro quieres eliminar este item?")) {
      const newData = state.filter((obj) => obj.id !== item.id);
      setState(newData);
    } else {
      console.log("Thing was not saved to the database.");
    }
  };

  const clean=()=>{
    setState(dataPanel)
    setNodes([])
  }

  useEffect(() => {
    state.map((item) => {
      i(item);
    });
  }, [position]);

  return (
    <div         className="sdb"
    >
       <button onClick={() => setIsOpen(true)} className="add">
          <BiAddToQueue />
        </button>

        
          <button className="reloadBtn" onClick={clean}>
            <TfiReload />
          </button>
        

      <ReactSortable
        list={state}
        setList={setState}
       
        group="shared-group-name"
      >
     
        {state.map((item) => (
          <>
            <div className="sdb__item" key={item.id}>
              <button className="sdb__edit" onClick={() => edit(item)}>
                {" "}
                <FiEdit />
              </button>
              <button className="sdb__delete" onClick={() => deleteItem(item)}>
                {" "}
                <AiOutlineDelete />
              </button>

              {item.title}
            </div>
          </>
        ))}
      </ReactSortable>
      <MyModal
        data={state}
        setIsOpen={setIsOpen}
        editing={editing}
        itemForEdit={itemForEdit}
        modalIsOpen={isOpen}
        setState={setState}
      />
    </div>
  );
};

export default SdbFlow;
