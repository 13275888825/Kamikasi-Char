import React from 'react';
import { Avatar, List } from 'antd';
import { useNavigate } from 'react-router-dom';
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
const App = () => {
  const navigate = useNavigate();
  const chatsItem = item => {
    console.log(item.title, 'item');
    navigate(`/chats/char?${item.title}`);
  };
  return (
    <List
      className='list'
      style={{
        width: '500px',
        backgroundColor: 'transparent',
        position: 'relative',
        left: '-24%',
      }}
      itemLayout='horizontal'
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item
          onClick={() => chatsItem(item)}
          style={{
            height: '80px',
          }}
        >
          <List.Item.Meta
            avatar={
              <Avatar
                size={{ xs: 20, sm: 20, md: 20, lg: 44, xl: 60, xxl: 60 }}
                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
              />
            }
            title={<a style={{ color: '#aaa' }}>{item.title}</a>}
          />
        </List.Item>
      )}
    />
  );
};
export default App;
