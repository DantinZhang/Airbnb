import React, { memo, useEffect } from 'react';
import hyRequest from '@/api';
import HomeRotation from './c-cpns/home-rotation';

const Home = memo(() => {

  useEffect(() => {
    hyRequest.get({url:'/home/highscore'}).then(res => {
      console.log(res);
    })
  },[])

  return (
    <div>
      <HomeRotation />
    </div>
  )
})

export default Home