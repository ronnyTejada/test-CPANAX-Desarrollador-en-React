import React, { useState } from "react";
import "./style.css";
import { GrClose } from "react-icons/gr";

const Form = ({ setState, setIsOpen, itemForEdit, editing,data }) => {
  const [title, setTitle] = useState();
  const [type, setType] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('dawd')
    if(editing){
        console.log('dawd22')
      const newData= data.map(item=>{
        console.log(item,itemForEdit)

        if(item.id===itemForEdit.id){
            console.log('dadw')
            return{...item, title:title,type:type}
        }

        return item
      })


      setState(newData)
      setIsOpen(false);

      return

    }
    let item = {
      id: "about",
      data: { label: title, subTitle: "Info de la Pagina" },
      type: type,
      title: title,
    };

    setState((prev) => [...prev, item]);
    setIsOpen(false);
  };

  return (
    <div className="wrap">
      <div className="wrap__text">
        {!editing ?
                <h3>Nuevo Nodo</h3>
            :
            <h3>Edit Nodo</h3>

        }
        <button className="btn__close" onClick={()=>setIsOpen(false)}>
          <h1>
            <GrClose />
          </h1>
        </button>
      </div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          value={editing?itemForEdit.title:title}
        />
        <input
          className="input"
          placeholder="Type"
          onChange={(event) => setType(event.target.value)}
          type="text"
          value={editing?itemForEdit.type:type}

        />

        <button className="btn__form">Agregar</button>
      </form>
    </div>
  );
};

export default Form;
