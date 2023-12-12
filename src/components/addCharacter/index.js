/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-19 09:44:35
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-12-12 14:48:24
 * @FilePath: \web\src\components\addCharacter\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from 'react';
import style from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { ReadOutlined, UploadOutlined, LoadingOutlined } from '@ant-design/icons';
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
  Image,
  Spin,
} from 'antd';
import './pubilc.css';
import axios from 'axios';
const { TextArea } = Input;
const { Search } = Input;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [prompt,setPrompt] = useState('')
  const changePrompt = (e)=>{
    console.log(e.target.value);
    setPrompt(e.target.value)
  };
  const showModal = () => {
    // setOpen(true);
    navigate('/createImage');
  };
  const hideModal = () => {
    setOpen(false);
  };
  const ModalOpen = () => {
    setIsModalOpen(true);
  };
  const ModalOk = () => {
    // setIsModalOpen(false);
    setLoading(true);
    console.log(prompt,';;;;;');
    axios
    .post('/api2/sdapi/v1/txt2img', {
      denoising_strength: 0,
      prompt: prompt,
      negative_prompt: '',
      seed: 0,
      batch_size: 2,
      n_iter: 1,
      steps: 20,
      cfg_scale: 7,
      width: 512,
      height: 512,
      restore_faces: false,
      tiling: false,
      sampler_name: 'PLMS',
      enable_hr: false,
    })
    .then(response => {
      // setSpinning(false);
      console.log(response.data.images);
      setUrl(response.data.images[0])
    }).catch(error => {
      console.error('请求失败', error);
    })
    .finally(() => {
      setLoading(false); // 请求完成后设置 loading 为 false
    });
  };
  const ModalCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    console.log(intl.get('public'), 'opopop');
  }, [])
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
              <Button className={style.btns} onClick={ModalOpen} loading={loading}>
                <a> create dialog </a>
              </Button>
              <Modal title="Create an image for your avatar " open={isModalOpen} onOk={ModalOk} onCancel={ModalCancel}>
                <TextArea placeholder='Clearly describe your desired image.' onChange={changePrompt} />
                {loading ? (
                  <Spin
                    indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                  />
                ) : (
                  url && <Image width='300px' style={{ margin: '20px' }} src={`data:image/jpg;base64,${url}`} />
                )}
              </Modal>
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
