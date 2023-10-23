/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-19 09:15:49
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-23 10:48:43
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
import { useNavigate } from 'react-router-dom';
const iconList = () => {
  const navigate = useNavigate();
  const toHelp = () => {
    navigate('help');
  };
  const search = () => {
    navigate('search');
  };
  const toRed = () => {
    window.open('https://discord.gg/e4AYNnFg2F', 'mozillaTab');
  };
  return (
    <div>
      <Space size='large'>
        <QuestionCircleOutlined
          // eslint-disable-next-line no-undef
          onClick={toHelp}
          style={{ fontSize: '24px', cursor: 'pointer' }}
        />
        <SearchOutlined
          onClick={search}
          style={{ fontSize: '24px', cursor: 'pointer' }}
        />
        <ReadOutlined
          onClick={toRed}
          style={{ fontSize: '24px', cursor: 'pointer' }}
        />
      </Space>
    </div>
  );
};
export default iconList;
