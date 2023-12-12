/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-23 09:56:50
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-25 14:42:43
 * @FilePath: \web\src\pages\search.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from 'react';
import { AudioOutlined, LeftOutlined } from '@ant-design/icons';
import { List, Input, Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
import lz from 'lz';
import './Chats.css';
import './search.css';
import { getHostName } from '../utils/urlUtils';
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const search = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
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
        console.log(data, '2222');
        setData(data);
        setFilterData(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  const back = () => {
    navigate('/');
  };
  const handleSearch = value => {
    console.log(value, 'val');
    const lowerCaseValue = value.toLowerCase();
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(lowerCaseValue)
    );
    console.log(filtered, 'fff');
    setFilterData(filterData);
  };
  return (
    <div className='home'>
      <div>
        <LeftOutlined
          onClick={back}
          style={{
            color: '#fff',
            position: 'absolute',
            left: '150px',
            top: '24px',
            fontSize: '24px',
          }}
        />
      </div>
      <Search
        placeholder='input search text'
        allowClear
        enterButton='Search'
        size='large'
        onSearch={handleSearch}
        color='#fff'
      />
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
                  size={{ xs: 60, sm: 60, md: 60, lg: 60, xl: 60, xxl: 60 }}
                  src={item.image_url}
                />
              }
              title={<a style={{ color: '#aaa' }}>{item.name}</a>}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default search;
