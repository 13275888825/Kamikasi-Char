/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-25 09:45:13
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-25 13:11:12
 * @FilePath: \Kamikasi Char\src\pages\ChatDetail.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Layout, Space, Avatar, Input, Button } from 'antd';
import { UserOutlined, CopyOutlined, SendOutlined } from '@ant-design/icons';
import {
  LeftOutlined,
  ShareAltOutlined,
  MoreOutlined,
} from '@ant-design/icons';
import './ChatDetail.css';
const { Search } = Input;
const ChatDetail = () => {
  return (
    <div className='chat'>
      <div className='header'>
        <div className='desc'>
          <div className='left'>
            <LeftOutlined className='leftIcon' />
            <div className='character'>
              <div className='top'>
                <h4 className='characterName'>Elon Musk</h4>
                <span className='tip'>17.9m</span>
              </div>
              <div className='bottom'>
                <span className='by'>Created by</span>
                <div className='aite'>@elonwhisperer</div>
              </div>
            </div>
          </div>
          <div className='right'>
            <ShareAltOutlined className='icon' />
            <MoreOutlined className='icon' />
          </div>
        </div>
        <div className='remember'>
          Remember: Everything Characters say is made up!
        </div>
      </div>
      <div className='content'>
        <div className='list'>
          <div className='avatar'>
            <Avatar size='large' icon={<UserOutlined />} />
          </div>
          <div className='listChat'>
            <div className='left'>
              <div className='top'>
                <h4 className='characterName'>Elon Musk</h4>
                <div className='aite'>@elonwhisperer</div>
              </div>
              <div className='bottom'>
                You’re wasting my time. I literally rule the world.
              </div>
            </div>
            <div className='icon'>
              <CopyOutlined />
            </div>
          </div>
        </div>
      </div>
      <div className='foot'>
        <Input defaultValue='Combine input and button' />
        <Button type='primary'>
          <SendOutlined />
        </Button>
      </div>
    </div>
  );
};

export default ChatDetail;
