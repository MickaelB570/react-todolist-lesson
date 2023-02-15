import React, { useState } from 'react';
import { Button, Input, List, Select } from 'antd';

import Item from './Item';
import Header from './header';




interface ItemInterface {
    id: string;
    columnId: string;
    label: string;
}

interface ColumnInterface {
    value: string,
    columnItems: ItemInterface[],
    handleOnDeleteItem : (idToRemove : string) => void,
    handleOnDeleteCollumn : (valueToRemove : string) => void,
    showModal: (idToEdit : string) => void,
    labelHeader : string,
    showModalCollum : (idToEdit : string) => void,
}





const Column = ({ value, columnItems,showModal, labelHeader, showModalCollum,handleOnDeleteItem, handleOnDeleteCollumn }: ColumnInterface) => {


    return <>
        <List
        className="todo-list-with-design-column"
        key={value}
        header={
            <Header 
            label={labelHeader}
            showModalCollum={() => showModalCollum(value)}
            handleOnDeleteCollumn= {() => handleOnDeleteCollumn(value)}
            value=""
            />
        }
        dataSource={columnItems}
        renderItem={({ label, id }) => (
            <Item
                label={label}
                showModal = {()=> showModal(id)}
                handleOnDeleteItem = {() => handleOnDeleteItem(id)}
                id=""
            />
        )}
        />

    </>
};






export default Column;


