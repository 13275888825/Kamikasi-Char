/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-25 15:01:38
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-25 18:21:29
 * @FilePath: \Kamikasi Char\src\pages\Profile.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import style from './Profile.module.css';
import { Avatar, Tabs } from 'antd';
import {
  LeftOutlined,
  EditOutlined,
  AndroidOutlined,
  AppleOutlined,
  EyeOutlined,
  DisconnectOutlined,
  LockOutlined,
} from '@ant-design/icons';
const Profile = () => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className={style.header}>
        <div className={style.headerIcon}>
          <LeftOutlined />
        </div>
        <div>
          <span className={style.username}>wuqihui</span>
          <div className={style.avatar}>
            <Avatar
              size={64}
              style={{
                backgroundColor: '#aaa',
              }}
            >
              <span>Wu</span>
            </Avatar>
          </div>
          <div>
            <span className={style.name}>@wuqihui</span>
          </div>
        </div>
        <div>
          <EditOutlined className={style.edit} />
        </div>
      </div>
      <div className={style.follow}>
        <div className='follows1'>0 Following</div>
        <div className='follows2'>0 Followers</div>
        <div className='follows3'>0 User Interactions</div>
      </div>
      <div className={style.tabs}>
        <Tabs
          defaultActiveKey='2'
          items={[
            {
              key: '1',
              label: (
                <span>
                  <AndroidOutlined />
                  Tab 1
                </span>
              ),
              children: (
                <div
                  style={{
                    color: '#fff',
                    height: '80px',
                    width: '100%',
                    borderBottom: '1px solid #e5e0d8',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '20px' }}>
                      <EyeOutlined /> (0)
                    </div>
                    <span style={{ fontSize: '14px' }}>
                      {' '}
                      Public - Anyone can chat{' '}
                    </span>
                  </div>
                  <div style={{ fontSize: '18px', marginTop: '14px' }}>
                    <DisconnectOutlined />
                    (0)
                  </div>
                  <div style={{ fontSize: '18px', marginTop: '14px' }}>
                    <LockOutlined />
                    (0)
                  </div>
                </div>
              ),
            },
            {
              key: '2',
              label: (
                <span>
                  <AppleOutlined />
                  Tab 1
                </span>
              ),
              children: (
                <div
                  style={{
                    color: '#e5e0d8',
                    height: '80px',
                    width: '100%',
                    borderBottom: '1px solid #e5e0d8',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '20px',
                  }}
                >
                  No new posts yet. Check back soon!
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Profile;
