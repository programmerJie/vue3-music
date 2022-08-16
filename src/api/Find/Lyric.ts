import request from "../../utils/request";

export const lyricApi = (data: number) => {
    return request({
        url: `/lyric?id=${data}`,
        method: "GET"
    })
}