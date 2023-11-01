/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-01 15:45:37
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-01 15:45:53
 * @FilePath: \KamikasiChar\src\utils\api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// api.js

import axios from 'axios';

// 创建一个axios实例
const instance = axios.create({
  baseURL: 'http://localhost:3001', // 设置基本URL
});

export default instance;
