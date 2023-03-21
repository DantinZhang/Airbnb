import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import BrowserWrapper from './style'

const PictureBrowser = memo((props) => {
    useEffect(() => {
        //图片浏览器渲染完成后，隐藏滚动条
        document.body.style.overflow = 'hidden';
        return () => {
            //图片浏览器关闭后，显示滚动条
            document.body.style.overflow = 'auto';
        }
    }, [])

    return (
        <BrowserWrapper>
            图片浏览器
        </BrowserWrapper>
    )
})

PictureBrowser.propTypes = {}

export default PictureBrowser