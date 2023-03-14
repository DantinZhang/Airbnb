import PropTypes from 'prop-types';
import React, { memo } from 'react';
import SectionWrapper from './style';
import SectionHeader from '@/components/section-header';

const HomeSection1 = memo((props) => {
    let {goodPriceInfo} = props;
    return (
        <SectionWrapper>
            <SectionHeader title={goodPriceInfo.title} subtitle={goodPriceInfo.subtitle}/>
        </SectionWrapper>
    )
})

HomeSection1.propTypes = {
    goodPriceInfo: PropTypes.object,
}

export default HomeSection1