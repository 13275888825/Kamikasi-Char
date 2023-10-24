/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-17 13:42:24
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-24 09:41:28
 * @FilePath: \web\src\components\NavLink\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <MailOutlined />,
  },
  {
    label: 'Feed',
    key: 'feed',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Create',
    key: 'create',
    icon: <MailOutlined />,
    children: [
      {
        label: 'Create a Character',
        key: 'addCharacter',
        icon: <MailOutlined />,
      },
      {
        label: 'Create a Room',
        key: 'addRoom',
        icon: <AppstoreOutlined />,
      },
    ],
  },
  {
    label: 'Chats',
    key: 'chats',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Community',
    key: 'community',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
];
const App = () => {
  const [current, setCurrent] = useState('mail');
  const navigate = useNavigate();
  const onClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
    if (e.key == 'home') {
      navigate('/');
    } else {
      navigate(`/${e.key}`);
    }
  };
  return (
    <div className='menu'>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode='horizontal'
        items={items}
        theme='dark'
        style={{
          width: 500,
        }}
      />
    </div>
  );
};
export default App;
