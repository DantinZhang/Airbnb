import PropTypes from 'prop-types'
import React, { memo } from 'react'
import BrowserWrapper from './style'

const PictureBrowser = memo((props) => {
  return (
    <BrowserWrapper>
        图片浏览器
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {}

export default PictureBrowser