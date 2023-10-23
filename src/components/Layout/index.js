/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-23 11:51:00
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-23 13:17:09
 * @FilePath: \web\src\components\IsLaytout\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
const Layout = () => {
  useEffect(() => {
    console.log(window.location.pathname, 'ooooo');
  });
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
