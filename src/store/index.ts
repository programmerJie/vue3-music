import { defineStore } from "pinia";
//引入歌词api
import { lyricApi } from "../api/Find/Lyric";

export const storeData = defineStore("store", {
  state: () => {
    return {
      show: false,
      ifShow: {
        ifTrue: true,
        ifFalse: false,
      },
      lyricIfShow: {
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
      search: "",
      lyric: {
        sgc: false,
        sfy: false,
        qfy: false,
        lyricUser: {
          id: 2353748,
          status: 99,
          demand: 0,
          userid: 105183463,
          nickname: "秋风暖暖666",
          uptime: 1510803315312,
        },
        lrc: {
          version: 16,
          lyric:
            "[00:00.000] 作词 : 李荣浩\n[00:01.000] 作曲 : 李荣浩\n[00:02.000] 编曲 : 李荣浩\n[00:03.000] 制作人 : 李荣浩\n[00:20.97]已经为了变的更好去掉锋芒\n[00:29.43]一不小心成了你的倾诉对象\n[00:37.27]电话约在从前约会的地方\n[00:41.82]要陪你唱歌吃饭我结账\n[00:46.40]保持优良习惯\n[00:53.39]你说最近过的还算幸福美满\n[01:01.35]喝了几杯唱了几段你却哭了\n[01:09.33]想去安慰却不知什么立场\n[01:13.76]听你说话看你哭湿头发\n[01:18.42]我得到了惩罚\n[01:24.67]戒了烟我不习惯\n[01:28.38]没有你我怎么办\n[01:32.37]三年零一个礼拜\n[01:36.47]才学会怎么忍耐\n[01:40.60]你给过我的伤害\n[01:44.45]是没有一句责怪\n[01:48.50]戒了烟 染上悲伤\n[01:52.36]我也不想\n[02:09.41]你说最近过的还算幸福美满\n[02:17.27]喝了几杯唱了几段你却哭了\n[02:25.37]想去安慰却不知什么立场\n[02:29.78]听你说话看你哭湿头发\n[02:34.42]我得到了惩罚\n[02:40.43]戒了烟我不习惯\n[02:44.39]没有你我怎么办\n[02:48.38]三年零一个礼拜\n[02:52.41]才学会怎么忍耐\n[02:56.48]你给过我的伤害\n[03:00.38]是没有一句责怪\n[03:04.38]戒了烟 染上悲伤\n[03:08.26]我也不想\n[03:16.44]我也不想\n[03:24.45]谁也不想\n[03:44.31]戒了烟我不习惯\n[03:48.39]没有你我怎么办\n[03:52.34]三年零一个礼拜\n[03:56.42]才学会怎么忍耐\n[04:00.46]你给过我的伤害\n[04:04.39]是没有一句责怪\n[04:12.38]戒了烟 染上悲伤\n[04:16.48]我也不想\n[04:36.79]\n[04:37.267] 吉他 : 李荣浩\n[04:38.455] 贝斯 : 李荣浩\n[04:39.643] 鼓 : 李一丁\n[04:40.831] 弦乐编写 : 李荣浩\n[04:42.019] 弦乐 : 国际首席爱乐乐团\n[04:43.207] 和声编写 : 李荣浩\n[04:44.395] 和声 : 李荣浩\n[04:45.583] 录音师 : 单为明\n[04:46.771] 混音师 : 李荣浩/曹飞\n[04:47.959] 音乐制作助理 : 杜以丞\n[04:49.147] 录音室 : 北京一样音乐录音室\n[04:50.335] 混音室 : 北京一样音乐录音室\n[04:51.523] 母带制作 : 李荣浩\n[04:52.711] 母带工程师 : Tom Coyne\n[04:53.899] 母带后期处理录音室 : Sterling Sound Studio\n",
        },
        klyric: {
          version: 0,
          lyric: "",
        },
        tlyric: {
          version: 0,
          lyric: "",
        },
        romalrc: {
          version: 0,
          lyric: "",
        },
        code: 200,
      },
      times: [] as any,
      lyrics: [] as any,
    };
  },
  actions: {
    //显示歌词弹出层
    showPopup() {
      this.show = true;
    },
    //关闭歌词弹出层
    btn() {
      this.show = false;
    },
    //播放完成
    ended() {
      this.ifShow.ifTrue = true;
      this.ifShow.ifFalse = false;
    },
    //播放
    play() {
      // @ts-ignore
      this.audio.play();
      this.ifShow.ifTrue = false;
      this.ifShow.ifFalse = true;
    },
    //暂停
    pause() {
      // @ts-ignore
      this.audio.pause();
      this.ifShow.ifTrue = true;
      this.ifShow.ifFalse = false;
    },
    //歌词显示
    lyricTrue() {
      this.lyricIfShow.ifTrue = false;
      this.lyricIfShow.ifFalse = true;
    },
    //图片显示
    lyricFalse() {
      this.lyricIfShow.ifTrue = true;
      this.lyricIfShow.ifFalse = false;
    },
    time() {
      // @ts-ignore
      // console.log(this.audio.currentTime)
    },
    totalTime() {
      // @ts-ignore
      // console.log(this.audio.duration)
    },
    //歌单列表
    async musicId(data: any) {
      //显示歌词弹出层
      this.show = true;
      //点击歌单列表把数据传给pinia
      this.music = data;
      // @ts-ignore
      //当点击歌单列表就立即播放
      this.audio.autoplay = true;
      // @ts-ignore
      //判断歌曲播放，播放就把暂停按钮改成播放按钮
      if (this.audio.autoplay) {
        this.ifShow.ifTrue = false;
        this.ifShow.ifFalse = true;
      }
      //点击歌单列表的歌曲就把歌词传给pinia
      const res = await lyricApi(this.music.id);
      this.lyric = res.data;
      //显示的是歌词就把歌词变成图片，然后把原来的歌词和时间替换成空
      if (!this.lyricIfShow.ifTrue) {
        this.lyricIfShow.ifTrue = true;
        this.lyricIfShow.ifFalse = false;
        //把歌词改成空，是为了防止点击其他歌曲造成歌词叠加
        this.times = [];
        this.lyrics = [];
        //显示的是图片就直接把原来的歌词和时间替换成空
      } else {
        this.times = [];
        this.lyrics = [];
      }
      //解析歌词
      let arr = this.lyric.lrc.lyric.split(/\n/);
      arr.forEach((item) => {
        if (item === "") return;
        let time = item.match(/\[(.+?)\]/g);
        let lyric = item.slice(10);
        if (lyric[0] === "]" || lyric[0] === "") {
          lyric = lyric.slice(1);
        }
        this.times.push(time);
        this.lyrics.push(lyric);
      });
    },
    //推荐歌曲
    async recommendSong(picUrl: string, name: any, arName: any, id: any) {
      //显示歌词弹出层
      this.show = true;
      //点击推荐歌曲把数据传进pinia
      this.music.al.picUrl = picUrl;
      this.music.name = name;
      this.music.ar[0].name = arName;
      this.music.id = id;
      // @ts-ignore
      //当点击推荐歌曲就自动播放
      this.audio.autoplay = true;
      // @ts-ignore
      //判断歌曲播放，播放就把暂停按钮改成播放按钮
      if (this.audio.autoplay) {
        this.ifShow.ifTrue = false;
        this.ifShow.ifFalse = true;
      }
      //点击推荐歌曲就把歌词传给pinia
      const res = await lyricApi(this.music.id);
      this.lyric = res.data;
      //显示的是歌词就把歌词变成图片，然后把原来的歌词和时间替换成空
      if (!this.lyricIfShow.ifTrue) {
        this.lyricIfShow.ifTrue = true;
        this.lyricIfShow.ifFalse = false;
        //把歌词改成空，是为了防止点击其他歌曲造成歌词叠加
        this.times = [];
        this.lyrics = [];
        //显示的是图片就直接把原来的歌词和时间替换成空
      } else {
        this.times = [];
        this.lyrics = [];
      }
      //解析歌词
      let arr = this.lyric.lrc.lyric.split(/\n/);
      arr.forEach((item) => {
        if (item === "") return;
        let time = item.match(/\[(.+?)\]/g);
        let lyric = item.slice(10);
        if (lyric[0] === "]" || lyric[0] === "") {
          lyric = lyric.slice(1);
        }
        this.times.push(time);
        this.lyrics.push(lyric);
      });
    },
  },
});
