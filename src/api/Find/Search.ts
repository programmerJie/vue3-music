import request from "../../utils/request";

export const searchApi = (data: string | number) => {
    return request({
        url: `/cloudsearch?keywords=${data}`,
        method: "GET",
    });
};
export const hotSearchListApi = () => {
    return request({
        url: '/search/hot/detail',
        method: 'GET'
    })
}