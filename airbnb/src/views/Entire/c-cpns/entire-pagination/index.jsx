import PropTypes from 'prop-types'
import React, { memo } from 'react'
import PaginationWrapper from './style'
import { Pagination } from 'antd'
import { useDispatch } from 'react-redux'
import { getCurrentPage, reqRoomList } from '@/store/modules/entire/actionCreators'

const EntirePagination = memo((props) => {
  let { totalCount, currentPage } = props;

  let dispatch = useDispatch();
  function handleChangePage(page, pageSize) {
    //回到顶部
    window.scrollTo(0, 0)
    dispatch(getCurrentPage(page - 1)); //当前页从0开始的，所以要-1
    dispatch(reqRoomList()); //重新请求数据
  }

  return (
    <PaginationWrapper>
      <Pagination
        onChange={handleChangePage}
        defaultCurrent={currentPage + 1}
        showTotal={(total, range) => `第${range[0]} - ${range[1]} 个房源，共超过 ${total} 个`}
        pageSize={20}
        total={totalCount} />
    </PaginationWrapper>
  )
})

EntirePagination.propTypes = {
  totalCount: PropTypes.number,
  currentPage: PropTypes.number
}

export default EntirePagination