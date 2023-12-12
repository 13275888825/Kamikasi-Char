/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-19 16:54:51
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-22 16:48:37
 * @FilePath: \web\src\pages\Chats.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react';
import { Col, Row, Card, Tabs, Divider, Avatar, List, Typography } from 'antd';
const { Meta } = Card;
const { TabPane } = Tabs;
import { getHostName } from '../utils/urlUtils';
import './Chats.css';
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import lz from 'lz-string';
export default function App() {
  const [selected, setSelected] = React.useState('');
  const [isFollowed, setIsFollowed] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [card, setCard] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [isCallView, setIsCallView] = React.useState('');
  const [recommend, setRecommend] = React.useState('');
  const navigate = useNavigate();
  const { search } = useLocation();
  const { character = '' } = queryString.parse(search);
  const shouldPlayAudio = '';
  const changeItem = (list, item) => {
    console.log(list, item, 'item');
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
        false +
        '&textareaValue=' +
        list
    );
  };
  useEffect(() => {
    setLoading(true);
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
        setList(data);
      })
      .catch(err => {
        console.error(err);
      });
    // axios({
    //   url: '/api/homelist',
    //   method: 'post',
    // }).then(res => {
    //   console.log(res, 'res');
    //   setList(res.data);
    // });
    // getCardInfo();
  }, []);
  // const getCardInfo = () => {
  //   console.log('getCardInfo');
  //   axios({
  //     url: '/api/homecard',
  //     method: 'post',
  //   }).then(res => {
  //     // console.log(res.data, 'card');
  //     setCard(res.data);
  //   });
  // };
  const renderTabs1 = () => {
    // 获取关键人物列表
    const animeCharacters = list.filter(item => {
      const keywords = [
        'Mark Zuckerberg',
        'Arnold Schwarzenegger',
        'Unreal Speech',
        'Ion Stoica',
      ];
      return keywords.includes(item.name);
    });
    console.log(animeCharacters, 'oooo');
    // 根据关键人物生成 Tabs 和对应的 Card
    return (
      <Tabs defaultActiveKey='1' type='card' style={{ marginTop: '12px' }}>
        <TabPane tab='推荐' key='2'>
          <Row gutter={[16, 16]}>
            {animeCharacters.map((item, key) => (
              <Col
                span={4}
                xxl={4}
                xl={4}
                lg={6}
                md={6}
                sm={8}
                xs={12}
                key={item.character_id}
              >
                <Card
                  className='card'
                  onClick={() => toDetail(item)}
                  hoverable
                  style={{
                    width: 180,
                    height: 200,
                    paddingTop: '10px',
                  }}
                  cover={
                    <div>
                      <img
                        style={{
                          width: '80%',
                          height: '160px',
                          marginLeft: '10%',
                        }}
                        src={item.image_url}
                      />
                      <div style={{ textAlign: 'center' }}>{item.name}</div>
                    </div>
                  }
                ></Card>
              </Col>
            ))}
          </Row>
        </TabPane>
      </Tabs>
    );
  };
  const renderTabs = () => {
    // 获取关键人物列表
    const socialFigures = list.filter(item => {
      const keywords = [
        'Mark Zuckerberg',
        'Arnold Schwarzenegger',
        'Ion Stoica',
        'Keanu Reeves',
        'Sam Altman',
        'Elon musk',
        'Steve Jobs',
      ];
      return keywords.includes(item.name);
    });

    // 根据关键人物生成 Tabs 和对应的 Card
    return (
      <Tabs defaultActiveKey='1' type='card' style={{ marginTop: '12px' }}>
        <TabPane tab='社会名流' key='1'>
          <Row gutter={[16, 16]}>
            {socialFigures.map((item, key) => (
              <Col
                span={4}
                xxl={4}
                xl={4}
                lg={6}
                md={6}
                sm={8}
                xs={12}
                key={item.character_id}
              >
                <Card
                  className='card'
                  hoverable
                  onClick={() => toDetail(item)}
                  style={{
                    width: 180,
                    height: 200,
                    paddingTop: '10px',
                  }}
                  cover={
                    <div>
                      <img
                        style={{
                          width: '80%',
                          height: '160px',
                          marginLeft: '10%',
                        }}
                        src={item.image_url}
                      />
                      <div style={{ textAlign: 'center' }}>{item.name}</div>
                    </div>
                  }
                ></Card>
              </Col>
            ))}
          </Row>
        </TabPane>
      </Tabs>
    );
  };
  const renderTabs2 = () => {
    // 获取关键人物列表
    const animeCharacters = list.filter(item => {
      const keywords = [
        'Raiden Shogun And Ei Avatar',
        'Helen Inhabitants Zone',
        'Raiden Shogun And Ei',
        'Loki',
      ];
      return keywords.includes(item.name);
    });

    // 根据关键人物生成 Tabs 和对应的 Card
    return (
      <Tabs defaultActiveKey='1' type='card' style={{ marginTop: '12px' }}>
        <TabPane tab='动漫角色' key='2'>
          <Row gutter={[16, 16]}>
            {animeCharacters.map((item, key) => (
              <Col
                span={4}
                xxl={4}
                xl={4}
                lg={6}
                md={6}
                sm={8}
                xs={12}
                key={item.character_id}
              >
                <Card
                  className='card'
                  onClick={() => toDetail(item)}
                  hoverable
                  style={{
                    width: 180,
                    height: 200,
                    paddingTop: '10px',
                  }}
                  cover={
                    <div>
                      <img
                        style={{
                          width: '80%',
                          height: '160px',
                          marginLeft: '10%',
                        }}
                        src={item.image_url}
                      />
                      <div style={{ textAlign: 'center' }}>{item.name}</div>
                    </div>
                  }
                ></Card>
              </Col>
            ))}
          </Row>
        </TabPane>
      </Tabs>
    );
  };
  const renderTabs3 = () => {
    // 获取关键人物列表
    const virtualCharacters = list.filter(item => {
      const keywords = [
        'Unreal Speech',
        'The Dolphin',
        'The Cat',
        'Bruce Wayne',
        'fangtaikefuxiaofang',
      ];
      return keywords.includes(item.name);
    });

    // 根据关键人物生成 Tabs 和对应的 Card
    return (
      <Tabs defaultActiveKey='1' type='card' style={{ marginTop: '12px' }}>
        <TabPane tab='虚拟角色' key='3'>
          <Row gutter={[16, 16]}>
            {virtualCharacters.map((item, key) => (
              <Col
                span={4}
                xxl={4}
                xl={4}
                lg={6}
                md={6}
                sm={8}
                xs={12}
                key={item.character_id}
              >
                <Card
                  className='card'
                  onClick={() => toDetail(item)}
                  hoverable='true'
                  style={{
                    width: 180,
                    height: 200,
                    paddingTop: '10px',
                  }}
                  cover={
                    <div>
                      <img
                        style={{
                          width: '80%',
                          height: '160px',
                          marginLeft: '10%',
                        }}
                        src={item.image_url}
                      />
                      <div style={{ textAlign: 'center' }}>{item.name}</div>
                    </div>
                  }
                ></Card>
              </Col>
            ))}
          </Row>
        </TabPane>
      </Tabs>
    );
  };
  const renderTabs4 = () => {
    const data = [
      '请用中文和我交流',
      '介绍一下你自己',
      '请你介绍一下太仓',
      '介绍一下太仓的景点，不少于十处',
      '谈一谈你对音乐的理解',
    ];
    const recommend = list.filter(item => {
      const keywords = [
        'Mark Zuckerberg',
        'Arnold Schwarzenegger',
        'Unreal Speech',
        'Ion Stoica',
      ];
      return keywords.includes(item.name);
    });

    // 根据关键人物生成 Tabs 和对应的 Card
    return (
      <Row gutter={16} style={{ marginTop: '20px 0' }}>
        {recommend.map((item, key) => (
          <Col span={6} key={key}>
            <Card
              title={
                <>
                  <Avatar
                    size={{ xs: 60, sm: 60, md: 60, lg: 60, xl: 60, xxl: 60 }}
                    src={item.image_url}
                    style={{ margin: '10px' }}
                  />
                  <span style={{ color: '#000' }}>{item.name}</span>
                </>
              }
              bordered={false}
            >
              <List
                bordered
                dataSource={data}
                renderItem={list => (
                  <List.Item onClick={() => changeItem(list, item)}>
                    {list}
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        ))}
      </Row>
    );
  };
  const toDetail = async item => {
    console.log(item, 'selectedCharacter');
    const compressedCharacter = lz.compressToEncodedURIComponent(
      JSON.stringify(item)
    );
    // console.log(compressedCharacter, 'compressedCharacter');
    // navigate('/settings?character=' + compressedCharacter);
    // console.log(character, 'character');
    // console.log(preferredLanguage == 'English', 'preferredLanguage'),
    //   console.log(selectedDevice == 'default', 'selectedDevice');
    // console.log(selectedModel == 'gpt-3.5-turbo-16k', 'selectedModel');
    // console.log(useSearch == false, 'useSearch');
    // console.log(useMultiOn == false, 'useMultiOn');
    // console.log(useEchoCancellation == false, 'useEchoCancellation');
    // await connect();
    // const interval = setInterval(() => {
    //   // display callview
    //   setIsCallView(commMethod === 'Call');

    //   shouldPlayAudio.current = true;
    //   clearInterval(interval);

    //   // TODO(UI): Hide loading animation
    // }, 500);

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
  return (
    <div>
      <div style={{ marginTop: '15px', marginLeft: '-100px', width: '120%' }}>
        {renderTabs1()}
        {renderTabs()}
        {renderTabs2()}
        {renderTabs3()}
        <hr style={{ marginTop: '20px' }} />
        {renderTabs4()}
      </div>
    </div>
  );
}
