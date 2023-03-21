import React, { memo } from 'react'
import DetailInfos from './c-cpns/contents'
import Pictures from './c-cpns/head-pictures'
import DetailWrapper from './style'

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <Pictures />
      <DetailInfos />
    </DetailWrapper>
  )
})

export default Detail