import React, { memo, useEffect } from 'react';
import { getGoodPriceInfo } from '@/store/modules/home';
import HomeRotation from './c-cpns/home-rotation';
import HomeWrapper from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const Home = memo(() => {
  let dispatch = useDispatch();
  let {goodPriceInfo} = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceInfo,
    }
  }, shallowEqual)

  useEffect(() => {
    dispatch(getGoodPriceInfo());
  },[])

  return (
    <HomeWrapper>
      <HomeRotation />
      <div className="content">
        <div>{goodPriceInfo.title}</div>
        <div>我是房源</div>
        <div>我是房源</div>
      </div>
    </HomeWrapper>
  )
})

export default Home