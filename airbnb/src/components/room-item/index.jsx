import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'

import ItemWrapper from './style';
import { Carousel, Rate } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/baseUI/indicator';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const RoomItem = memo((props) => {
    // itemWidth参数用于决定当前一行几个元素
    let { itemData, itemWidth } = props;
    let carousel = useRef();
    let [carouselIndex, setCarouselIndex] = useState(0);
    let navigate = useNavigate();

    //点击左右侧按钮切换轮播
    function controlClickHandle(isRight,e) {
        let length = itemData?.picture_urls.length;
        //控制前后切换的按钮
        if (isRight) {
            carousel.current.next();
            let newIndex = carouselIndex == length - 1 ? 0 : carouselIndex + 1;
            setCarouselIndex(newIndex);
        } else {
            carousel.current.prev();
            let newIndex = carouselIndex == 0 ? length - 1 : carouselIndex - 1;
            setCarouselIndex(newIndex);
        }
        e.stopPropagation();//阻止事件冒泡，否则会冒泡到跳转
    }

    //路由跳转直详情页（这里由于没有接口，不传参了，采用写死的默认值）
    function toDetail() {
        navigate('/detail')
    }

    //分情况展示，首页不展示轮播图，完整页展示轮播图
    let homeItem = (<div className='cover'>
        <img src={itemData.picture_url} alt="" />
    </div>)

    let entireItem = (
        <div className="swiper">
            {/* 左右按钮 */}
            <div className='control'>
                <div className='btn left' onClick={e => controlClickHandle(false, e)}>
                    <IconArrowLeft width="30" height="30" />
                </div>
                <div className='btn right' onClick={e => controlClickHandle(true, e)}>
                    <IconArrowRight width="30" height="30" />
                </div>
            </div>
            {/* 轮播图 */}
            <Carousel ref={carousel} dots={false}>
                {
                    itemData?.picture_urls?.map((url, index) => {
                        return (
                            <div key={index} className="cover">
                                <img src={url} alt="" />
                            </div>
                        )
                    })
                }
            </Carousel>
            {/* 切换的小点点 */}
            <div className="indicator">
                <Indicator selectIndex={carouselIndex}>
                    {
                        itemData?.picture_urls?.map((item, index) => {
                            return (
                                <div className='item' key={index}>
                                    <div className={classNames('dot', { active: carouselIndex == index })}></div>
                                </div>
                            )
                        })
                    }
                </Indicator>
            </div>
        </div>)

    return (
        <ItemWrapper
            verifyColor={itemData?.verify_info?.text_color || "#39576a"}
            itemWidth={itemWidth}
            onClick={e => toDetail()}
        >
            <div className='inner'>
                {/* 图片的展示方式 */}
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