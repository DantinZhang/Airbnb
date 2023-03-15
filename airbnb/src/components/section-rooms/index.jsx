import PropTypes from 'prop-types';
import React, { memo } from 'react';
import RoomWrapper from './style';
import RoomItem from '../room-item';

const SectionRooms = memo((props) => {
    let { roomList, itemWidth = '25%' } = props;
    // console.log(roomList);
    //下面三行代码是按照每行item显示数量，计算并进行截取
    let eachNum = Math.floor(1 / (itemWidth?.replace('%', '') / 100));
    let roomListLength = roomList?.length;
    let sliceNum = roomListLength % eachNum;
    // console.log(eachNum,roomListLength, sliceNum)

    return (
        <RoomWrapper>
            {roomList?.slice(0, roomListLength - sliceNum).map(item => {
                return (
                    <RoomItem key={item.id} itemData={item} itemWidth={itemWidth}></RoomItem>
                )
            })}
        </RoomWrapper>
    )
})

SectionRooms.propTypes = {
    roomList: PropTypes.array
}

export default SectionRooms