import PictureBrowser from '@/baseUI/picture-browser'
import React, { memo, useCallback, useState } from 'react'
import PicturesWrapper from './style'

const Pictures = memo((props) => {
    let [showBrowser, setShowBrowser] = useState(false);
    let detailInfo = {
        "_id": "63043046432f9033d45410dc",
        "id": "49165669",
        "picture_url": "https://z1.muscache.cn/im/pictures/miso/Hosting-49165669/original/11aa11ee-e01f-4a53-8ba5-26de2e69502c.jpeg?aki_policy=large",
        "picture_urls": [
            "https://z1.muscache.cn/im/pictures/miso/Hosting-49165669/original/11aa11ee-e01f-4a53-8ba5-26de2e69502c.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-49165669/original/350f6b5c-d1b2-4346-8708-c9a65fe388b9.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-49165669/original/dfa54e99-48c1-42e4-8875-b4b5d0be63fe.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-49165669/original/3250244b-dcb1-417d-8543-c51b65418d78.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-49165669/original/9f0f1ad6-2074-4704-a3da-fb0976297cb6.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-49165669/original/45e59644-bbc9-4fb4-a885-efae1f13d44f.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-49165669/original/f254f426-4de8-4c59-8db8-fbb48b2b4c38.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-49165669/original/ad1db07c-95dd-4041-9c3a-3c0c466d611a.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-49165669/original/f7875f98-63a4-4ded-ac6c-b4aa2374c6cd.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-49165669/original/f81ddeb3-9d53-4250-9704-2a9349000b38.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-49165669/original/37912333-a59e-4227-84fd-686aa5e2ecb1.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-49165669/original/77062756-1379-47c6-b3b0-17ae44565eba.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-49165669/original/148b1051-e0eb-4d10-8f61-c3c107b1c41f.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-49165669/original/33d49e74-e484-4c0e-9726-754e0047eaad.jpeg?aki_policy=large",
            "https://z1.muscache.cn/im/pictures/miso/Hosting-49165669/original/3de6b974-2c98-421e-82e2-bf51b886fda3.jpeg?aki_policy=large",
        ],
        "verify_info": {
            "messages": [
                "整套公寓型住宅",
                "1室1卫2床"
            ],
            "text_color": "#767676"
        },
        "name": "【轻奢Loft投影房&烟火】汉溪长隆、广州南站/番禺天河城百货~万达广场/南村万博地铁站、大学城",
        "price": 370,
        "price_format": "￥370",
        "star_rating": 5,
        "star_rating_color": "#FF5A5F",
        "reviews_count": 53,
        "reviews": [
            {
                "comments": "房间空间很大，装修的风格很大气，床品有档次，当地的美食很多，在这玩的很开心",
                "created_at": "2022-06-16T00:00:00Z",
                "is_translated": false,
                "localized_date": "2022年6月",
                "reviewer_image_url": "https://a0.muscache.com/im/pictures/user/bd514790-41dd-4bd3-beb1-3ad2aea5152c.jpg?aki_policy=x_medium",
                "review_id": 650154898638268400
            }
        ],
        "bottom_info": null,
        "lat": 23.01087,
        "lng": 113.34489,
        "image_url": "/moreitems/ad0e5254433cb33ad77a035475f10782.jpg"
    }

    let handleShowPic = useCallback((isShow) => {
        setShowBrowser(isShow)
    }, [])

    return (
        <PicturesWrapper>
            <div className='pictures'>
                <div className='left'>
                    <div className='item'>
                        <img src={detailInfo?.picture_urls[0]} alt="" />
                        <div className='cover'></div>
                    </div>
                </div>
                <div className='right'>
                    {
                        detailInfo?.picture_urls?.slice(1, 5).map((item, index) => {
                            return (
                                <div className='item' key={index}>
                                    <img src={item} alt="" />
                                    <div className='cover'></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='show-btn' onClick={e => handleShowPic(true)}>显示照片</div>

            {showBrowser && <PictureBrowser handleShowPic={handleShowPic} pictureUrls={detailInfo.picture_urls} />}
        </PicturesWrapper>
    )
})

export default Pictures