/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-19 16:54:51
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-30 13:12:04
 * @FilePath: \web\src\pages\Chats.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react';
import { Col, Row, Avatar, Card, Divider } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
// import { Card, Image, Button, Avatar } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
const { Meta } = Card;
import './Chats.css';
import axios from 'axios';
import '../mock/homeList';
import '../mock/homeCard';
import { useNavigate } from 'react-router-dom';
export default function App() {
  const [selected, setSelected] = React.useState('photos');
  const [isFollowed, setIsFollowed] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [card, setCard] = React.useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios({
      url: '/api/homelist',
      method: 'post',
    }).then(res => {
      setList(res.data);
    });
    getCardInfo();
  }, []);
  const getCardInfo = () => {
    console.log('getCardInfo');
    axios({
      url: '/api/homecard',
      method: 'post',
    }).then(res => {
      // console.log(res.data, 'card');
      setCard(res.data);
    });
  };
  const toDetail = () => {
    console.log('toDetal');
    navigate('/chatDetail');
  };
  return (
    <div style={{ width: '90%', position: 'relative', left: '5%' }}>
      <div style={{ marginLeft: '5%' }}>
        <h3 style={{ color: 'rgba(229, 224, 216, 0.85)' }}>
          Continue chatting
        </h3>
        <Row>
          {list.map((item, key) => (
            // eslint-disable-next-line react/jsx-key
            <Col span={4} key={item.id}>
              <Card
                onClick={toDetail}
                hoverable
                style={{
                  width: 200,
                  height: 200,
                  paddingTop: '10px',
                }}
                cover={
                  <div>
                    <img
                      style={{ width: '80%', marginLeft: '10%' }}
                      alt='example'
                      src={item.imgUrl}
                    />
                    <div style={{ textAlign: 'center' }}>{item.name}</div>
                  </div>
                }
              ></Card>
            </Col>
          ))}
        </Row>
        <Divider style={{ background: '#fff' }} />
        <Button.Group color='secondary'>
          <Button className='btns'>One</Button>
          <Button className='btns'>Two</Button>
          <Button className='btns'>Three</Button>
          <Button className='btns'>Four</Button>
          <Button className='btns'>Five</Button>
          <Button className='btns'>Six</Button>
        </Button.Group>
        <Row>
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
          {/* <Col span={4}>
            <Card
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt='example'
                  src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                />
              }
              actions={[
                <SettingOutlined key='setting' />,
                <EditOutlined key='edit' />,
                <EllipsisOutlined key='ellipsis' />,
              ]}
            >
              <Meta title='Card title' description='This is the description' />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt='example'
                  src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                />
              }
              actions={[
                <SettingOutlined key='setting' />,
                <EditOutlined key='edit' />,
                <EllipsisOutlined key='ellipsis' />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />
                }
                title='Card title'
                description='This is the description'
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt='example'
                  src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                />
              }
              actions={[
                <SettingOutlined key='setting' />,
                <EditOutlined key='edit' />,
                <EllipsisOutlined key='ellipsis' />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />
                }
                title='Card title'
                description='This is the description'
              />
            </Card>
          </Col> */}
        </Row>
      </div>
    </div>
  );
}
