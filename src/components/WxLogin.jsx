/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-18 13:38:09
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-24 14:22:25
 * @FilePath: \web\src\pages\Feed.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react';
import axios from 'axios';
const WxLogin = () => {
  useEffect(() => {
    var obj = new window.WxLogin({
      self_redirect: false,
      id: 'login_container',
      appid: 'wxbdc5610cc59c1631',
      scope: 'snsapi_login',
      redirect_uri: 'https%3A%2F%2Fpassport.yhd.com%2Fwechat%2Fcallback.do ',
      style: 'white',
      href: '/',
    });
    if (window.location.search.substring(6).split('&')[0]) {
      axios({
        url: `https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxa3fdea5a3090f&secret=53233913f94c0381aa53c1d8e&code=${
          window.location.search.substring(6).split('&')[0]
        }&grant_type=authorization_code`,
        method: 'get',
      });
    }
    console.log(document.querySelector('#wx_default_tip'), 'obj');
  });
  return <div id='login_container' style={{ marginLeft: '10%' }}></div>;
};

export default WxLogin;
