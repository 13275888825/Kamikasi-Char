/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-23 15:19:45
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-27 15:28:10
 * @FilePath: \Kamikasi Char\src\pages\Login.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Card, Form, Input, Checkbox, Button, message } from 'antd';
// 导入样式文件
import './login.scss';
import { useNavigate } from 'react-router-dom';
import { WechatFilled, ContactsFilled } from '@ant-design/icons';
import WxLogin from '../components/WxLogin';
import '../mock/mockData';
import { Tabs } from 'antd';
import axios from 'axios';
function Login() {
  const navigate = useNavigate();
  const onFinish = values => {
    console.log('success', values);
    axios({
      url: '/api/login/account',
      data: {
        username: values.mobile,
        password: values.password,
      },
      method: 'post',
    }).then(res => {
      console.log(res);
      if (res.data.status === 'ok') {
        console.log('ok');
        navigate('/');
      } else if (res.data.status === 'error') {
        alert('用户名密码错误');
      }
    });
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  //   async function onFinish (values) {
  //     console.log(values)
  //     // values：放置的是所有表单项中用户输入的内容
  //     // todo:登录
  //     const { mobile, code } = values
  //     await loginStore.getToken({ mobile, code })
  //     // 跳转首页
  //     navigate('/', { replace: true })
  //     // 提示用户
  //     message.success('登录成功')
  //   }
  const items = [
    {
      key: '1',
      label: (
        <span>
          <WechatFilled />
          微信登录
        </span>
      ),
      children: <WxLogin />,
    },
    {
      key: '2',
      label: (
        <span>
          <ContactsFilled />
          账号登录
        </span>
      ),
      children: (
        <div>
          <img
            className='login-logo'
            src='http://localhost:3000/static/media/logo.df6e95180e3a04f1ebb646f3ff77f45b.svg'
            alt=''
          />
          {/* 登录表单 */}
          {/* 子项用到的触发事件 需要在Form中都声明一下才可以 */}
          <Form
            validateTrigger={['onBlur', 'onChange']}
            initialValues={{
              remember: true,
              mobile: '',
              code: '',
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name='mobile'
              rules={[
                {
                  required: true,
                  message: '请输入邮箱',
                },
                {
                  pattern:
                    /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
                  message: '请输入正确的邮箱',
                  validateTrigger: 'onBlur',
                },
              ]}
            >
              <Input size='large' placeholder='请输入邮箱' />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: '请输入验证码',
                },
                {
                  len: 6,
                  message: '请输入验证码',
                  validateTrigger: 'onBlur',
                },
              ]}
            >
              <Input size='large' placeholder='请输入验证码' />
            </Form.Item>
            <Form.Item name='remember' valuePropName='checked'>
              <Checkbox className='login-checkbox-label'>
                我已阅读并同意「用户协议」和「隐私条款」
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit' size='large' block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
  ];
  return (
    <div className='login'>
      <Card className='login-container'>
        <Tabs
          centered
          defaultActiveKey='1'
          items={items}
          indicatorSize={origin => origin - 16}
        />
      </Card>
    </div>
  );
}

export default Login;
