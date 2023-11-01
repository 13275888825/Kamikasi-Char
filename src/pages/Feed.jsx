/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-18 13:38:09
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-01 16:02:07
 * @FilePath: \web\src\pages\Feed.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react';
import api from '../utils/api';
const Feed = () => {
  useEffect(() => {
    const id = 3;
    api
      .get('/api/data', { params: { id } })
      .then(response => {
        // 处理响应
        console.log(response.data, 'res');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <div className='home'>
      <h1>feed页面</h1>
    </div>
  );
};

export default Feed;
