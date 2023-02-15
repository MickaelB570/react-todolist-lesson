import React, { useState } from 'react';
import { Button, Input, List, Select } from 'antd';
import { CloseOutlined, FormOutlined } from '@ant-design/icons';


interface interfaceHeader 
{
    label : string,
    showModalCollum : (  idToEdit : string ) => void,
    handleOnDeleteCollumn : (valueToRemove : string) => void
    value : string
}



const Header = ({label,showModalCollum,handleOnDeleteCollumn, value}:interfaceHeader) =>
{
return <>
    <div>
        {label}
        <Button
            type="primary"
            className='logo'
            size="small"
            onClick={() => showModalCollum(value)}
            icon={<FormOutlined />}
        />
        <Button
            type="primary"
            className='logo'
            danger
            size="small"
            onClick={()=>handleOnDeleteCollumn(value)}
            icon={<CloseOutlined />}
        />
    </div>
</>


};





export default Header;


