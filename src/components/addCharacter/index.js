/* eslint-disable react/no-unescaped-entities */
/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-19 09:44:35
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-26 10:31:07
 * @FilePath: \web\src\components\addCharacter\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import style from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { ReadOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Checkbox,
  Select,
  Space,
  Button,
  Modal,
  Upload,
  message,
} from 'antd';
import './pubilc.css';
const options = [
  {
    value: 'Public',
    label: 'Public Antyone can chat',
  },
  {
    value: 'Unlisted',
    label: 'Antyone with the link can chat',
  },
  {
    value: 'Private',
    label: 'Only you can chat',
  },
];
const fileList = [];
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
const AddCharacter = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    // setOpen(true);
    navigate('/createImage');
  };
  const hideModal = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  return (
    <div id={style.add}>
      <h2 className={style.title}>Create a Character</h2>
      <div className={style.p}>
        For more information about Character creation, see
        <a
          href='https://book.character.ai/character-book/welcome-to-character-book'
          className={style.bookLink}
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
          label={<span className={style.label}>1.Name</span>}
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <span>The name can include first and last names.</span>
          <Input />
        </Form.Item>
        <Form.Item label={<span className={style.label}>2.Gretting</span>}>
          <span>
            eslint-disable-next-line react/no-unescaped-entities What would they
            say to introduce themselves? For example, "Albert Einstein" could
            say: "Hello I am Albert Einstein. I was born in March 14, 1879, and
            I conceived of the theory of special relativity and general
            relativity."
          </span>
          <Input.TextArea size='large' />
        </Form.Item>
        <Form.Item
          label={<span className={style.label}>3.Toggle Image Generation</span>}
        >
          <div>This Character generates images alongside text.</div>
          <Checkbox>Enable image generation for this Character.</Checkbox>
        </Form.Item>
        <Form.Item label={<span className={style.label}>4.Visibility</span>}>
          <span>Who is allowed to talk to them?</span>
          <Select
            style={{
              width: '100%',
              background: 'transparent',
            }}
            placeholder='Tags Mode'
            onChange={handleChange}
            options={options}
          />
        </Form.Item>
        <Form.Item label={<span className={style.label}>Avatar</span>}>
          <div style={{ margin: 0, padding: 0, color: '#fff' }}>
            You can either create an image from text or upload an image.
          </div>
          <Space style={{ display: 'block' }}>
            <div>
              <Button className={style.btns} onClick={showModal}>
                <a> Create Image</a>
              </Button>
              <Modal
                title='创建图片'
                open={open}
                onOk={hideModal}
                onCancel={hideModal}
                okText='确认'
                cancelText='取消'
              ></Modal>
            </div>
            <div style={{ color: '#fff' }}>or</div>
            <div>
              <Upload
                action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
                listType='picture'
                defaultFileList={[...fileList]}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </div>
          </Space>
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
export default AddCharacter;
