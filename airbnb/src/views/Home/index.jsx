import React, { memo, useEffect } from 'react';
import { getGoodPriceInfo } from '@/store/modules/home';
import HomeRotation from './c-cpns/home-rotation';
import HomeWrapper from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HomeSection1 from './c-cpns/home-section1';

const Home = memo(() => {
  let dispatch = useDispatch();
  let { goodPriceInfo } = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceInfo,
    }
  }, shallowEqual)

  useEffect(() => {
    dispatch(getGoodPriceInfo());
  }, [])

  return (
    <HomeWrapper>
      <HomeRotation />
      <div className="content">
        <HomeSection1 goodPriceInfo={goodPriceInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home