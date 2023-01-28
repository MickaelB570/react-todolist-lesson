import React, { useState } from 'react';
import { Input, Button, Dropdown, message, Space, List, Select } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import './TodoListWithDesign.css';

interface ListItemCateg {
    id: string;
    label: string;
    item: ListItem[];
}


interface ListItem {
    id: string;
    label: string;
}

const TodoListWithDesign = () => {
    const [todo, setTodo] = useState<ListItem[]>([]);
    const [inProgress, setInProgress] = useState<ListItem[]>([]);
    const [done, setDone] = useState<ListItem[]>([]);
    const [item, setItem] = useState<ListItem[]>([]);
    const [itemCategorie, setItemCagetorie] = useState<ListItemCateg[]>([]);
    const [newCategName, setNewCategName] = useState<string>('');
    const [newItemName, setNewItemName] = useState<string>('');
    const [newItemCategory, setNewItemCategory] = useState<string>('todo');

    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };


    const randomId = () => (Math.random() + 1).toString(36).substring(7);

    const handleOnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(e.target.value);
    };

    const handleOnCategChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCategName(e.target.value);
    };

    const handleOnCategoryChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setNewItemCategory(e.target.value);
    };
    
    const handleOnCategClick = () => {
        const newCateg = {
            id: randomId(),
            label: newCategName,
            item : item,
        };

        setItemCagetorie([...itemCategorie, newCateg] );

        setNewCategName('');
    };


    const handleOnClick = () => {
        const newItem = {
            id: randomId(),
            label: newItemName,
        };

        switch (newItemCategory) {
            case 'todo':
                setTodo([...todo, newItem]);
                break;
            case 'inProgress':
                setInProgress([...inProgress, newItem]);
                break;
            case 'done':
                setDone([...done, newItem]);
                break;
        }

        setNewItemName('');
        setNewItemCategory('todo');
    };

    return (
        /*<div className="todo-list-basic">
            <div className="todo-list-basic-add">
                <input onChange={handleOnNameChange} value={newItemName} />
                <select
                    onChange={handleOnCategoryChange}
                    value={newItemCategory}
                >
                    <option value="todo">To do</option>
                    <option value="inProgress">In progress</option>
                    <option value="done">Done</option>
                </select>
                <button disabled={!newItemName.length} onClick={handleOnClick}>
                    Add to list
                </button>
            </div>

            <div className="todo-list-basic-columns">
                <div>
                    <span>To do</span>
                    <ul>
                        {todo.map(({ id, label }) => (
                            <li key={id}>{label}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <span>In progress</span>
                    <ul>
                        {inProgress.map(({ id, label }) => (
                            <li key={id}>{label}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <span>Done</span>
                    <ul>
                        {done.map(({ id, label }) => (
                            <li key={id}>{label}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    */
        <div>
            <div className='create-item'>
                <Input onChange={handleOnCategChange} value={newCategName}  style={{}} size="large" placeholder="Basic usage" />
                <Button onClick={handleOnCategClick} style={{}} type="primary" size={"large"}> Add Column </Button>
            </div>
            <div className='add-item'>
                <Input style={{}} size="large" placeholder="Basic usage" />
                <Select
                    defaultValue=""
                    style={{}}
                    size="large"
                    onChange={handleChange}
                    /*options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}*/
                    
                    options={
                        itemCategorie.map(({id,label}) => ( { value : {id}, label : {label} } ))
                    }

                    //{todo.map(({ id, label }) => (
                        //<li key={id}>{label}</li>
                        //))}
                />
                <Button style={{}} type="primary" size={"large"}> Add Item </Button>
            </div>
            <div className='show-items'>
                <div>
                    <List
                        itemLayout="horizontal"
                        header="Exemples"
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<a href="https://ant.design">{item.title}</a>}
                                />
                            </List.Item>
                        )}
                    />
                </div>
                <div>
                    <List                        
                        header="Exemples"
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<a href="https://ant.design">{item.title}</a>}
                                />
                            </List.Item>
                        )}
                    />
                </div>
                <div>
                    <List
                        header="Exemples"
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<a href="https://ant.design">{item.title}</a>}
                                />
                            </List.Item>
                        )}
                    />
                </div>
                <div>
                    <List
                        header="Exemples"
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<a href="https://ant.design">{item.title}</a>}
                                />
                            </List.Item>
                        )}
                    />
                </div>
                <div>
                    <List
                        header="Exemples"
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<a href="https://ant.design">{item.title}</a>}
                                />
                            </List.Item>
                        )}
                    />
                </div>
                
            </div>
        </div>
    );
};

export default TodoListWithDesign;
