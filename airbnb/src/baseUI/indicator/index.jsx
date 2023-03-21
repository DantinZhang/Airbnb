import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import IndicatorWrapper from './style'

const Indicator = memo((props) => {
    let { selectIndex } = props;
    let contentRef = useRef();

    useEffect(() => {
        let box = contentRef.current;
        //1.拿到某个元素
        let el = box.children[selectIndex];
        //2.计算元素滚动距离：元素中心距离左侧距离 - 盒子宽度的一半
        let distance = el.offsetLeft + el.clientWidth * 0.5 - box.clientWidth * 0.5
        console.log(distance);

        //4.特殊情况，最左边和最右边不用滚
        //4.1左边的元素，如果计算出来是负的（要向右滚），则不让滚
        if (distance < 0) distance = 0;
        //4.2右边的元素，如果计算出来已经超过了最大位置，就让滚动位置滚动到最大距离处
        let totalDistance = box.scrollWidth - box.clientWidth
        if(distance > totalDistance) distance = totalDistance;

        //3.开始滚,注意模板字符串不会负负得正：`translateX(-${distance}px)`不对
        box.style.transform = `translateX(${-distance}px)`

        //简单改改高亮，用于观察效果
        let arr = [...box.children]
        arr.forEach(item => {
            item.style.color = `black`
        })
        el.style.color = `red`

    }, [selectIndex])

    return (
        <IndicatorWrapper>
            <div className='i-content' ref={contentRef}>
                {props.children}
            </div>
        </IndicatorWrapper>
    )
})

Indicator.propTypes = {
    selectIndex: PropTypes.number
}

export default Indicator