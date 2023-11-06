/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-23 16:27:20
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-01 17:55:47
 * @FilePath: \Kamikasi Char\src\components\Login\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Space, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('token');
  const toLogin = () => {
    navigate('/login');
  };
  const toProfile = () => {
    navigate('/profile');
  };
  const Logout = () => {
    navigate('/login');
  };
  const userManage = () => {
    navigate('/userManage');
  };
  const items = [];
  if (!authToken) {
    items.push(
      {
        label: (
          <span style={{ color: '#000' }} onClick={toProfile}>
            个人信息
          </span>
        ),
        key: '1',
      },
      {
        label: (
          <span style={{ color: '#000' }} onClick={toLogin}>
            登录
          </span>
        ),
        key: '2',
      }
    );
  } else {
    items.push(
      {
        label: (
          <span style={{ color: '#000' }} onClick={toProfile}>
            个人信息
          </span>
        ),
        key: '1',
      },
      {
        label: (
          <span style={{ color: '#000' }} onClick={Logout}>
            退出登录
          </span>
        ),
        key: '2',
      }
    );
  }
  // const items = [
  //   {
  //     label: (
  //       <span style={{ color: '#000' }} onClick={toLogin}>
  //         登录
  //       </span>
  //     ),
  //     key: '1',
  //   },
  //   {
  //     label: (
  //       <span style={{ color: '#000' }} onClick={toProfile}>
  //         个人信息
  //       </span>
  //     ),
  //     key: '2',
  //   },
  //   {
  //     label: (
  //       <span style={{ color: '#000' }} onClick={Logout}>
  //         退出登录
  //       </span>
  //     ),
  //     key: '3',
  //   },
  // ];
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <a onClick={e => e.preventDefault()}>
        <Space>
          <Avatar size='large' icon={<UserOutlined />} />
        </Space>
      </a>
    </Dropdown>
  );
};
export default Login;
