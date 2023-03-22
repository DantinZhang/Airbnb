import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import IconClose from '@/assets/svg/icon-close';
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom';
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top';
import classNames from 'classnames';
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import Indicator from '../indicator';
import BrowserWrapper from './style'

const PictureBrowser = memo((props) => {
    let { pictureUrls, handleShowPic } = props;
    let [currentIndex, setCurrentIndex] = useState(0);
    let [showList, setShowList] = useState(true);

    useEffect(() => {
        //图片浏览器渲染完成后，隐藏滚动条
        document.body.style.overflow = 'hidden';
        return () => {
            //图片浏览器关闭后，显示滚动条
            document.body.style.overflow = 'auto';
        }
    }, [])

    //关闭按钮
    function closePic() {
        if (handleShowPic) handleShowPic(false);
    }

    //点击左右按钮
    function handleChangePic(isRight) {
        let newIndex = isRight ? currentIndex + 1 : currentIndex - 1;
        if (newIndex > pictureUrls.length - 1) newIndex = 0;
        if (newIndex < 0) newIndex = pictureUrls.length - 1;
        setCurrentIndex(newIndex);
    }

    //点击下面的隐藏列表按钮
    function isShowList(isShow) {
        setShowList(isShow)
    }

    //点击底部列表任意一张图片
    function handleRandomClick(index) {
        setCurrentIndex(index)
    }

    return (
        <BrowserWrapper showList={showList}>
            <div className='top'>
                <div className='close-btn' onClick={closePic}>
                    <IconClose />
                </div>
            </div>
            <div className='slider'>
                <div className='control'>
                    <div className='btn left' onClick={e => handleChangePic(false)}>
                        <IconArrowLeft width="77" height="77" />
                    </div>
                    <div className='btn right' onClick={e => handleChangePic(true)}>
                        <IconArrowRight width="77" height="77" />
                    </div>
                </div>
                <div className='picture'>
                    <img src={pictureUrls[currentIndex]} alt="" />
                </div>
            </div>
            <div className='preview'>
                <div className='info'>
                    <div className='desc'>
                        <div className='count'>
                            <span>{currentIndex + 1}/{pictureUrls.length}：</span>
                            <span>公寓图片{currentIndex + 1}</span>
                        </div>
                        <div className='toggle' onClick={e => isShowList(!showList)}>
                            <span>{showList ? "隐藏" : "显示"}照片列表</span>
                            {showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
                        </div>
                    </div>
                    <div className='list'>
                        <Indicator selectIndex={currentIndex}>
                            {
                                pictureUrls.map((item, index) => {
                                    return (
                                        <div
                                            className={classNames('item', { active: currentIndex == index })} key={index}
                                            onClick={e => handleRandomClick(index)}
                                        >
                                            <img src={item} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </Indicator>
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