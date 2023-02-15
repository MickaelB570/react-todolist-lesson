import React, { useState } from 'react';
import { Button, Input, List, Select, Modal } from 'antd';


interface interfaceColumnModal
{
    isModalCollumOpen : boolean;
    handleOkCollum : ()=>void;
    handleCancelCollum : ()=>void;
    handleColumnEdit : (e: React.ChangeEvent<HTMLInputElement>)=>void;
}



const ColumnModal = ({isModalCollumOpen,handleOkCollum,handleCancelCollum,handleColumnEdit}:interfaceColumnModal) => 
{
    return <>
       <Modal
                title="Edit"
                open={isModalCollumOpen}
                onOk={handleOkCollum}
                onCancel={handleCancelCollum}
            >
                <Input onChange={handleColumnEdit} placeholder="Edit collum name" />
            </Modal>
    </>
};




export default ColumnModal;


