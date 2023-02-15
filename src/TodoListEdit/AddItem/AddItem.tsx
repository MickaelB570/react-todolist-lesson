import React, { useState } from 'react';
import { Button, Input, List, Select } from 'antd';

interface ColumnInterface {
    value: string;
    label: string;
}

interface InterfaceAddItem {
    handleOnItemNameChange : (e: React.ChangeEvent<HTMLInputElement>) => void,
    newItemName : string,
    handleOnClickNewItem : () => void,
    handleOnCategoryChange : (newValue : string) => void,
    columns : ColumnInterface[]
    newItemColumn : string,

}

const AddItem = ({handleOnItemNameChange, newItemName,handleOnClickNewItem,handleOnCategoryChange,columns,newItemColumn} : InterfaceAddItem ) =>
{
    return <>
        <div className="todo-list-with-design-add-item">
                <Input
                    placeholder="Item name"
                    onChange={handleOnItemNameChange}
                    value={newItemName}
                />

                <Select
                    placeholder="Select column"
                    onChange={handleOnCategoryChange}
                    value={newItemColumn}
                    options={columns}
                />

                <Button
                    disabled={!newItemName?.length || !newItemColumn}
                    onClick={handleOnClickNewItem}
                >
                    Add Item
                </Button>
            </div>

    </>
};




export default AddItem;


