/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-24 14:40:05
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-24 16:07:07
 * @FilePath: \Kamikasi Char\src\mock\mockData.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from 'mockjs';

export default Mock.mock('/api/homelist', 'post', req => {
  let req_data = JSON.parse(req.body);
  return [
    {
      name: 'Elon Musk',
      imgUrl:
        'https://characterai.io/i/400/static/avatars/uploaded/2022/12/2/0cXVHLszZQ8idr8qGkhXB4-1PzA_qbAFmVl2V7v9NZc.webp',
    },
    {
      name: 'WhoWouldWin',
      imgUrl: 'https://characterai.io/i/400/static/avatars/WhoWouldWin2.png',
    },
    {
      name: 'CelestiAI',
      imgUrl:
        'https://characterai.io/i/400/static/avatars/uploaded/2023/3/22/WOUx3xnZRql_j1TsQfS1TcNCI30D6uoPQvlGlKdYxHg.webp',
    },
    {
      name: 'SM64 Mario',
      imgUrl:
        'https://characterai.io/i/400/static/avatars/uploaded/mSZnfioPQeMtE9sA9q6uYnVZILMosnWn21wYaaDgi6U.webp',
    },
    {
      name: 'Monster Masker',
      imgUrl:
        'https://characterai.io/i/400/static/avatars/uploaded/2022/11/1/aDxf8aQip43E1uJuveyknYOosxisP_lFI-hPHUxJZ18.webp',
    },
    {
      name: 'CelestiAI',
      imgUrl:
        'https://characterai.io/i/400/static/avatars/uploaded/2023/3/22/WOUx3xnZRql_j1TsQfS1TcNCI30D6uoPQvlGlKdYxHg.webp',
    },
  ];
});
