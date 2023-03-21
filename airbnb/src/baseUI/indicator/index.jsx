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
        //3.开始滚,注意模板字符串不会负负得正：`translateX(-${distance}px)`不对
        box.style.transform = `translateX(${-distance}px)`
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