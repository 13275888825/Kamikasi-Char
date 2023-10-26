/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-26 09:36:33
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-26 09:46:37
 * @FilePath: \Kamikasi Char\src\pages\ProfileSettings.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReadOutlined, UploadOutlined } from '@ant-design/icons';
import { Form, Input, Select, message, Button } from 'antd';
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
  return (
    <div id='add'>
      <h2 className='title'>Create a Room</h2>
      <div className='p'>
        For more information about Character creation, see
        <a
          href='https://book.character.ai/character-book/welcome-to-character-book'
          className='bookLink'
        >
          <ReadOutlined />
          <span> Character Book</span>
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
          label={<span className='label'>1. Room Name</span>}
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <span>examples: Lincoln-Einstein, Music Lovers, Sci-Fi discuss.</span>
          <Input />
        </Form.Item>
        <Form.Item
          label={<span className='label'>2. Add Characters</span>}
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <span>
            Please enter the names or ids of the characters you want to add to
            this room. Note: Only the top 5000 public characters are available
            for now.
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
          label={<span className='label'>3.Room Topic (optional)</span>}
        >
          <span>
            What should happen in this room. Characters will try to follow it.
            Examples: Play by play superhero battle, Discuss the latest episode
            of Game of Thrones.
          </span>
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default ProfileSettings;
