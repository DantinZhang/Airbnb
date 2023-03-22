import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import IconClose from '@/assets/svg/icon-close';
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom';
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top';
import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import BrowserWrapper from './style'

const PictureBrowser = memo((props) => {
    let { pictureUrls, handleShowPic } = props;

    useEffect(() => {
        //图片浏览器渲染完成后，隐藏滚动条
        document.body.style.overflow = 'hidden';
        return () => {
            //图片浏览器关闭后，显示滚动条
            document.body.style.overflow = 'auto';
        }
    }, [])

    function closePic() {
        if(handleShowPic) handleShowPic(false);
    }

    return (
        <BrowserWrapper>
            <div className='top'>
                <div className='close-btn' onClick={closePic}>
                    <IconClose />
                </div>
            </div>
            <div className='slider'>
                <div className='control'>
                    <div className='btn left'>
                        <IconArrowLeft width="77" height="77" />
                    </div>
                    <div className='btn right'>
                        <IconArrowRight width="77" height="77" />
                    </div>
                </div>
                <div className='picture'>
                </div>
            </div>
            <div className='preview'>
                <div className='info'>
                    <div className='desc'>
                        <div className='count'>
                            <span>{1}/{pictureUrls}:</span>
                            <span>room apartment图片{1}</span>
                        </div>
                        <div className='toggle'>
                            <span>{true ? "隐藏" : "显示"}照片列表</span>
                            {true ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
                        </div>
                    </div>
                    <div className='list'>
                        
                    </div>
                </div>
            </div>
        </BrowserWrapper>
    )
})

PictureBrowser.propTypes = {
    pictureUrls: PropTypes.array
}

export default PictureBrowser