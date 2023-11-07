import React, { useEffect, useState } from 'react';
import { Select, InputNumber, Tabs, Input, Button, Radio, Image } from 'antd';
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

      <div className={style.tabs}>
        <div className={style.picture}>
          <TextArea
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
              <Input style={{ margin: '6px', width: '90%' }}></Input>
            </div>
          </div>
          <div>
            <Image
              width='500px'
              height='100%'
              src='error'
              fallback='data:image/png;base64,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'
            />
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Feed;
