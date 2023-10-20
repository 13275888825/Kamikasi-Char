/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-19 16:54:51
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-20 17:54:01
 * @FilePath: \web\src\pages\Chats.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Col, Row, Avatar, Card } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
// import { Card, Image, Button, Avatar } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
const { Meta } = Card;
import './Chats.css';
export default function App() {
  const [selected, setSelected] = React.useState('photos');
  const [isFollowed, setIsFollowed] = React.useState(false);
  return (
    <div style={{ width: '90%', position: 'relative', left: '5%' }}>
      <h3 style={{ color: 'rgba(229, 224, 216, 0.85)' }}>Continue chatting</h3>
      <Row>
        <Col span={6}>
          <Card
            hoverable
            style={{
              width: 200,
            }}
            cover={
              <img
                alt='example'
                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
              />
            }
          >
            <Meta title='Europe Street beat' description='www.instagram.com' />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{
              width: 200,
            }}
            cover={
              <img
                alt='example'
                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
              />
            }
          >
            <Meta title='Europe Street beat' description='www.instagram.com' />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{
              width: 200,
            }}
            cover={
              <img
                alt='example'
                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
              />
            }
          >
            <Meta title='Europe Street beat' description='www.instagram.com' />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{
              width: 200,
            }}
            cover={
              <img
                alt='example'
                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
              />
            }
          >
            <Meta title='Europe Street beat' description='www.instagram.com' />
          </Card>
        </Col>
      </Row>
      <Button.Group color='secondary'>
        <Button className='btns'>One</Button>
        <Button className='btns'>Two</Button>
        <Button className='btns'>Three</Button>
        <Button className='btns'>Four</Button>
        <Button className='btns'>Five</Button>
        <Button className='btns'>Six</Button>
      </Button.Group>
      <Row style={{ marginTop: '20px' }}>
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
      </Row>
    </div>
  );
}
