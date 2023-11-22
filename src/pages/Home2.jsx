/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-19 16:54:51
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-22 16:48:37
 * @FilePath: \web\src\pages\Chats.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react';
import { Col, Row, Card } from 'antd';
const { Meta } = Card;
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
  const navigate = useNavigate();
  const { search } = useLocation();
  const { character = '' } = queryString.parse(search);
  const shouldPlayAudio = '';
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
      <div style={{ marginLeft: '5%' }}>
        <h3 style={{ color: 'rgba(229, 224, 216, 0.85)' }}>
          Continue chatting
        </h3>
        <Row gutter={[16, 16]}>
          {list.map((item, key) => (
            // eslint-disable-next-line react/jsx-key
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
                onClick={() => toDetail(item)}
                hoverable
                style={{
                  width: 200,
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
        {/* <Divider style={{ background: '#fff' }} />
        <Button.Group color='secondary'>
          <Button className='btns'>One</Button>
          <Button className='btns'>Two</Button>
          <Button className='btns'>Three</Button>
          <Button className='btns'>Four</Button>
          <Button className='btns'>Five</Button>
          <Button className='btns'>Six</Button>
        </Button.Group> */}
        {/* <Row>
          {card.map((item, key) => (
            // eslint-disable-next-line react/jsx-key
            <Col span={4} style={{ marginTop: '20px' }} key={item.id}>
              <Card
                style={{
                  width: 200,
                  paddingTop: '6px',
                }}
                cover={
                  <>
                    <img
                      style={{
                        width: '90%',
                        marginLeft: '5%',
                        marginBottom: '8px',
                      }}
                      alt='example'
                      src={item.imgUrl}
                    />
                    <div>
                      <h4
                        style={{
                          margin: '0',
                          padding: '0',
                          color: '#000',
                          textAlign: 'center',
                          fontSize: '16px',
                        }}
                      >
                        {item.name}
                      </h4>
                      <div
                        style={{
                          margin: '0',
                          padding: '0',
                          textAlign: 'center',
                          color: '#aaa',
                          fontSize: '14px',
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </>
                }
                actions={[
                  // eslint-disable-next-line react/jsx-key
                  <span
                    style={{
                      color: '#aaa',
                    }}
                  >
                    @{item.by}
                  </span>,
                  // eslint-disable-next-line react/jsx-key
                  <span
                    style={{
                      color: '#aaa',
                    }}
                  >
                    {item.detail}
                  </span>,
                  <EllipsisOutlined key='ellipsis' />,
                ]}
              ></Card>
            </Col>
          ))}
        </Row> */}
      </div>
    </div>
  );
}
