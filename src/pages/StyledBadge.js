/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-23 09:42:51
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-23 09:43:17
 * @FilePath: \web\src\pages\StyledBadge.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { styled } from '@nextui-org/react';

// Badge component will be available as part of the core library soon
export const StyledBadge = styled('span', {
  display: 'inline-block',
  textTransform: 'uppercase',
  padding: '$2 $3',
  margin: '0 2px',
  fontSize: '10px',
  fontWeight: '$bold',
  borderRadius: '14px',
  letterSpacing: '0.6px',
  lineHeight: 1,
  boxShadow: '1px 2px 5px 0px rgb(0 0 0 / 5%)',
  alignItems: 'center',
  alignSelf: 'center',
  color: '$white',
  variants: {
    type: {
      active: {
        bg: '$successLight',
        color: '$successLightContrast',
      },
      paused: {
        bg: '$errorLight',
        color: '$errorLightContrast',
      },
      vacation: {
        bg: '$warningLight',
        color: '$warningLightContrast',
      },
    },
  },
  defaultVariants: {
    type: 'active',
  },
});
