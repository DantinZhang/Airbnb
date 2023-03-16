import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import FilterWrapper from './style'
import filterData from '@/assets/data/filter_data.json';
import classNames from 'classnames';

const EntireFilter = memo((props) => {
    let [keywords, setKeywords] = useState([]);

    function chooseKeyword(item) {
        let newArr = [...keywords];
        //判断是否已经选中了，如果选中了就删掉
        if (keywords.includes(item)) {
            let itemIndex = keywords.findIndex(el => el == item)
            newArr.splice(itemIndex, 1);
        } else {
            newArr.push(item);
        }
        setKeywords(newArr);
        //这里其实应该发请求拿到最新的数据，这里就不写了
    }

    return (
        <FilterWrapper>
            <div className='filter'>
                {
                    filterData.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={classNames('item', { active: keywords.includes(item) })}
                                onClick={() => chooseKeyword(item)}
                            >
                                {item}
                            </div>)
                    })
                }
            </div>
        </FilterWrapper>
    )
})

EntireFilter.propTypes = {}

export default EntireFilter