import PropTypes from 'prop-types'
import React, { memo } from 'react'

import ItemWrapper from './style';

const RoomItem = memo((props) => {
    // itemWidth参数用于决定当前一行几个元素
    let { itemData, itemWidth = '20%' } = props;
    return (
        <ItemWrapper
            verifyColor={itemData?.verify_info?.text_color || "#39576a"}
            itemWidth={itemWidth}  
        >
            <div className='inner'>
                <div className='cover'>
                    <img src={itemData.picture_url} alt="" />
                </div>
                <div className='desc'>
                    {itemData.verify_info.messages.join(" · ")}
                </div>
                <div className='name'>{itemData.name}</div>
                <div className='price'>¥{itemData.price}/晚</div>

                <div className='bottom'>
                    <span className='count'>{itemData.reviews_count}</span>
                    {
                        itemData.bottom_info && <span className='extra'>·{itemData.bottom_info.content}</span>
                    }
                </div>
            </div>
        </ItemWrapper>
    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object,
    itemWidth:PropTypes.string,
}

export default RoomItem