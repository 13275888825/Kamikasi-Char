/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-01 17:56:11
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-01 18:32:41
 * @FilePath: \KamikasiChar\src\pages\UserManage.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react';
import axios from '../utils/api';
import { Table, Button, message } from 'antd';

const UserManagement = ({ authToken }) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('token');
    if (auth) {
      fetchData();
    }
  }, [authToken]);

  const fetchData = async () => {
    setLoading(true);
    axios
      .get('http://localhost:3001/showUsers')
      .then(response => {
        console.log(response, 'res');
        setUserData(response.data);
      })
      .catch(error => {
        // 请求失败，处理错误
        message.error('Error fetching user data');
      });
    setLoading(false);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Action',
      render: (text, record) => (
        <Button type='danger' onClick={() => deleteUser(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  const deleteUser = async userId => {
    axios
      .post(`/deleteUser/${userId}`)
      .then(response => {
        // 请求成功，处理响应数据
        message.success('User deleted successfully');
        fetchData();
      })
      .catch(error => {
        // 请求失败，处理错误
        message.error('Error deleting user');
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '200px',
      }}
    >
      <Table
        style={{
          width: '1000px',
        }}
        columns={columns}
        dataSource={userData}
        loading={loading}
        rowKey='id'
      />
    </div>
  );
};

export default UserManagement;
