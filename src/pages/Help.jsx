/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-23 10:49:03
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-07 17:52:05
 * @FilePath: \web\src\pages\Help.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react';
import VideoPlay from '../components/VideoPlayer';
import axios from 'axios';
const Help = () => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const prompt = '一只可爱的小狗'; // 文本描述
    const steps = 5; // 步骤数

    // 构建请求数据
    const requestData = {
      prompt: prompt,
      steps: steps,
    };

    // 发起POST请求
    axios
      .post('http://127.0.0.1:7860/sdapi/v1/txt2img', requestData)
      .then(response => {
        // 请求成功时处理响应数据
        const imageData = response.data; // 这是返回的图像数据
        // 在这里可以将图像数据显示在你的前端应用中
      })
      .catch(error => {
        // 请求出错时处理错误
        console.error('API请求出错:', error);
      });
  }, []);
  return (
    <div className='home'>
      <VideoPlay />
    </div>
  );
};

export default Help;
