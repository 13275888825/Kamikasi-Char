/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-18 13:47:31
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-18 13:47:57
 * @FilePath: \web\src\pages\Home2.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react';
import { TbHome2 } from 'react-icons/tb';

const Home2 = () => {
  useEffect(() => {
    console.log('页面初次渲染时调用');
  }, []);
  return (
    <div className='home'>
      <div></div>
    </div>
  );
};

export default Home2;
