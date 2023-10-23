/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-23 09:43:36
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-23 09:45:13
 * @FilePath: \web\src\pages\IconButton.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { styled } from '@nextui-org/react';

// IconButton component will be available as part of the core library soon
export const IconButton = styled('button', {
  dflex: 'center',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  padding: '0',
  margin: '0',
  bg: 'transparent',
  transition: '$default',
  '&:hover': {
    opacity: '0.8',
  },
  '&:active': {
    opacity: '0.6',
  },
});
