import React, { useState } from 'react';
import { Button, Input, List, Select } from 'antd';


interface InterfaceAddColumn {
    handleOnColumnNameChange : (e: React.ChangeEvent<HTMLInputElement>) => void,
    newColumnName : string,
    handleOnClickNewColumn : () => void,
}

const AddColumn = ({handleOnColumnNameChange, newColumnName,handleOnClickNewColumn}:InterfaceAddColumn) =>  
{
    return <>
    <div className="todo-list-with-design-add-column">
        <Input
            placeholder="Column name"
            onChange={handleOnColumnNameChange}
            value={newColumnName}
        />

        <Button
            disabled={!newColumnName?.length}
            onClick={handleOnClickNewColumn}
        >
            Add column
        </Button>
    </div>
    </>
    
};


export default AddColumn;


