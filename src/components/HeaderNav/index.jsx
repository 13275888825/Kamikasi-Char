/* eslint-disable prettier/prettier */
/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-17 13:42:24
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-12-04 11:48:24
 * @FilePath: \web\src\components\NavLink\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  AppstoreOutlined,
  HomeOutlined,
  PlusOutlined,
  SlidersOutlined,
  UserAddOutlined,
  MessageOutlined,
  CommentOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import intl from 'react-intl-universal';
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
  const items = [
    {
      label: <span>{intl.get('home')}</span>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: <span>{intl.get('feed')}</span>,
      key: 'feed',
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: <span>{intl.get('create')}</span>,
      key: 'create',
      icon: <PlusOutlined />,
      children: [
        {
          label: <span>{intl.get('character')}</span>,
          key: 'addCharacter',
          icon: <UserAddOutlined />,
        },
        {
          label: <span>{intl.get('room')}</span>,
          key: 'addRoom',
          icon: <SlidersOutlined />,
        },
      ],
    },
    {
      label:  <span>{intl.get('chats')}</span>,
      key: 'chats',
      icon: <MessageOutlined />,
    },
    {
      label:  <span>{intl.get('community')}</span>,
      key: 'community',
      icon: <CommentOutlined />,
      disabled: true,
    },
  ];
  const menuItem = [
    {
      label: (
        <a>
          1st menu item
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a>
          2nd menu item
        </a>
      ),
      key: '1',
    },
  ];
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
