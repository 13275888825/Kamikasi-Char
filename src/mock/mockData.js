/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-24 14:40:05
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-24 14:59:15
 * @FilePath: \Kamikasi Char\src\mock\mockData.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from 'mockjs';

let data_success = {
  status: 'ok',
};
let data_error = {
  status: 'error',
};
export default Mock.mock('/api/login/account', 'post', req => {
  console.log(req, 'req');
  let req_data = JSON.parse(req.body);
  console.log(req_data, 'req_data');
  if (req_data.username && req_data.password) {
    return data_success;
  }
  return data_error;
});
