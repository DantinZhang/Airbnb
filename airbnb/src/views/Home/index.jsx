import React, { memo, useEffect } from 'react';
import hyRequest from '@/api';

const Home = memo(() => {

  useEffect(() => {
    hyRequest.get({url:'/home/highscore'}).then(res => {
      console.log(res);
    })
  },[])

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
})

export default Home