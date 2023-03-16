import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react';

import SectionHeader from '@/components/section-header';
import SectionTabs from '@/components/section-tabs';
import SectionRooms from '@/components/section-rooms';

import SectionWrapper from './style'
import SectionFooter from '@/components/section-footer';

const HomeSection2 = memo((props) => {
    //拿到home请求到的当前模块数据
    const { section2Data } = props;

    //定义name初始值
    let initialName = section2Data.dest_address?.[0].name
    let [name, setName] = useState(initialName);
    
    //把所有名字传给组件，方便tab展示
    let tabNames = section2Data.dest_list && Object.keys(section2Data.dest_list);

    //useCallback性能优化，传给tab一个函数，拿到当前点击的name
    const changeTabData = useCallback(function (name) {
        console.log('切换导航数据', name)
        setName(name)
    }, [])

    return (
        <SectionWrapper>
            <SectionHeader title={section2Data.title} subtitle={section2Data.subtitle} />
            <SectionTabs names={tabNames} changeTabData={changeTabData} />
            <SectionRooms roomList={section2Data.dest_list?.[name]} itemWidth='33.33%' />
            <SectionFooter name={name}/>
        </SectionWrapper>
    )
})

HomeSection2.propTypes = {
    section2Data: PropTypes.object
}

export default HomeSection2