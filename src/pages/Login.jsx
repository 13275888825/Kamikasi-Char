import { Card, Form, Input, Checkbox, Button, message } from 'antd';
// 导入样式文件
import './login.scss';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
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

  return (
    <div className='login'>
      <Card className='login-container'>
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
        >
          <Form.Item
            name='mobile'
            rules={[
              {
                required: true,
                message: '请输入手机号',
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '请输入正确的手机号',
                validateTrigger: 'onBlur',
              },
            ]}
          >
            <Input size='large' placeholder='请输入手机号' />
          </Form.Item>
          <Form.Item
            name='code'
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
              {
                len: 6,
                message: '请输入6位密码',
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
      </Card>
    </div>
  );
}

export default Login;
