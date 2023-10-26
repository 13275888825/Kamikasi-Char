/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-26 09:36:33
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-26 11:50:38
 * @FilePath: \Kamikasi Char\src\pages\ProfileSettings.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReadOutlined, UploadOutlined, LeftOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Select,
  message,
  Button,
  Modal,
  Upload,
  Space,
} from 'antd';
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
const ProfileSettings = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const toHome = () => {
    navigate('/');
  };
  return (
    <div
      id='add'
      style={{
        position: 'relative',
        right: '30%',
      }}
    >
      <div style={{ display: 'flex' }}>
        <LeftOutlined
          onClick={toHome}
          style={{
            color: '#fff',
            fontSize: '24px',
            position: 'relative',
            top: '-10px',
          }}
        />
        <h1
          className='title'
          style={{ color: ' rgba(229, 224, 216, 0.85)', marginLeft: '12px' }}
        >
          Profile Settings
        </h1>
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
          label={<span className='label'>Username</span>}
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <span>You can change this at any time.</span>
          <Input />
        </Form.Item>
        <Form.Item
          label={<span className='label'>Name</span>}
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <span>The name you will use for chatting.</span>
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
        <Form.Item label={<span>Avatar</span>}>
          <div style={{ margin: 0, padding: 0 }}>
            You can either create an image from text or upload an image.
          </div>
          <Space>
            <div>
              <Button onClick={showModal}>
                <a> Create Image</a>
              </Button>
              <Modal
                title='Modal'
                open={open}
                onOk={hideModal}
                onCancel={hideModal}
                okText='确认'
                cancelText='取消'
              >
                <p>Bla bla ...</p>
                <p>Bla bla ...</p>
                <p>Bla bla ...</p>
              </Modal>
            </div>
            <span>or</span>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>
                <a>Click to Upload</a>
              </Button>
            </Upload>
          </Space>
        </Form.Item>
        <div
          style={{
            width: '30vw',
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
          }}
        >
          <Button type='primary' htmlType='submit'>
            Logout
          </Button>
          <Button type='primary' danger htmlType='submit'>
            Remove Account
          </Button>
          <Button htmlType='submit'>Update</Button>
        </div>
      </Form>
    </div>
  );
};
export default ProfileSettings;
