import React from 'react';
import { Avatar, List } from 'antd';
import './Chats.css';
const data = [
  {
    title: 'WhoWouldWin',
  },
  {
    title: 'CelestiAI',
  },
  {
    title: 'Raiden Shogun and Ei',
  },
  {
    title: 'Character Assistant',
  },
  {
    title: 'WhoWouldWin',
  },
  {
    title: 'CelestiAI',
  },
  {
    title: 'Raiden Shogun and Ei',
  },
  {
    title: 'Character Assistant',
  },
];
const App = () => (
  <List
    className='list'
    style={{
      width: '350px',
      backgroundColor: 'transparent',
      height: '500px',
      position: 'relative',
      left: '-24%',
    }}
    itemLayout='horizontal'
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item
        style={{
          height: '100px',
        }}
      >
        <List.Item.Meta
          avatar={
            <Avatar
              size={{ xs: 20, sm: 20, md: 20, lg: 44, xl: 60, xxl: 60 }}
              src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
            />
          }
          title={
            <a style={{ color: '#aaa' }} href='https://ant.design'>
              {item.title}
            </a>
          }
        />
      </List.Item>
    )}
  />
);
export default App;
