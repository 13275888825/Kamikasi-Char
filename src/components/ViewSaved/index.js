/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-30 13:34:16
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-31 09:39:29
 * @FilePath: \Kamikasi Char\src\components\ViewSaved\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from 'antd';
import {
  LeftOutlined,
  MoreOutlined,
  CopyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import style from './index.module.css';
export default function ViewSaved() {
  const navigate = useNavigate();
  const toHome = () => {
    navigate('/');
  };
  return (
    <div className={style.home}>
      <div className={style.head}>
        <LeftOutlined className={style.icon} onClick={toHome} />
        <h3 className={style.title}>
          Your Past Conversations with Psychologist
        </h3>
      </div>
      <div className={style.time}>25 minutes ago</div>
      <div>
        <MoreOutlined
          style={{
            color: '#fff',
            fontSize: '24px',
            marginTop: '20px',
            marginLeft: '12px',
          }}
        />
      </div>
      <div className={style.listChat}>
        <div className={style.avatar}>
          <Avatar size='large' icon={<UserOutlined />} />
        </div>
        <div className={style.left}>
          <div className={style.top}>
            <h4 className={style.characterName}>Elon Musk</h4>
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
  );
}
