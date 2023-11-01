/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-23 15:19:45
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-01 17:30:45
 * @FilePath: \KamikasiChar\src\pages\Login.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import axios from '../utils/api';
import { Card, Form, Input, Checkbox, Button, message } from 'antd';
// 导入样式文件
import './login.scss';
import { useNavigate } from 'react-router-dom';
import { WechatFilled, ContactsFilled } from '@ant-design/icons';
import WxLogin from '../components/WxLogin';
import '../mock/mockData';
import { Tabs } from 'antd';
import logo from '../assets/images/logo.png';
const Login = ({ setAuthToken }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async values => {
    setLoading(true);
    const requestData = {
      phone: values.phone,
      password: values.password,
    };

    // 发送POST请求
    axios
      .post('http://localhost:3001/login', requestData)
      .then(response => {
        // 请求成功，处理响应数据
        console.log('Response:', response.data);
        if (response.data.token) {
          navigate('/');
          localStorage.setItem('token', response.data.token);
        }
      })
      .catch(error => {
        // 请求失败，处理错误
        console.error('Error:', error);
      });

    setLoading(false);
  };

  return (
    <div className='login'>
      <Card className='login-container'>
        {/* <Tabs
          centered
          defaultActiveKey='1'
          items={items}
          indicatorSize={origin => origin - 16}
        /> */}
        <div>
          <img className='login-logo' src={logo} alt='' />
          {/* 登录表单 */}
          {/* 子项用到的触发事件 需要在Form中都声明一下才可以 */}
          <Form name='login' onFinish={onFinish}>
            <Form.Item
              name='phone'
              rules={[
                { required: true, message: 'Please input your phone number' },
              ]}
            >
              <Input size='large' placeholder='请输入手机号' />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                { required: true, message: 'Please input your password' },
              ]}
            >
              <Input size='large' placeholder='请输入密码' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' size='large' block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default Login;
