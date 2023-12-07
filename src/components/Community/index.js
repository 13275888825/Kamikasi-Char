/* eslint-disable prettier/prettier */
/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-19 17:47:56
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-12-07 09:49:17
 * @FilePath: \web\src\components\Community\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
// import React from 'react';
// import { Avatar, List, Space, Collapse, Row, Col } from 'antd';
// import './index.css';
// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;
// const items = [
//   {
//     key: '1',
//     label: 'This is panel header 1',
//     children: <p>{text}</p>,
//   },
//   {
//     key: '2',
//     label: 'This is panel header 2',
//     children: <p>{text}</p>,
//   },
//   {
//     key: '3',
//     label: 'This is panel header 3',
//     children: <p>{text}</p>,
//   },
// ];
// const data = Array.from({
//   length: 3,
// }).map((_, i) => ({
//   href: 'https://ant.design',
//   title: `ant design part ${i}`,
//   avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
//   description:
//     'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//   content:
//     'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
// }));
// const IconText = ({ icon, text }) => (
//   <Space>
//     {React.createElement(icon)}
//     {text}
//   </Space>
// );
// const App = () => (
//   <div className='communityBody'>
//     <Row>
//       <Col span={18}>
//         <List
//           itemLayout='vertical'
//           size='large'
//           dataSource={data}
//           renderItem={item => (
//             <List.Item
//               key={item.title}
//               actions={[
//                 <IconText
//                   icon={StarOutlined}
//                   text='156'
//                   key='list-vertical-star-o'
//                 />,
//                 <IconText
//                   icon={LikeOutlined}
//                   text='156'
//                   key='list-vertical-like-o'
//                 />,
//                 <IconText
//                   icon={MessageOutlined}
//                   text='2'
//                   key='list-vertical-message'
//                 />,
//               ]}
//             >
//               <List.Item.Meta avatar={<Avatar src={item.avatar} />} />
//               {item.content}
//             </List.Item>
//           )}
//         />
//       </Col>
//       <Col span={6}>
//         <Collapse accordion items={items} />
//       </Col>
//     </Row>
//   </div>
// );
// export default App;
import React from 'react';

export default function index() {
  return <div style={{color:"#fff",margin:"20px 0"}}>To Be Contuine</div>;
}
