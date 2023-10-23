import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Space, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate('/login');
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
