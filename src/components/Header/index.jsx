/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-17 12:15:58
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-23 16:29:26
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
import logo from '../../assets/svgs/logo.svg';
import { Button } from 'antd';
import './style.css';
import SignIn from '../Auth/SignIn';
import SignOut from '../Auth/SignOut';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@nextui-org/react';
import HeaderNav from '../HeaderNav';
import IconList from '../IconList';
import Login from '../Login';
const Header = ({ user, isLoggedIn, setToken, handleDisconnect }) => (
  <Navbar id='navbar' variant='floating'>
    <a href='/'>
      <Navbar.Brand
        css={{
          '@xs': {
            w: '12%',
          },
        }}
      >
        <img src={logo} alt='Logo' />
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
);

export default Header;
