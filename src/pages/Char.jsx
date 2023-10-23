import React, { useEffect } from 'react';
const Char = () => {
  useEffect(() => {
    console.log(window.location.pathname);
  });
  return (
    <div className='home'>
      <h1>Char页面</h1>
    </div>
  );
};

export default Char;
