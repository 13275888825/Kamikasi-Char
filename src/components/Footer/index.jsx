/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-19 16:51:34
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-24 09:55:56
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
import './style.css';

const Footer = () => (
  <footer className='footer'>
    <div className='rounded-social-buttons'>
      <a
        className='social-button github'
        href='https://github.com/Shaunwei/RealChar'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub />
      </a>
      {/* <a
        className='social-button discord'
        href='https://discord.gg/e4AYNnFg2F'
        target='_blank'
        rel='noreferrer'
      >
        <FaDiscord />
      </a> */}
      <a
        className='social-button twitter'
        href='https://twitter.com/agishaun'
        target='_blank'
        rel='noreferrer'
      >
        <WechatOutlined />
      </a>
    </div>
    <p className='copyright'>
      Copyright © 2023 RealChar. All rights reserved. Any AI character&apos;s
      statements are fictional and don&apos;t represent actual beliefs or
      opinions. Ver: {process.env.REACT_APP_BUILD_NUMBER}
    </p>
  </footer>
);

export default Footer;
