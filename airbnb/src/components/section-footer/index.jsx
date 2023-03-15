import IconMoreArrow from '@/assets/svg/icon-more-arrow';
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import FooterWrapper from './style'

const SectionFooter = memo((props) => {
    let { name } = props;
    return (
        <FooterWrapper>
            <div className='info'>
                <span className='text'>显示更多{name}房源</span>
                <IconMoreArrow />
            </div>
        </FooterWrapper>
    )
})

SectionFooter.propTypes = {
    name: PropTypes.string
}

export default SectionFooter