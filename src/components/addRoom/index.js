/* eslint-disable prettier/prettier */
/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-19 09:47:53
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-12-05 13:49:05
 * @FilePath: \web\src\components\addRoom\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable react/no-unescaped-entities */
/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-19 09:44:35
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-19 17:28:21
 * @FilePath: \web\src\components\addCharacter\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from 'react';
import style from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { ReadOutlined, UploadOutlined } from '@ant-design/icons';
import { Form, Input, Select, message, Button } from 'antd';
import intl from 'react-intl-universal';
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange2 = value => {
  console.log(`selected ${value}`);
};
const props = {
  name: 'file',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const handleChange = value => {
  console.log(`selected ${value}`);
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const onFinish = values => {
  console.log(values);
};
const AddRoom = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  useEffect(() => {
    console.log(style, 'style');
  }, []);
  const navigate = useNavigate();
  return (
    <div id={style.add}>
      <h2 className={style.title}>{intl.get('createRoom')}</h2>
      <div className={style.p}>
        {intl.get('creatInfor')}
        <a
          href='https://book.character.ai/character-book/welcome-to-character-book'
          className={style.booklink}
        >
          <ReadOutlined />
          <span> {intl.get('book')}</span>
        </a>
      </div>
      <Form
        layout='vertical'
        name='nest-messages'
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          label={<span className={style.label}>1. {intl.get('roomName')}</span>}
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <span>{intl.get('roomTips')}</span>
          <Input />
        </Form.Item>
        <Form.Item
          label={<span className={style.label}>2. {intl.get('addCharacter')}</span>}
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <span>
          {intl.get('addTips')}
          </span>
          <Select
            mode='tags'
            style={{
              width: '100%',
            }}
            placeholder='Tags Mode'
            onChange={handleChange2}
            options={options}
          />
        </Form.Item>
        <Form.Item
          label={<span className={style.label}>3. {intl.get('topic')}</span>}
        >
          <span>
          {intl.get('topicTips')}
          </span>
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
          {intl.get('submit')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddRoom;
