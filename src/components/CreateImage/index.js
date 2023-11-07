import React, { useEffect, useState } from 'react';
import { Select, InputNumber, Tabs, Input, Button, Radio } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
const { TextArea } = Input;
import style from './index.module.css';
const Feed = () => {
  useEffect(() => {}, []);
  const [value, setValue] = useState(1);
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
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
                rows={4}
                placeholder='正向提示词(按Ctrl+Enter或Alt+Enter生成)'
                maxLength={6}
              />
              <span style={{ marginTop: '10px' }}>提示词(0/75)</span>
            </div>
            <Button className={style.btn} type='primary'>
              生成
            </Button>
          </div>
        </TabPane>
      </Tabs>
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
                rows={4}
                placeholder='反向提示词(按Ctrl+Enter或Alt+Enter生成)'
                maxLength={6}
              />
              <span style={{ marginTop: '10px' }}>反向提示词(0/75)</span>
            </div>
          </div>
        </TabPane>
      </Tabs>
      <Tabs defaultActiveKey='1'>
        <TabPane
          className={style.createTabs}
          tab={
            <span>
              <SmileOutlined /> <strong>生成</strong>
            </span>
          }
          key='1'
        >
          <div className={style.text}>
            <div>
              <div className={style.create}>
                <span style={{ margin: '6px' }}>迭代步数(Steps)</span>
                <InputNumber
                  style={{ margin: '6px' }}
                  min={1}
                  max={10}
                  defaultValue={3}
                />
              </div>
              <div className={style.create}>
                <span style={{ margin: '6px' }}>采样方法(Sampler)</span>
                <Radio.Group
                  onChange={onChange}
                  value={value}
                  style={{ margin: '6px' }}
                >
                  <Radio value={1}>DPM++2M Karras</Radio>
                  <Radio value={2}>DPM++ SDE Karras</Radio>
                  <Radio value={3}>DPM++ 2M SDE Exponential</Radio>
                  <Radio value={4}>DPM++ 2M SDE Karras</Radio>
                  <Radio value={5}>Eulera</Radio>
                  <Radio value={6}>Euler</Radio>
                  <Radio value={7}>LMS</Radio>
                  <Radio value={8}>DPM2</Radio>
                  <Radio value={9}>DPM2a</Radio>
                  <Radio value={10}>DPM++ 2s a</Radio>
                  <Radio value={11}>DPM++2M</Radio>
                  <Radio value={12}>DPM++ SDE</Radio>
                  <Radio value={13}>DPM++ 2M SDE</Radio>
                  <Radio value={14}>DPM++ 2M SDE Heun</Radio>
                  <Radio value={15}>DPM++ 2M SDE Heun Karras</Radio>
                  <Radio value={16}>DPM++ 2M SDE Heun Exponential</Radio>
                  <Radio value={17}>DPM++ 3M SDE</Radio>
                  <Radio value={18}>DPM++ 3M SDE Karras</Radio>
                  <Radio value={19}>DPM++ 3M SDE Exponential</Radio>
                  <Radio value={20}>DPM adaptive</Radio>
                  <Radio value={21}>LMS karras</Radio>
                  <Radio value={22}>DPM2 Karras</Radio>
                  <Radio value={23}>DPM2 a Karras</Radio>
                  <Radio value={24}>DPM++ 2S karras</Radio>
                  <Radio value={25}>Restart</Radio>
                  <Radio value={26}>DDIM</Radio>
                  <Radio value={27}>Unipc</Radio>
                </Radio.Group>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <Select
                showSearch
                style={{
                  width: '50%',
                  color: '#fff',
                  margin: '6px',
                }}
                placeholder={<span>高分辨率修复(Hires.fix)</span>}
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
              <Select
                showSearch
                style={{
                  width: '50%',
                  color: '#fff',
                  margin: '6px',
                }}
                placeholder={<span>Refiner</span>}
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
            <div style={{ display: 'flex' }}>
              <div className={style.select}>
                <span className={style.label}>宽度</span>
                <InputNumber
                  style={{ margin: '6px' }}
                  min={1}
                  max={10}
                  defaultValue={3}
                />
              </div>
              <div className={style.select}>
                <span className={style.label}>总批次数</span>
                <InputNumber
                  style={{ margin: '6px' }}
                  min={1}
                  max={10}
                  defaultValue={3}
                />
              </div>
              <div className={style.select}>
                <span className={style.label}>高度</span>
                <InputNumber
                  style={{ margin: '6px' }}
                  min={1}
                  max={10}
                  defaultValue={3}
                />
              </div>
              <div className={style.select}>
                <span className={style.label}>单批次数</span>
                <InputNumber
                  style={{ margin: '6px' }}
                  min={1}
                  max={10}
                  defaultValue={3}
                />
              </div>
              <div className={style.select}>
                <span className={style.label}>提示词引导系数(CFG Scale)</span>
                <InputNumber
                  style={{ margin: '6px', width: '200px' }}
                  min={1}
                  max={10}
                  defaultValue={3}
                />
              </div>
            </div>
            <div>
              <span className={style.label}>随机数种子(Seed)</span>
              <Input style={{ margin: '6px' }}></Input>
            </div>
          </div>
          <div className={style.image}></div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Feed;
