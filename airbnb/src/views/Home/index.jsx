import React, { memo, useEffect } from 'react';
import { getHomeData } from '@/store/modules/home';
import HomeRotation from './c-cpns/home-rotation';
import HomeWrapper from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HomeSection1 from './c-cpns/home-section1';

const Home = memo(() => {
  let dispatch = useDispatch();
  let { highScoreInfo, goodPriceInfo } = useSelector((state) => {
    return {
      highScoreInfo: state.home.highScoreInfo,
      goodPriceInfo: state.home.goodPriceInfo,
    }
  }, shallowEqual)

  useEffect(() => {
    dispatch(getHomeData('这里派发过去的参数，在createAsyncThunk的回调接收'));
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeRotation />
      <div className="content">
        <HomeSection1 sectionData={highScoreInfo} itemWidth='20%' />
        <HomeSection1 sectionData={goodPriceInfo} itemWidth='25%'/>
      </div>
    </HomeWrapper>
  )
})

export default Home