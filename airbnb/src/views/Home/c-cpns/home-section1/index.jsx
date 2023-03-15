import PropTypes from 'prop-types';
import React, { memo } from 'react';

import SectionWrapper from './style';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';

const HomeSection1 = memo((props) => {
    let { sectionData, itemWidth } = props;
    return (
        <SectionWrapper>
            <SectionHeader title={sectionData.title} subtitle={sectionData.subtitle} itemWidth={itemWidth} />
            <SectionRooms roomList={sectionData.list} itemWidth={itemWidth} />
        </SectionWrapper>
    )
})

HomeSection1.propTypes = {
    goodPriceInfo: PropTypes.object,
}

export default HomeSection1