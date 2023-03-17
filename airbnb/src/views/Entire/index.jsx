import { reqRoomList } from '@/store/modules/entire/actionCreators'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import EntireWrapper from './style'

const Entire = memo(() => {
  let { roomList, currentPage, totalCount } = useSelector((state) => {
    return {
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
    }
  }, shallowEqual)

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(reqRoomList())
    window.scrollTo(0, 0)  //到页面顶部
  }, [])

  return (
    <EntireWrapper>
      <EntireFilter />
      <div className='content'>
        <EntireRooms roomList={roomList} />
        {totalCount > 0 && <EntirePagination currentPage={currentPage} totalCount={totalCount} />}
      </div>
    </EntireWrapper>
  )
})

export default Entire