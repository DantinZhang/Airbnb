import SectionRooms from '@/components/section-rooms'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomsWrapper from './style'

const EntireRooms = memo((props) => {
  let { roomList } = props;
  return (
    <RoomsWrapper>
        <SectionRooms roomList={roomList} itemWidth='20%' />
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {
  roomList: PropTypes.array
}

export default EntireRooms