import React, { useState } from 'react';
import { Button, Input, List, Select } from 'antd';
import { CloseOutlined, FormOutlined } from '@ant-design/icons';


interface interfaceItem {
    label: string,
    showModal: (idToEdit : string) => void,
    handleOnDeleteItem: (id : string) => void,
    id : string,
}





const Item = ({ label, showModal, handleOnDeleteItem, id }: interfaceItem) => {
    return <>
        <List.Item className="todo-list-with-design-item">
            {label}
            <div>
                <Button
                    type="primary"
                    className='logo'
                    size="small"
                    onClick={() => showModal(id)}
                    icon={<FormOutlined />}
                />
                <Button
                    type="primary"
                    className='logo'
                    danger
                    size="small"
                    icon={<CloseOutlined />}
                    onClick={() => handleOnDeleteItem(id)}
                />
            </div>

        </List.Item>
    </>
};




    export default Item;


