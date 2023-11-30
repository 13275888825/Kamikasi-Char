import React, { useEffect } from 'react';

const Char = () => {
  //   let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    console.log(window.location.pathname);
    // console.log(searchParams, 'search');
  });
  return (
    <div className='home'>
      <h1>Char页面</h1>
    </div>
  );
};

export default Char;
