/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-23 09:56:50
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-23 10:37:10
 * @FilePath: \web\src\pages\search.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import './search.css';
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const search = () => {
  return (
    <div className='home'>
      <Search
        style={{ backgroundColor: 'transparent' }}
        placeholder='input search text'
        allowClear
        enterButton='Search'
        size='large'
        onSearch={onSearch}
      />
    </div>
  );
};

export default search;
