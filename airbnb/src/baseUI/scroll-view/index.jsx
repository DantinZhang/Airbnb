import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import ScrollWrapper from './style'

const ScrollView = memo((props) => {
  let fatherBox = useRef();
  let [distance, setDistance] = useState(0); //可以滚动的距离
  let [elIndex, setElIndex] = useState(1); //要滚动的元素索引
  let [showRight, setShowRight] = useState(true); //是否显示右边的按钮

  // 组件渲染完毕后才能拿到ref
  useEffect(() => {
    let box = fatherBox.current; //获取整个大盒子元素
    let scrollWidth = box.scrollWidth; //大盒子原来的总宽度
    let clientWidth = box.clientWidth; //可视区域的宽度（不包括overflow）
    let distance = scrollWidth - clientWidth; //可滚动的距离
    setDistance(distance); //保存可滚动距离，方便计算是否显示按钮
    //只有子元素改变的时候，才需要重新执行useEffect重新计算可滚动距离
  },[props.children])

  //右边按钮的点击事件处理
  function handleClickRight() {
    let box = fatherBox.current;
    let el = box.children[elIndex]; //拿到要计算滚动距离的元素
    let scrollUnit = el.offsetLeft; //计算要滚动的距离（当前元素距离定位元素左边的距离）
    box.style.transform = `translate(-${scrollUnit}px)`; //通过这种方式滚动
    setElIndex(elIndex + 1); //准备好计算下一个滚动距离

    setShowRight(!(scrollUnit > distance)); //如果滚动距离已经大于可滚动距离，就不显示
  }

  return (
    <ScrollWrapper>
      <button>左边按钮</button>
      {showRight && <button onClick={handleClickRight}>右边按钮</button>}

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