import request from "../utils/request";

export const MvApi = ((data: number) => {
    return request({
        url: `/mv/url?id=${data}`,
        method: 'GET'
    })
})