import Indicator from '@/baseUI/indicator'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import DemoWrapper from './style'

const Demo = memo((props) => {
    const btns = ['测试', '按钮', '包裹', '亮点', '不错', '上岸', '奥里'];
    const [selectIndex, setSelectIndex] = useState(0);
    console.log(selectIndex)

    function handleClick(isNext) {
        let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
        if (newIndex < 0) newIndex = btns.length - 1;
        if (newIndex > btns.length - 1) newIndex = 0;
        setSelectIndex(newIndex);
    }

    return (
        <DemoWrapper>
            <button onClick={e => handleClick(false)}>上一个</button>
            <button onClick={e => handleClick(true)}>下一个</button>
            <div className='list'>
                <Indicator selectIndex={selectIndex}>
                    {btns.map((item, index) => {
                        return (
                            <button key={index}>{item}</button>
                        )
                    })}
                </Indicator>
            </div>
        </DemoWrapper>
    )
})

Demo.propTypes = {}

export default Demo