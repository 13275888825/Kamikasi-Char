/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-25 09:45:13
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-25 14:01:58
 * @FilePath: \Kamikasi Char\src\pages\ChatDetail.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import { Layout, Space, Avatar, Input, Button, Modal } from 'antd';
import {
  UserOutlined,
  CopyOutlined,
  SendOutlined,
  QqCircleFilled,
  RedditSquareFilled,
  TaobaoSquareFilled,
  ZhihuSquareFilled,
} from '@ant-design/icons';
import {
  LeftOutlined,
  ShareAltOutlined,
  MoreOutlined,
} from '@ant-design/icons';
import './ChatDetail.css';
import { useNavigate } from 'react-router-dom';
const { Search } = Input;
const ChatDetail = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toHome = () => {
    console.log('tohome');
    navigate('/');
  };
  const share = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='chat'>
      <div className='header'>
        <div className='desc'>
          <div className='left'>
            <LeftOutlined onClick={toHome} className='leftIcon' />
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
            <ShareAltOutlined className='icon' onClick={share} />
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
      <Modal
        title='Share Character'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <span
          style={{
            color: '#9f9788',
          }}
        >
          This will not share your conversation with others
        </span>
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <Input
            style={{
              backgroundColor: '#aaa',
            }}
            placeholder='https://c.ai/c/f4z5XLwZuK_txuvCd8SLuzN4veppXT0bE65kdWicZ1s'
          />
          <Button
            style={{
              borderRadius: '0',
              height: '35px',
            }}
            type='primary'
          >
            Copy Link
          </Button>
        </div>
        <div className='iconList'>
          <QqCircleFilled className='icon' />
          <RedditSquareFilled className='icon' />
          <TaobaoSquareFilled className='icon' />
          <ZhihuSquareFilled className='icon' />
        </div>
      </Modal>
    </div>
  );
};

export default ChatDetail;
