import {defineStore} from "pinia";

export const storeData = defineStore("store", {
    state: () => {
        return {
            ifShow: {
                ifTrue: true,
                ifFalse: false,
            },
            music: {
                name: "戒烟",
                id: 518686034,
                pst: 0,
                t: 0,
                url: "",
                ar: [
                    {
                        id: 4292,
                        name: "李荣浩",
                        tns: [],
                        alias: [],
                    },
                ],
                alia: [],
                pop: 100,
                st: 0,
                rt: null,
                fee: 8,
                v: 27,
                crbt: null,
                cf: "",
                al: {
                    id: 36796018,
                    name: "戒烟",
                    picUrl:
                        "https://p1.music.126.net/p8YbMNyWHOWz3t1ScDeoPw==/109951164476446746.jpg",
                    tns: [],
                    pic_str: "109951164476446746",
                    pic: 109951164476446750,
                },
                dt: 293903,
                h: {
                    br: 320000,
                    fid: 0,
                    size: 11757236,
                    vd: -44692,
                    sr: 44100,
                },
                m: {
                    br: 192000,
                    fid: 0,
                    size: 7054359,
                    vd: -42116,
                    sr: 44100,
                },
                l: {
                    br: 128000,
                    fid: 0,
                    size: 4702920,
                    vd: -40437,
                    sr: 44100,
                },
                sq: null,
                hr: null,
                a: null,
                cd: "1",
                no: 1,
                rtUrl: null,
                ftype: 0,
                rtUrls: [],
                djId: 0,
                copyright: 1,
                s_id: 0,
                mark: 65536,
                originCoverType: 1,
                originSongSimpleData: null,
                tagPicList: null,
                resourceState: true,
                version: 27,
                songJumpInfo: null,
                entertainmentTags: null,
                awardTags: null,
                single: 0,
                noCopyrightRcmd: null,
                rtype: 0,
                rurl: null,
                mv: 5736067,
                mst: 9,
                cp: 7002,
                publishTime: 1510588800000,
            },
            audio: {},
            search: ''
        };
    },
    actions: {
        btn1() {
            this.ifShow.ifTrue = false;
            this.ifShow.ifFalse = true;
            // @ts-ignore
            this.audio.play();
        },
        btn2() {
            this.ifShow.ifTrue = true;
            this.ifShow.ifFalse = false;
            // @ts-ignore
            this.audio.pause();
        },
        musicId(data: any) {
            this.music = data;
            // @ts-ignore
            this.audio.autoplay = true;
            // @ts-ignore
            if (this.audio.autoplay) {
                this.ifShow.ifTrue = false;
                this.ifShow.ifFalse = true;
            } else {
                this.ifShow.ifTrue = true;
                this.ifShow.ifFalse = false;
            }
        },
        recommendSong(picUrl: string, name: any, arName: any, id: any) {
            this.music.al.picUrl = picUrl
            this.music.name = name
            this.music.ar[0].name = arName
            this.music.id = id
            // @ts-ignore
            this.audio.autoplay = true;
            // @ts-ignore
            if (this.audio.autoplay) {
                this.ifShow.ifTrue = false;
                this.ifShow.ifFalse = true;
            } else {
                this.ifShow.ifTrue = true;
                this.ifShow.ifFalse = false;
            }
        },
    },
});
