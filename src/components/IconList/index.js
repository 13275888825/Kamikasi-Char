/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-19 09:15:49
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-19 09:36:24
 * @FilePath: \web\src\components\IconList\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import {
  QuestionCircleOutlined,
  SearchOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
import { fontSize } from '@mui/system';
const iconList = () => {
  return (
    <div>
      <Space size='large'>
        <QuestionCircleOutlined
          style={{ fontSize: '24px', cursor: 'pointer' }}
        />
        <SearchOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
        <ReadOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
      </Space>
    </div>
  );
};
export default iconList;
