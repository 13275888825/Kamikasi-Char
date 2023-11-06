import React, { useEffect } from 'react';
import { Select, InputNumber, Tabs, Input, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
const { TextArea } = Input;
import style from './index.module.css';
const Feed = () => {
  useEffect(() => {}, []);
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
          <div className={style.picture}>
            <TextArea rows={4} placeholder='maxLength is 6' maxLength={6} />
            <Button className={style.btn} type='primary'>
              生成
            </Button>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Feed;
