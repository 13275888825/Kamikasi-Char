/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-19 16:54:51
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-27 10:47:44
 * @FilePath: \Kamikasi Char\src\pages\Chats.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from 'react';
import { Avatar, List } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getHostName } from '../utils/urlUtils';
import lz from 'lz-string';
import './Chats.css';
const App = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const chatsItem = item => {
    console.log(item, 'selectedCharacter');
    const compressedCharacter = lz.compressToEncodedURIComponent(
      JSON.stringify(item)
    );
    navigate(
      '/conversation?isCallViewParam=' +
        'Text' +
        '&character=' +
        compressedCharacter +
        '&preferredLanguage=' +
        'English' +
        '&selectedDevice=' +
        'default' +
        '&selectedModel=' +
        'gpt-3.5-turbo-16k' +
        '&useSearchParam=' +
        false +
        '&useMultiOnParam=' +
        false +
        '&useEchoCancellationParam=' +
        false
    );
  };
  useEffect(() => {
    console.log('111111');
    const scheme = window.location.protocol;
    const url = scheme + '//' + getHostName() + '/characters';
    let headers = {
      'Content-Type': 'application/json',
    };
    // if (token) {
    //   headers['Authorization'] = `Bearer ${token}`;
    // }
    fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data, 'data');
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
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
                src={item.image_url}
              />
            }
            title={<a style={{ color: '#aaa' }}>{item.name}</a>}
          />
        </List.Item>
      )}
    />
  );
};
export default App;
