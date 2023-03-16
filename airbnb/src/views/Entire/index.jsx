import { reqRoomList } from '@/store/modules/entire/actionCreators'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import EntireWrapper from './style'

const Entire = memo(() => {
  let { roomList } = useSelector((state) => {
    return {
      roomList: state.entire.roomList
    }
  })

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(reqRoomList())
  }, [])

  return (
    <EntireWrapper>
      <EntireFilter />
      <div className='content'>
        <EntireRooms roomList={roomList} />
        <EntirePagination />
      </div>
    </EntireWrapper>
  )
})

export default Entire