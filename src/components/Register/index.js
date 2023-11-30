import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './index.scss';
const Registration = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async values => {
    setLoading(true);

    // Assuming your registration API endpoint is http://localhost:3001/register
    axios
      .post('http://localhost:3001/register', values)
      .then(response => {
        console.log('Registration Response:', response.data);
        // You can handle the registration success logic here
        message.success('Registration successful!');
        navigate('/login'); // Redirect to the login page after successful registration
      })
      .catch(error => {
        console.error('Registration Error:', error);
        message.error('Registration failed. Please try again.');
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
          <Form name='registration' onFinish={onFinish}>
            <Form.Item
              name='username'
              rules={[
                { required: true, message: 'Please input your username' },
              ]}
            >
              <Input size='large' placeholder='Username' />
            </Form.Item>
            <Form.Item
              name='email'
              rules={[{ required: true, message: 'Please input your email' }]}
            >
              <Input size='large' placeholder='Email' />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                { required: true, message: 'Please input your password' },
              ]}
            >
              <Input type='password' size='large' placeholder='Password' />
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                size='large'
                block
                loading={loading}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: 'center', color: '#fff' }}>
            Already have an account?{' '}
            <span
              style={{ color: '#1677FF', cursor: 'pointer' }}
              onClick={handleLogin}
            >
              Login here
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Registration;
