import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'

import TabsWrapper from './style'
import ScrollView from '@/baseUI/scroll-view'

const SectionTabs = memo((props) => {
    let [currentIndex, setCurrentIndex] = useState(0)
    let { names = [], changeTabData } = props;

    function changeTabName(name, index) {
        changeTabData(name);
        setCurrentIndex(index);
    }
    return (
        <TabsWrapper>
            <ScrollView>
                {names.map((name, index) => {
                    return (
                        <div
                            key={index}
                            className={classNames('item', { active: currentIndex === index })}
                            onClick={() => changeTabName(name, index)}
                        >
                            {name}
                        </div>
                    )
                })}
            </ScrollView>
        </TabsWrapper>
    )
})

SectionTabs.propTypes = {
    names: PropTypes.array
}

export default SectionTabs