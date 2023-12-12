/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-08 14:00:25
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-09 11:25:18
 * @FilePath: \KamikasiChar\src\setupProxy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000', //请求的真实地址
      changeOrigin: true,
    })
  );
  app.use(
    '/api2',
    createProxyMiddleware({
      target: 'http://127.0.0.1:7860', // 目标服务器2的地址
      changeOrigin: true,
      pathRewrite: {
        '^/api2': '', // 移除'/api2'前缀
      },
    })
  );
  app.use(
    '/api3',
    createProxyMiddleware({
      target: 'http://127.0.0.1', // 目标服务器2的地址
      changeOrigin: true,
      pathRewrite: {
        '^/api3': '', // 移除'/api2'前缀
      },
    })
  );
  app.use(
    '/api4',
    createProxyMiddleware({
      target: 'http://192.168.1.67:8080', // 目标服务器2的地址
      changeOrigin: true,
      pathRewrite: {
        '^/api4': '', // 移除'/api2'前缀
      },
    })
  );
  app.get('/api99/videos/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join('/project/videos', filename);
    res.sendFile(filePath);
  });
  app.get('/api99/live/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join('/project/live', filename);
    res.sendFile(filePath);
  });
};
