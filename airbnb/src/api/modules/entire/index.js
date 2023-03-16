import hyRequest from "@/api"

//查看全部部分的api接口
//参数：首页offset=0,size=20,第二页offset=20,size=20,第三页offset=40,size=20
export const reqEntireRoomList = (offset = 0, size = 20) => {
    return hyRequest.request({
        method: 'get',
        url: '/entire/list',
        params: {
            offset: offset,
            size: size
        }
    })
}