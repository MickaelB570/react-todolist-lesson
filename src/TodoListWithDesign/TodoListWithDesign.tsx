import React, { useState } from 'react';
import { Input, Button, Dropdown, message, Space, List, Select } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import './TodoListWithDesign.css';

interface ListItemCateg {
    id: string;
    label: string;
    items: ListItem[];
}


interface ListItem {
    id: string;
    title: string;
}

const TodoListWithDesign = () => {
    const [item, setItem] = useState<ListItem[]>([]);
    const [itemCategorie, setItemCagetorie] = useState<ListItemCateg[]>([]);
    const [newCategName, setNewCategName] = useState<string>('');
    const [newItemName, setNewItemName] = useState<string>('');
    const [selectValeur, setSelectValeur] = useState<string>('');

    const handleChange = (e: string) => {
        setSelectValeur(e);
        console.log(e);

    };

    const randomId = () => (Math.random() + 1).toString(36).substring(7);

    const handleOnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(e.target.value);
    };

    const handleOnCategChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCategName(e.target.value);
    };
    
    const handleOnCategClick = () => {
        const newCateg = {
            id: randomId(),
            label: newCategName,
            items : [],
        };
        
        setItemCagetorie([...itemCategorie, newCateg] );

        setNewCategName('');
    };

    const handleOnClick = () => {
        const newItemCategorie = [...itemCategorie];
        const newItem = {
            id: randomId(),
            title : newItemName,
        };
    
        const index = newItemCategorie.findIndex(({id}) => id === selectValeur);
     
        if(index !== -1) {
            newItemCategorie[index].items.push(newItem);
            setItemCagetorie(newItemCategorie);
            setNewItemName('');
        }
    };

    return (
        <div>
            <div className='create-item'>
                <Input onChange={handleOnCategChange} value={newCategName}  style={{}} size="large" placeholder="Basic usage" />
                <Button onClick={handleOnCategClick} style={{}} type="primary" size={"large"}> Add Column </Button>
            </div>
            <div className='add-item'>
                <Input onChange={handleOnNameChange} value={newItemName} style={{}} size="large" placeholder="Basic usage" />
                <Select
                    style={{}}
                    size="large"
                    onSelect={handleChange}
                    options={[
                        {value: "", label: "Select column"},
                        ...itemCategorie.map(laCateg  => ( { value : laCateg.id, label : laCateg.label } ))
                    ]}
                />
                <Button onClick={handleOnClick} style={{}} type="primary" size={"large"}> Add Item </Button>

            </div>
            <div className='show-items'>
                {itemCategorie.map(({ id, label, items }) => (
                    <div>
                    <List
                        itemLayout="horizontal"
                        header={label}
                        dataSource={items}
                        renderItem={(items) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<a href="https://ant.design" key={id}>{items.title}</a>}
                                />
                            </List.Item>
                        )}
                    />
                </div>
                ))}
            </div>
        </div>
    );
};

export default TodoListWithDesign;
