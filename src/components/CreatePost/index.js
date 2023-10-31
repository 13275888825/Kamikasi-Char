/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-30 14:58:26
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-30 16:27:06
 * @FilePath: \Kamikasi Char\src\components\createPost\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Card, Avatar, Button, Form, Input, message, Space } from 'antd';
const { Meta } = Card;
import { UserOutlined, CopyOutlined } from '@ant-design/icons';
import style from './index.module.css';
export default function CreatePost() {
  const [form] = Form.useForm();
  const onFinish = () => {
    message.success('Submit success!');
  };
  const onFinishFailed = () => {
    message.error('Submit failed!');
  };
  const onFill = () => {};
  return (
    <div>
      <Card
        type='inner'
        title='Create Post'
        bordered={false}
        style={{
          width: '50vw',
          height: '100vh',
        }}
      >
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
                color: '#222',
              }}
            >
              You’re wasting my time. I literally rule the world.
            </div>
          </div>
          <div className={style.icon}>
            <CopyOutlined />
          </div>
        </div>
        <div className={style.footer}>
          <Form
            form={form}
            layout='vertical'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              name='title'
              label='Add a title'
              rules={[
                {
                  required: true,
                },
                {
                  type: 'url',
                  warningOnly: true,
                },
                {
                  type: 'string',
                  min: 6,
                },
              ]}
            >
              <Input
                style={{
                  width: '40vw',
                  background: '#aaa',
                }}
                className={style.input}
                placeholder='input placeholder'
              />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type='primary' htmlType='submit'>
                  Cancel
                </Button>
                <Button htmlType='button' onClick={onFill}>
                  Post
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  );
}
