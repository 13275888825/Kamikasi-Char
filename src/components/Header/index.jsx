/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-17 12:15:58
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-12-04 11:37:12
 * @FilePath: \web\src\components\Header\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * src/components/Header/index.jsx
 * logo
 *
 * created by Lynchee on 7/16/23
 */

import React, { useState,useEffect } from 'react';
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
import { Menu, Dropdown, Space, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { changeLanguage } from 'i18next';
const Header = ({ user, isLoggedIn, setToken, handleDisconnect }) => {
  const [locale, setLocale] = useState('');
  const items = [
    {
      label: (
        <a style={{ color: '#000' }}>
          英文
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a style={{ color: '#000' }}>
          中文
        </a>
      ),
      key: '1',
    },
  ];
  useEffect(()=>{
    const locale = localStorage.getItem('locale')
    if(locale == 'zh'){
      setLocale('zh');
    }else if(locale == 'en'){
      setLocale('en');
    }
  },[])
  const changeLanguage = (val) => {
    console.log(val, 'val');
    setLocale(val);
    localStorage.setItem('locale',val);
    window.location.reload();
  }
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
      >
        {/* <Dropdown
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
        </Dropdown> */}
        <Space wrap>
          <Select
            defaultValue={locale}
            value={locale}
            onChange={changeLanguage}
            dropdownStyle={{ color: '#000' }}
            style={{
              width: 100,
              color: '#aaa', // 设置默认文字颜色
            }}
            bordered={false}
            options={[
              {
                value: 'zh',
                label: '中文',
              },
              {
                value: 'en',
                label: 'English',
              },
            ]}
          />
        </Space>
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
