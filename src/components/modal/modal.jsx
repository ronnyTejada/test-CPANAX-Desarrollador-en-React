import React from "react";
import Modal from "react-modal";
import MyCaurousel from "../carousel/carousel";
import Form from "../form/form";
import { GrClose } from "react-icons/gr";

const customStyles = {
  content: {
   height:'100%',
   backgroundColor:'black'
   
  },
};

const customStylesForm = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
   
  },
};

const MyModal = ({modalIsOpen, closeModal,url,data,setIsOpen,type,setState,editing,itemForEdit}) => {
  let subtitle;



  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }


  return (
    <div style={{height:'100px'}}>
      {modalIsOpen&&
         <button className="btn__close" onClick={()=>setIsOpen(false)}>
         <h1>
           <GrClose />
         </h1>
       </button>
      }
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={type==='slider'?customStyles:customStylesForm}
        contentLabel="Example Modal"
      >
        {type === 'slider' ?
          <MyCaurousel url={url} data={data}/>

          :
          <Form setState={setState} data={data} setIsOpen={setIsOpen} editing={editing} itemForEdit={itemForEdit}/>

        }
      </Modal>
    </div>
  );
};

export default MyModal;
