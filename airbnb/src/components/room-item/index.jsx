import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'

import ItemWrapper from './style';
import { Carousel, Rate } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const RoomItem = memo((props) => {
    // itemWidth参数用于决定当前一行几个元素
    let { itemData, itemWidth } = props;
    let carousel = useRef();

    function controlClickHandle(isRight) {
        //控制前后切换的按钮
        isRight ? carousel.current.next() : carousel.current.prev();
    }

    //分情况展示，首页不展示轮播图，完整页展示轮播图
    let homeItem = (<div className='cover'>
        <img src={itemData.picture_url} alt="" />
    </div>)

    let entireItem = (<div className="swiper">
        <div className='control'>
            <div className='btn left' onClick={e => controlClickHandle(false, e)}>
                <IconArrowLeft width="30" height="30" />
            </div>
            <div className='btn right' onClick={e => controlClickHandle(true, e)}>
                <IconArrowRight width="30" height="30" />
            </div>
        </div>
        <Carousel ref={carousel} dots={false}>
            {
                itemData.picture_urls?.map((url, index) => {
                    return (
                        <div key={index} className="cover">
                            <img src={url} alt="" />
                        </div>
                    )
                })
            }
        </Carousel>
    </div>)

    return (
        <ItemWrapper
            verifyColor={itemData?.verify_info?.text_color || "#39576a"}
            itemWidth={itemWidth}
        >
            <div className='inner'>
                {itemData.picture_urls ? entireItem : homeItem}
                
                <div className='desc'>
                    {itemData.verify_info.messages.join(" · ")}
                </div>
                <div className='name'>{itemData.name}</div>
                <div className='price'>¥{itemData.price}/晚</div>

                <div className='bottom'>
                    <Rate disabled defaultValue={5} />
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
    itemWidth: PropTypes.string,
}

export default RoomItem