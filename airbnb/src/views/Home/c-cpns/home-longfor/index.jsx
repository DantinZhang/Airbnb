import ScrollView from '@/baseUI/scroll-view'
import LongforItem from '@/components/longfor-item'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import LongforWrapper from './style'

const HomeLongfor = memo((props) => {
    let { longforData } = props;
    return (
        <LongforWrapper>
            <SectionHeader title={longforData.title} subtitle={longforData.subtitle} />
            <div className='longfor-list'>
                <ScrollView>
                    {
                        longforData.list.map((item, index) => {
                            return (<LongforItem key={index} itemData={item} />)
                        })
                    }
                </ScrollView>
            </div>
            <SectionFooter />
        </LongforWrapper>
    )
})

HomeLongfor.propTypes = {
    longforData: PropTypes.object
}

export default HomeLongfor