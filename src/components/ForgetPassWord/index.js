/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-23 15:19:45
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-08 14:07:48
 * @FilePath: \KamikasiChar\src\pages\Login.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form, Input, Checkbox, Button, message } from 'antd';
// 导入样式文件
import './index.scss';
import { useNavigate } from 'react-router-dom';
import { WechatFilled, ContactsFilled } from '@ant-design/icons';
import { Tabs } from 'antd';
import logo from '../../assets/images/logo.png';
const Login = ({ setAuthToken }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async values => {
    setLoading(true);
    const requestData = {
      email: values.email, // Assuming you are using email for forget password
    };

    // Send a POST request for forget password
    axios
      .post('http://localhost:3001/forget-password', requestData)
      .then(response => {
        // Request successful, handle response data
        console.log('Response:', response.data);
        // You can show a success message or redirect the user
        message.success('重置密码的链接已发送到您的邮箱，请查收。');
        navigate('/login'); // Redirect to the login page
      })
      .catch(error => {
        // Request failed, handle error
        console.error('Error:', error);
        // You can show an error message to the user
        message.error('重置密码失败，请稍后重试。');
      });

    setLoading(false);
  };
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className='login'>
      <Card className='login-container'>
        <div>
          <img className='login-logo' src={logo} alt='' />
          <Form name='forget-password' onFinish={onFinish}>
            <Form.Item
              name='email'
              rules={[
                { required: true, message: '请输入注册邮箱' },
                { type: 'email', message: '请输入有效的邮箱地址' },
              ]}
            >
              <Input size='large' placeholder='请输入注册邮箱' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' size='large' block>
                提交
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: 'center' }}>
            <Button type='link' size='large' onClick={handleLogin}>
              返回登录
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
