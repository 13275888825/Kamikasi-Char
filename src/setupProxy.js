/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-08 14:00:25
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-08 14:04:51
 * @FilePath: \KamikasiChar\src\setupProxy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

// eslint-disable-next-line no-undef
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000', //请求的真实地址
      changeOrigin: true,
    })
  );
};
