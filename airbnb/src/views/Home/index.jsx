import React, { memo,  useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { reqHomeData } from '@/store/modules/home';
import HomeRotation from './c-cpns/home-rotation';
import HomeWrapper from './style';
import HomeSection1 from './c-cpns/home-section1';
import HomeSection2 from './c-cpns/home-section2';

const Home = memo(() => {
  let dispatch = useDispatch();
  let { highScoreInfo, goodPriceInfo, discountInfo, hotInfo } = useSelector((state) => {
    return {
      highScoreInfo: state.home.highScoreInfo,
      goodPriceInfo: state.home.goodPriceInfo,
      discountInfo: state.home.discountInfo,
      hotInfo: state.home.hotInfo,
    }
  }, shallowEqual)

  useEffect(() => {
    dispatch(reqHomeData('这里派发过去的参数，在createAsyncThunk的回调接收'));
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeRotation />
      <div className="content">
        {/* 优化：请求到数据之后再渲染组件，这样就少渲染一次 */}
        {Object.keys(discountInfo).length > 0 && <HomeSection2 section2Data={discountInfo}/>}
        {Object.keys(hotInfo).length > 0 && <HomeSection2 section2Data={hotInfo}/>}
        {Object.keys(highScoreInfo).length > 0 && <HomeSection1 sectionData={highScoreInfo} itemWidth='20%' />}
        {Object.keys(goodPriceInfo).length > 0 && <HomeSection1 sectionData={goodPriceInfo} itemWidth='25%' />}
      </div>
    </HomeWrapper>
  )
})

export default Home