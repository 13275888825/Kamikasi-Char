/* eslint-disable prettier/prettier */
/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-17 12:15:58
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-12-01 17:59:49
 * @FilePath: \web\src\components\Header\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * src/components/Header/index.jsx
 * logo
 *
 * created by Lynchee on 7/16/23
 */

import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { Button } from 'antd';
import './style.css';
import SignIn from '../Auth/SignIn';
import SignOut from '../Auth/SignOut';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@nextui-org/react';
import HeaderNav from '../HeaderNav';
import IconList from '../IconList';
import Login from '../Login';
import { Menu, Dropdown, Space } from 'antd';
import locales from '../../assets/locales';
import { DownOutlined } from '@ant-design/icons';
const Header = ({ user, isLoggedIn, setToken, handleDisconnect }) => {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState(locales[locale]);
  const changeLanguge =(lang)=>{
    console.log(lang,'lang');
    localStorage.setItem('lang',lang)
  }
  const items = [
    {
      label: (
        <a style={{color:'#000'}} onClick={()=>changeLanguge('en')}>
          英文
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a style={{color:'#000'}}onClick={()=>changeLanguge('zh')}>
          中文
        </a>
      ),
      key: '1',
    },
  ];
  return (
    <Navbar id='navbar' variant='floating'>
      <a href='/'>
        <Navbar.Brand
          css={{
            '@xs': {
              w: '12%',
            },
          }}
        >
          <img
            style={{
              width: '150px',
            }}
            src={logo}
            alt='Logo'
          />
        </Navbar.Brand>
      </a>
      <HeaderNav />
      <Navbar.Content
        id='navbar'
        css={{
          '@xs': {
            w: '19%',
            jc: 'flex-end',
          },
        }}
      > <Dropdown
        menu={{
          items,
        }}
      >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Languge
              <DownOutlined style={{fontSize:'14px'}} />
            </Space>
          </a>
        </Dropdown>
        <IconList />
        {/* {user ? (
        <SignOut
          isLoggedIn={isLoggedIn}
          user={user}
          handleDisconnect={handleDisconnect}
        />
      ) : (
        <SignIn isLoggedIn={isLoggedIn} setToken={setToken} />
      )} */}
        {/* <LogSign/> */}
        <Login></Login>
      </Navbar.Content>
    </Navbar>
  )
};

export default Header;
