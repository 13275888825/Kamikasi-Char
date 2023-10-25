/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-24 16:48:53
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-25 09:37:58
 * @FilePath: \Kamikasi Char\src\mock\homeCard.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from 'mockjs';

export default Mock.mock('/api/homecard', 'post', req => {
  let req_data = JSON.parse(req.body);
  return [
    {
      id: '1',
      name: 'Character Assistant',
      desc: 'Your Ai Work/study buddy',
      by: 'landon',
      imgUrl:
        'https://characterai.io/i/400/static/avatars/uploaded/2023/3/22/WOUx3xnZRql_j1TsQfS1TcNCI30D6uoPQvlGlKdYxHg.webp',
      detail: '22.5m',
    },
    {
      id: '2',
      name: 'Character Assistant',
      desc: 'Your Ai Work/study buddy',
      by: 'landon',
      imgUrl:
        'https://characterai.io/i/400/static/avatars/uploaded/2023/3/22/WOUx3xnZRql_j1TsQfS1TcNCI30D6uoPQvlGlKdYxHg.webp',
      detail: '22.5m',
    },
    {
      id: '3',
      name: 'Character Assistant',
      desc: 'Your Ai Work/study buddy',
      by: 'landon',
      imgUrl:
        'https://characterai.io/i/400/static/avatars/uploaded/2023/3/22/WOUx3xnZRql_j1TsQfS1TcNCI30D6uoPQvlGlKdYxHg.webp',
      detail: '22.5m',
    },
    {
      id: '4',
      name: 'Character Assistant',
      desc: 'Your Ai Work/study buddy',
      by: 'landon',
      imgUrl:
        'https://characterai.io/i/400/static/avatars/uploaded/2023/3/22/WOUx3xnZRql_j1TsQfS1TcNCI30D6uoPQvlGlKdYxHg.webp',
      detail: '22.5m',
    },
    {
      id: '5',
      name: 'Character Assistant',
      desc: 'Your Ai Work/study buddy',
      by: 'landon',
      imgUrl:
        'https://characterai.io/i/400/static/avatars/uploaded/2023/3/22/WOUx3xnZRql_j1TsQfS1TcNCI30D6uoPQvlGlKdYxHg.webp',
      detail: '22.5m',
    },
    {
      id: '6',
      name: 'Character Assistant',
      desc: 'Your Ai Work/study buddy',
      by: 'landon',
      imgUrl:
        'https://characterai.io/i/400/static/avatars/uploaded/2023/3/22/WOUx3xnZRql_j1TsQfS1TcNCI30D6uoPQvlGlKdYxHg.webp',
      detail: '22.5m',
    },
    {
      id: '7',
      name: 'Character Assistant',
      desc: 'Your Ai Work/study buddy',
      by: 'landon',
      imgUrl:
        'https://characterai.io/i/400/static/avatars/uploaded/2023/3/22/WOUx3xnZRql_j1TsQfS1TcNCI30D6uoPQvlGlKdYxHg.webp',
      detail: '22.5m',
    },
  ];
});
