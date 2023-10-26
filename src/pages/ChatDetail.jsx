/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-25 09:45:13
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-26 10:52:48
 * @FilePath: \Kamikasi Char\src\pages\ChatDetail.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import { Layout, Space, Avatar, Input, Button, Modal, Dropdown } from 'antd';
import {
  UserOutlined,
  CopyOutlined,
  SendOutlined,
  QqCircleFilled,
  RedditSquareFilled,
  TaobaoSquareFilled,
  ZhihuSquareFilled,
  DownOutlined,
} from '@ant-design/icons';
import {
  LeftOutlined,
  ShareAltOutlined,
  MoreOutlined,
  SaveOutlined,
  FolderViewOutlined,
  FolderAddOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import style from './ChatDetail.module.css';
import { useNavigate } from 'react-router-dom';
const { Search } = Input;
const items = [
  {
    label: (
      <span className={style.labelItem}>
        <SaveOutlined className='labelIcon' />
        Save and Start New Chat
      </span>
    ),
    key: '1',
  },
  {
    label: (
      <span className={style.labelItem}>
        <FolderViewOutlined className='labelIcon' />
        View Saved Chats
      </span>
    ),
    key: '2',
  },
  {
    label: (
      <span className={style.labelItem}>
        <FolderAddOutlined className='labelIcon' />
        Create Post
      </span>
    ),
    key: '3',
  },
  {
    label: (
      <span className={style.labelItem}>
        <DeleteOutlined className='labelIcon' />
        Remove Messages
      </span>
    ),
    key: '4',
  },
];
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
  const more = () => {
    console.log('more');
  };
  return (
    <div className={style.chat}>
      <div className={style.header}>
        <div className={style.desc}>
          <div className={style.left}>
            <LeftOutlined onClick={toHome} className={style.leftIcon} />
            <div className={style.character}>
              <div className={style.top}>
                <h4 className={style.characterName}>Elon Musk</h4>
                <span className={style.tip}>17.9m</span>
              </div>
              <div className={style.bottom}>
                <span className={style.by}>Created by</span>
                <div className={style.aite}>@elonwhisperer</div>
              </div>
            </div>
          </div>
          <div className={style.right}>
            <ShareAltOutlined className={style.icon} onClick={share} />
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={e => e.preventDefault()}>
                <Space>
                  <MoreOutlined className={style.icon} onClick={more} />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
        <div className={style.remember}>
          Remember: Everything Characters say is made up!
        </div>
      </div>
      <div className={style.content}>
        <div className={style.list}>
          <div className={style.avatar}>
            <Avatar size='large' icon={<UserOutlined />} />
          </div>
          <div className={style.listChat}>
            <div className={style.left}>
              <div className={style.top}>
                <h4 className={style.characterName}>Elon Musk</h4>
                <div className={style.aite}>@elonwhisperer</div>
              </div>
              <div
                className={style.bottom}
                style={{
                  color: '#fff',
                }}
              >
                You’re wasting my time. I literally rule the world.
              </div>
            </div>
            <div className={style.icon}>
              <CopyOutlined />
            </div>
          </div>
        </div>
      </div>
      <div className={style.foot}>
        <Input placeholder='type a message' />
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
        <div className={style.iconList}>
          <QqCircleFilled className={style.icon} />
          <RedditSquareFilled className={style.icon} />
          <TaobaoSquareFilled className={style.icon} />
          <ZhihuSquareFilled className={style.icon} />
        </div>
      </Modal>
    </div>
  );
};

export default ChatDetail;
