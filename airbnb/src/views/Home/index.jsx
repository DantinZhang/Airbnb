import React, { memo, useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { reqHomeData } from '@/store/modules/home';
import HomeRotation from './c-cpns/home-rotation';
import HomeWrapper from './style';
import HomeSection1 from './c-cpns/home-section1';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import SectionTabs from '@/components/section-tabs';

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

  let [name, setName] = useState('佛山');
  let tabNames = discountInfo.dest_list && Object.keys(discountInfo.dest_list);
  console.log(tabNames);

  const changeTabData = useCallback(function (name) {
    console.log('切换导航数据', name)
    setName(name)
  },[])

  return (
    <HomeWrapper>
      <HomeRotation />
      <div className="content">
        <div>
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
          <SectionTabs names={tabNames} changeTabData={changeTabData} />
          <SectionRooms roomList={discountInfo.dest_list?.[name]} itemWidth='33.33%' />
        </div>
        <HomeSection1 sectionData={highScoreInfo} itemWidth='20%' />
        <HomeSection1 sectionData={goodPriceInfo} itemWidth='25%' />
      </div>
    </HomeWrapper>
  )
})

export default Home