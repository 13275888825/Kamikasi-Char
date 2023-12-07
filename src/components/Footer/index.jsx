/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-19 16:51:34
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-12-05 11:30:29
 * @FilePath: \Kamikasi Char\src\components\Footer\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * src/components/Footer/index.jsx
 * Footer message and public links
 *
 * created by Lynchee on 7/16/23
 */

import React from 'react';
import { FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa';
import { WechatOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './style.css';
import intl from 'react-intl-universal';
const Footer = () => (
  <footer className='footer'>
    <div className='rounded-social-buttons'></div>
    <div
      className='foot'
      style={{
        width: '800px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'space-evenly',
      }}
    >
      <div>
        <div style={{ color: 'rgba(229, 224, 216, 0.85)' }}>
          {intl.get('about')}
        </div>
        <a style={{ color: '#1677FF', textDecoration: 'underline' }}>
          {intl.get('help')}
        </a>
      </div>
      <div>
        <div style={{ color: 'rgba(229, 224, 216, 0.85)' }}>
          {intl.get('contact')}
        </div>
        <a style={{ color: '#1677FF', textDecoration: 'underline' }}>
          {intl.get('blog')}
        </a>
      </div>
      <div>
        <div style={{ color: 'rgba(229, 224, 216, 0.85)' }}>
          ©2023 Character Technologies Inc.
        </div>
        <a style={{ color: '#1677FF', textDecoration: 'underline' }}>
          {intl.get('privacy')}
        </a>
      </div>
    </div>
    <p className='copyright'>
      Copyright © 2023 RealChar. All rights reserved. Any AI character&apos;s
      statements are fictional and don&apos;t represent actual beliefs or
      opinions. Ver: {process.env.REACT_APP_BUILD_NUMBER}
    </p>
  </footer>
);

export default Footer;
