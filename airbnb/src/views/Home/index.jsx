import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { reqHomeData } from '@/store/modules/home';
import HomeRotation from './c-cpns/home-rotation';
import HomeWrapper from './style';
import HomeSection1 from './c-cpns/home-section1';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';

const Home = memo(() => {
  let dispatch = useDispatch();
  let { highScoreInfo, goodPriceInfo, discountInfo } = useSelector((state) => {
    return {
      highScoreInfo: state.home.highScoreInfo,
      goodPriceInfo: state.home.goodPriceInfo,
      discountInfo: state.home.discountInfo,
    }
  }, shallowEqual)

  useEffect(() => {
    dispatch(reqHomeData('这里派发过去的参数，在createAsyncThunk的回调接收'));
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeRotation />
      <div className="content">
        <div>
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
          <SectionRooms roomList={discountInfo.dest_list?.['杭州']} itemWidth='33.33%' />
        </div>
        <HomeSection1 sectionData={highScoreInfo} itemWidth='20%' />
        <HomeSection1 sectionData={goodPriceInfo} itemWidth='25%' />
      </div>
    </HomeWrapper>
  )
})

export default Home