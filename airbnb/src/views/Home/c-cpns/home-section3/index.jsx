import ScrollView from '@/baseUI/scroll-view';
import RoomItem from '@/components/room-item';
import SectionFooter from '@/components/section-footer';
import SectionHeader from '@/components/section-header';
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Section3Wrapper from './style'

const HomeSection3 = memo((props) => {
    let { sectionData } = props;
    return (
        <Section3Wrapper>
            <SectionHeader title={sectionData.title} subtitle={sectionData.subtitle} />
            <ScrollView>
                {
                    sectionData.list.map(item => {
                        return <RoomItem key={item.id} itemData={item} itemWidth='18%' />
                    })
                }
            </ScrollView>
            <SectionFooter name='佛山' />
        </Section3Wrapper>
    )
})

HomeSection3.propTypes = {}

export default HomeSection3