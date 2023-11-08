import React, { useEffect, useState } from 'react';
import {
  Select,
  InputNumber,
  Tabs,
  Input,
  Button,
  Radio,
  Image,
  Checkbox,
  Tag,
  Progress,
} from 'antd';
import { SmileOutlined, LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';
const { TabPane } = Tabs;
const { TextArea } = Input;
import style from './index.module.css';
import './index.css';
const Feed = () => {
  useEffect(() => {}, []);
  const [value, setValue] = useState(1);
  const [url, setUrl] = useState('');
  const [prompt, setPrompt] = useState('');
  const [navigate, setNavigate] = useState('');
  const [steps, setSteps] = useState(20);
  const [width, setWidth] = useState(512);
  const [height, setHeight] = useState(512);
  const [batch, setBatch] = useState(2);
  const [niter, setNiter] = useState(1);
  const [cfg, setCfg] = useState(7);
  const [denoising, setDenoising] = useState(0);
  const [seed, setSeed] = useState(0);
  const [sampler, setSampler] = useState('PLMS');
  const [restore, setRestore] = useState(false);
  const [tilling, setTilling] = useState(false);
  const [percent, setPercent] = useState(0);
  const [hr, setHr] = useState(false);
  const changePrompt = event => {
    setPrompt(event.target.value);
  };
  const changeNavigate = event => {
    setNavigate(event.target.value);
  };
  const changeSteps = value => {
    setSteps(value);
  };
  const changeWidth = value => {
    setWidth(value);
  };
  const changeHeight = value => {
    setHeight(value);
  };
  const changeBatch = value => {
    setBatch(value);
  };
  const changeNiter = value => {
    setNiter(value);
  };
  const changeCfg = value => {
    setCfg(value);
  };
  const changeDenoising = value => {
    setDenoising(value);
  };
  const changeSeed = value => {
    console.log(value, 'val');
    setSeed(value);
  };
  const changeSampler = event => {
    setSampler(event.target.value);
  };
  const changeRestore = event => {
    console.log(event.target.checked);
    setRestore(event.target.checked);
  };
  const changeTilling = event => {
    setTilling(event.target.checked);
  };
  const changeHr = event => {
    setHr(event.target.checked);
  };
  const creatImage = () => {
    console.log(prompt, navigate, '00000');
    console.log(
      steps,
      width,
      height,
      batch,
      niter,
      cfg,
      denoising,
      seed,
      '222222'
    );
    console.log(sampler, '4444');
    console.log(restore, tilling, hr, '6666');
    // setSpinning(true);
    setPercent(20);
    setPercent(30);
    setPercent(40);
    setPercent(50);
    setPercent(60);
    axios
      .post('http://localhost:3000/sdapi/v1/txt2img', {
        denoising_strength: denoising,
        prompt: prompt,
        negative_prompt: navigate,
        seed: seed,
        batch_size: batch,
        n_iter: niter,
        steps: steps,
        cfg_scale: cfg,
        width: width,
        height: height,
        restore_faces: restore,
        tiling: tilling,
        sampler_name: sampler,
        enable_hr: hr,
      })
      .then(response => {
        // setSpinning(false);
        console.log(response.data.images);
        setUrl(response.data.images[0]);
        setPercent(100);
      });
  };
  return (
    <div style={{ position: 'absolute', left: '0' }}>
      <div className={style.head}>
        <div className={style.select}>
          <span className={style.label}>Stable Diffusion模型</span>
          <Select
            showSearch
            style={{
              width: 200,
              color: '#fff',
            }}
            placeholder={<span>Stable Diffusion</span>}
            optionFilterProp='children'
            filterOption={(input, option) =>
              (option?.label ?? '').includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '')
                .toLowerCase()
                .localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
              {
                value: '1',
                label: 'Not Identified',
              },
              {
                value: '2',
                label: 'Closed',
              },
              {
                value: '3',
                label: 'Communicated',
              },
              {
                value: '4',
                label: 'Identified',
              },
              {
                value: '5',
                label: 'Resolved',
              },
              {
                value: '6',
                label: 'Cancelled',
              },
            ]}
          />
        </div>
        <div className={style.select}>
          <span className={style.label}>AVE模型</span>
          <Select
            showSearch
            style={{
              width: 200,
              color: '#fff',
            }}
            placeholder={<span>Stable Diffusion</span>}
            optionFilterProp='children'
            filterOption={(input, option) =>
              (option?.label ?? '').includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '')
                .toLowerCase()
                .localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
              {
                value: '1',
                label: 'Not Identified',
              },
              {
                value: '2',
                label: 'Closed',
              },
              {
                value: '3',
                label: 'Communicated',
              },
              {
                value: '4',
                label: 'Identified',
              },
              {
                value: '5',
                label: 'Resolved',
              },
              {
                value: '6',
                label: 'Cancelled',
              },
            ]}
          />
        </div>
        <div className={style.select}>
          <span className={style.label}>CLIP终止层数</span>
          <InputNumber min={1} max={10} defaultValue={3} />
        </div>
      </div>
      <Tabs defaultActiveKey='1' className={style.tabs}>
        <TabPane
          tab={
            <span>
              <SmileOutlined /> <strong>文生图</strong>
            </span>
          }
          key='1'
        >
          <div className={style.form}>
            <div className={style.picture}>
              <TextArea
                className={style.area}
                onChange={changePrompt}
                rows={4}
                placeholder='正向提示词(按Ctrl+Enter或Alt+Enter生成)'
                maxLength={6}
              />
              <span style={{ marginTop: '10px' }}>提示词(0/75)</span>
            </div>
            <Button className={style.btn} type='primary' onClick={creatImage}>
              生成
            </Button>
          </div>
        </TabPane>
      </Tabs>

      <div className={style.tabs}>
        <div className={style.picture}>
          <TextArea
            className={style.area}
            onChange={changeNavigate}
            rows={4}
            placeholder='反向提示词(按Ctrl+Enter或Alt+Enter生成)'
            maxLength={6}
          />
          <span style={{ marginTop: '10px' }}>反向提示词(0/75)</span>
        </div>
      </div>
      <Tabs defaultActiveKey='1' className={style.tabs}>
        <TabPane
          className={style.createTabs}
          tab={
            <span>
              <SmileOutlined /> <strong>生成</strong>
            </span>
          }
          key='1'
        >
          <div>
            <div>
              <div>
                <span style={{ margin: '6px' }}>迭代步数(Steps)</span>
                <InputNumber
                  onChange={changeSteps}
                  style={{ margin: '6px' }}
                  defaultValue={20}
                />
              </div>
              <div className={style.create}>
                <span style={{ margin: '6px' }}>采样方法(Sampler)</span>
                <Radio.Group
                  onChange={changeSampler}
                  value={sampler}
                  style={{ margin: '6px' }}
                >
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM++2M Karras'>DPM++2M Karras</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM++ SDE Karra'>DPM++ SDE Karras</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM++ 2M SDE Exponential'>
                      DPM++ 2M SDE Exponential
                    </Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM++ 2M SDE Karras'>
                      DPM++ 2M SDE Karras
                    </Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='Eulera'>Eulera</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='Euler'>Euler</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='LMS'>LMS</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM2'>DPM2</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM2a'>DPM2a</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM++ 2s a'>DPM++ 2s a</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM++2M'>DPM++2M</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM++ SDE'>DPM++ SDE</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM++ 2M SDE'>DPM++ 2M SDE</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM++ 2M SDE Heun'>DPM++ 2M SDE Heun</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM++ 2M SDE Heun Karras'>
                      DPM++ 2M SDE Heun Karras
                    </Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM++ 2M SDE Heun Exponential'>
                      DPM++ 2M SDE Heun Exponential
                    </Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM++ 3M SDE'>DPM++ 3M SDE</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM++ 3M SDE Karras'>
                      DPM++ 3M SDE Karras
                    </Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM++ 3M SDE Exponentia'>
                      DPM++ 3M SDE Exponential
                    </Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM adaptive'>DPM adaptive</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='LMS karras'>LMS karras</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM2 Karras'>DPM2 Karras</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM2 a Karras'>DPM2 a Karras</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DPM++ 2S karras'>DPM++ 2S karras</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='Restart'>Restart</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='DDIM'>DDIM</Radio>
                  </Tag>
                  <Tag className={style.tags} color='#374151'>
                    <Radio value='Unipc'>Unipc</Radio>
                  </Tag>
                </Radio.Group>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ margin: '6px' }}>
                <Checkbox onChange={changeRestore}>启用人像修复</Checkbox>
              </div>
              <div style={{ margin: '6px' }}>
                <Checkbox onChange={changeTilling}>平铺(Tiling)</Checkbox>
              </div>
              <div style={{ margin: '6px' }}>
                <Checkbox onClick={changeHr}>高分辨率修复</Checkbox>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div className={style.select}>
                <span className={style.label}>宽度</span>
                <InputNumber
                  onChange={changeWidth}
                  style={{ margin: '6px' }}
                  defaultValue={512}
                />
              </div>
              <div className={style.select}>
                <span className={style.label}>高度</span>
                <InputNumber
                  onChange={changeHeight}
                  style={{ margin: '6px' }}
                  defaultValue={512}
                />
              </div>
              <div className={style.select}>
                <span className={style.label}>采样器批大小</span>
                <InputNumber
                  onChange={changeBatch}
                  style={{ margin: '6px' }}
                  defaultValue={1}
                />
              </div>
              <div className={style.select}>
                <span className={style.label}>采样器迭代次数</span>
                <InputNumber
                  onChange={changeNiter}
                  style={{ margin: '6px' }}
                  defaultValue={1}
                />
              </div>
              <div className={style.select}>
                <span className={style.label}>提示词引导系数(CFG Scale)</span>
                <InputNumber
                  onChange={changeCfg}
                  style={{ margin: '6px', width: '200px' }}
                  defaultValue={7}
                />
              </div>
            </div>
            <div className={style.select}>
              <span className={style.label}>降噪强度(Denoising strength)</span>
              <InputNumber
                onChange={changeDenoising}
                style={{ margin: '6px', width: '200px' }}
                defaultValue={0}
              />
            </div>
            <div>
              <span className={style.label}>随机数种子(Seed)</span>
              <InputNumber
                onChange={changeSeed}
                defaultValue={-1}
                style={{ margin: '6px', width: '90%' }}
              ></InputNumber>
            </div>
          </div>
          <div>
            <Image
              width='500px'
              fallback='data:image/png;base64,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'
              src={`data:image/jpg;base64,${url}`}
            />
            <Progress percent={percent} status='processing' />
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Feed;
