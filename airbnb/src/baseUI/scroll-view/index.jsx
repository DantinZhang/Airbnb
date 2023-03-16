import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import ScrollWrapper from './style'

const ScrollView = memo((props) => {
  let fatherBox = useRef();
  let [distance, setDistance] = useState(0); //可以滚动的距离

  // 组件渲染完毕后才能拿到ref
  useEffect(() => {
    let box = fatherBox.current; //获取整个大盒子元素
    let scrollWidth = box.scrollWidth; //大盒子原来的总宽度
    let clientWidth = box.clientWidth; //可视区域的宽度（不包括overflow）
    let distance = scrollWidth - clientWidth; //可滚动的距离
    setDistance(distance); //保存可滚动距离，方便计算是否显示按钮
    //只有子元素改变的时候，才需要重新执行useEffect重新计算可滚动距离
  },[props.children])

  return (
    <ScrollWrapper>
      <button>左边按钮</button>
      <button>右边按钮</button>

      <div className='scroll-content' ref={fatherBox}>
        {props.children}
      </div>

    </ScrollWrapper>
  )
})

ScrollView.propTypes = {
  children: PropTypes.array
}

export default ScrollView