/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-23 16:27:20
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-25 15:01:04
 * @FilePath: \Kamikasi Char\src\components\Login\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Space, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate('/login');
  };
  const toProfile = () => {
    navigate('/profile');
  };
  const items = [
    {
      label: (
        <span style={{ color: '#000' }} onClick={toLogin}>
          登录
        </span>
      ),
      key: '1',
    },
    {
      label: (
        <span style={{ color: '#000' }} onClick={toProfile}>
          个人信息
        </span>
      ),
      key: '2',
    },
  ];
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
