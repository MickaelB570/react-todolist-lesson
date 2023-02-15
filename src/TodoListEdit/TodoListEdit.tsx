import React, { useState } from 'react';
import { Button, Input, List, Modal, Select } from 'antd';
import './TodoListWithEdit.css';
import { CloseOutlined, FormOutlined } from '@ant-design/icons';

import AddColumn from './AddColumn';
import AddItem from './AddItem';
import Column from './Column';
import ColumnModal from './ColumnModal';
import ItemModal from './ItemModal';

interface ColumnInterface {
    value: string;
    label: string;
}

interface ItemInterface {
    id: string;
    columnId: string;
    label: string;
}





export const TodoListWithEdit = () => {
    const [columns, setColumns] = useState<ColumnInterface[]>([]);
    const [items, setItems] = useState<ItemInterface[]>([]);
    const [newItemName, setNewItemName] = useState<string>('');
    const [newColumnName, setColumnName] = useState<string>('');
    const [newItemColumn, setNewItemColumn] = useState<string>('');

    const [IDColumn, setIDColumn] = useState<string>('');
    const [nomColumn, setnomColumn] = useState<string>('');
    const [ItemID, setItemID] = useState<string>('');
    const [ItemNom, setItemNom] = useState<string>('');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalCollumOpen, setIsModalCollumOpen] = useState(false);



    const randomId = () => (Math.random() + 1).toString(36).substring(7);

    const handleOnItemNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(e.target.value);
    };

    const handleOnColumnNameChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setColumnName(e.target.value);
    };




    const handleColumnEdit = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setnomColumn(e.target.value);
    };


    const handleItemEdit = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setItemNom(e.target.value);
    };





    const handleOnCategoryChange = (newValue: string) => {
        setNewItemColumn(newValue);
    };

    const handleOnClickNewColumn = () => {
        if (newColumnName) {
            const newColumn = {
                value: randomId(),
                label: newColumnName,
            };

            setColumns([...columns, newColumn]);
        }
    };


    const handleOnDeleteItem = (idToRemove: string) => {
        setItems(items.filter(({ id }) => id !== idToRemove));
    };

    const handleOnDeleteCollumn = (valueToRemove: string) => {
        setColumns(columns.filter(({ value }) => value !== valueToRemove));
    };



    const handleOnClickNewItem = () => {
        if (newItemColumn) {
            const newItem = {
                id: randomId(),
                label: newItemName,
                columnId: newItemColumn,
            };

            setItems([...items, newItem]);

            setNewItemName('');
        }
    };

    const getColumnItems = (columnIdSelected: string) => {
        return items.filter(({ columnId }) => columnId === columnIdSelected);
    };


    const showModal = (e: string) => {
        setItemID(e);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        console.log(ItemID);
        console.log(ItemNom);

        for (let i = 0; i < columns.length; i++) {
            if (items[i].id === ItemID) {
                items[i].label = ItemNom;
                setItems(items);
            }
        }

        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const showModalCollum = (e: string) => {
        setIDColumn(e);
        setIsModalCollumOpen(true);
    };


    const handleOkCollum = () => {
        console.log(IDColumn);
        console.log(nomColumn);

        for (let i = 0; i < columns.length; i++) {
            if (columns[i].value === IDColumn) {
                columns[i].label = nomColumn;
                setColumns(columns);
            }
        }

        setIsModalCollumOpen(false);
    };

    const handleCancelCollum = () => {
        setIsModalCollumOpen(false);
    };

    return (
        <div className="todo-list-with-design">

            <AddColumn
                handleOnColumnNameChange={handleOnColumnNameChange}
                newColumnName={newColumnName}
                handleOnClickNewColumn={handleOnClickNewColumn}
            />

            <AddItem
                handleOnItemNameChange={handleOnItemNameChange}
                newItemName={newItemName}
                handleOnClickNewItem={handleOnClickNewItem}
                handleOnCategoryChange={handleOnCategoryChange}
                columns={columns}
                newItemColumn={newItemColumn}
            />

            <div className="todo-list-with-design-columns">
                {columns.map(({ value, label }) => {
                    const columnItems = getColumnItems(value);

                    return (
                        <Column
                            columnItems={columnItems}
                            value={value}
                            showModal={showModal}
                            showModalCollum={showModalCollum}
                            labelHeader={label}
                            handleOnDeleteItem={handleOnDeleteItem}
                            handleOnDeleteCollumn={handleOnDeleteCollumn}
                        />
                    );
                })}
            </div>
            <ColumnModal
                isModalCollumOpen={isModalCollumOpen}
                handleOkCollum={handleOkCollum}
                handleCancelCollum={handleCancelCollum}
                handleColumnEdit={handleColumnEdit}
            />
            <ItemModal
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
                handleItemEdit={handleItemEdit}
            />

        </div>

    );
};

export default TodoListWithEdit;
