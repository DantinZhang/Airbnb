import PropTypes from 'prop-types';
import React, { memo } from 'react';
import RoomWrapper from './style';
import RoomItem from '../room-item';

const SectionRooms = memo((props) => {
    let { roomList } = props;
    return (
        <RoomWrapper>
            {roomList?.map(item => {
                return (
                    <RoomItem key={item.id} itemData={item}></RoomItem>
                )
            })}
        </RoomWrapper>
    )
})

SectionRooms.propTypes = {
    roomList: PropTypes.array
}

export default SectionRooms