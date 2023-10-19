/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-18 13:30:13
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-10-19 15:53:58
 * @FilePath: \web\src\components\Auth\SignIn.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * src/components/Auth/SignIn.jsx
 * signin and signup with google account
 *
 * created by Lynchee on 7/20/23
 */

import React, { useState } from 'react';
import auth from '../../utils/firebase';
import { getHostName } from '../../utils/urlUtils';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './styles.css';

export const sendTokenToServer = async token => {
  // Send token to server
  const scheme = window.location.protocol;
  const url = scheme + '//' + getHostName();

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.error('Sent token failed');
    }
  } catch (error) {
    console.error('Sent token failed. ', error);
  }
};

export const signInWithGoogle = async (isLoggedIn, setToken) => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider) // Return the promise here
    .then(async result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = await auth.currentUser.getIdToken();

      // The signed-in user info.
      const user = result.user;
      isLoggedIn.current = true;
      setToken(token);
      await sendTokenToServer(token);

      console.log('Sign-in successfully');
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(
        `Error occurred during sign in. Code: ${errorCode}, Message: ${errorMessage}`
      );
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      isLoggedIn.current = false;
    });
};

const SignIn = ({ isLoggedIn, setToken }) => {
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithGoogle(isLoggedIn, setToken);
    } catch (error) {
      console.error('Error during sign in:', error);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={signIn}>
      <button type='submit' disabled={isLoading} className='auth-btn'>
        {isLoading ? 'Signing In...' : 'Sign in'}
      </button>
    </form>
  );
};

export default SignIn;
