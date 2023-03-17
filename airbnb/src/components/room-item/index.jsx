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

    return (
        <ItemWrapper
            verifyColor={itemData?.verify_info?.text_color || "#39576a"}
            itemWidth={itemWidth}
        >
            <div className='inner'>
                {/* <div className='cover'>
                    <img src={itemData.picture_url} alt="" />
                </div> */}
                {/* 换成轮播图 */}
                <div className="swiper">
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
                            itemData.picture_urls.map((url, index) => {
                                return (
                                    <div key={index} className="cover">
                                        <img src={url} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
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