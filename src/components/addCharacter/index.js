/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-19 09:44:35
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-12-05 14:02:01
 * @FilePath: \web\src\components\addCharacter\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState,useEffect } from 'react';
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
import intl from 'react-intl-universal';
const options = [
  {
    value: 'Public',
    label: <>{intl.get('public')}</>,
  },
  {
    value: 'Unlisted',
    label: <>{intl.get('link')}</>,
  },
  {
    value: 'Private',
    label: <>{intl.get('only')}</>,
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
  useEffect(()=>{
    console.log(intl.get('public'),'opopop');
  },[])
  const navigate = useNavigate();
  return (
    <div id={style.add}>
      <h2 className={style.title}>{intl.get('creatTitle')}</h2>
      <div className={style.p}>
      {intl.get('creatInfor')}
        <a
          href='https://book.character.ai/character-book/welcome-to-character-book'
          className={style.bookLink}
        >
          <ReadOutlined />
          <span>{intl.get('book')}</span>
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
          label={<span className={style.label}>1.{intl.get('creatName')}</span>}
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <span>{intl.get('creatFirstTips')}</span>
          <Input />
        </Form.Item>
        <Form.Item label={<span className={style.label}>2.{intl.get('gretting')}</span>}>
          <span>
          {intl.get('grttingTips')}
          </span>
          <Input.TextArea size='large' />
        </Form.Item>
        <Form.Item
          label={<span className={style.label}>3. {intl.get('toggle')}</span>}
        >
          {/* <div>{intl.get('toggle')}</div> */}
          <Checkbox>{intl.get('enable')}</Checkbox>
        </Form.Item>
        <Form.Item label={<span className={style.label}>4.{intl.get('visibility')}</span>}>
          <span>{intl.get('visibiltyTitle')}</span>
          <Select
            style={{
              width: '100%',
              background: 'transparent',
            }}
            placeholder={intl.get('tags')}
            onChange={handleChange}
            options={[
              {
                value: 'Public',
                label: <>{intl.get('public')}</>,
              },
              {
                value: 'Unlisted',
                label: <>{intl.get('link')}</>,
              },
              {
                value: 'Private',
                label: <>{intl.get('only')}</>,
              },
            ]}
          />
        </Form.Item>
        <Form.Item label={<span className={style.label}>{intl.get('avatar')}</span>}>
          <div style={{ margin: 0, padding: 0, color: '#fff' }}>
          {intl.get('avatarTips')}
          </div>
          <Space style={{ display: 'block' }}>
            <div>
              <Button className={style.btns} onClick={showModal}>
                <a>{intl.get('creatBtn')}</a>
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
                <Button icon={<UploadOutlined />}>{intl.get('uploadBtn')}</Button>
              </Upload>
            </div>
          </Space>
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
export default AddCharacter;
