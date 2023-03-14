import React, { memo } from 'react';
import LeftWrapper from './style';
import IconLogo from '@/assets/svg/icon_logo';
import logoRight from '@/assets/img/logo_right.jpg';

const HeaderLeft = memo(() => {
    return (
        <LeftWrapper>
            <div className='logo'>
                <IconLogo />
                <img src={logoRight} alt="" />
            </div>
        </LeftWrapper>
    )
})

export default HeaderLeft