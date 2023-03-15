import IconMoreArrow from '@/assets/svg/icon-more-arrow';
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import FooterWrapper from './style'

const SectionFooter = memo((props) => {
    let { name } = props;
    return (
        <FooterWrapper color={name ? "#00848A": "#000"}>
            <div className='info'>
                <span className='text'>{name ? `显示更多${name}房源` : '显示全部'}</span>
                <IconMoreArrow />
            </div>
        </FooterWrapper>
    )
})

SectionFooter.propTypes = {
    name: PropTypes.string
}

export default SectionFooter