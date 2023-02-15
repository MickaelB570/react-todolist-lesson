import React, { useState } from 'react';
import { Button, Input, List, Select, Modal } from 'antd';


interface interfaceItemModal
{
    isModalOpen : boolean;
    handleOk : ()=>void;
    handleCancel : ()=>void;
    handleItemEdit : (e: React.ChangeEvent<HTMLInputElement>)=>void;
}




const ItemModal = ({isModalOpen,handleOk,handleCancel,handleItemEdit}:interfaceItemModal) => 
{
    return <>
      <Modal
                title="Edit"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Input onChange={handleItemEdit} placeholder="Edit item name" />
            </Modal>
    </>
};





export default ItemModal;


