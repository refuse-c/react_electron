/*
 * @Author: RA
 * @Date: 2020-04-02 09:29:43
 * @LastEditTime: 2020-07-10 17:42:34
 * @LastEditors: refuse_c
 * @Description:
 */
//获取歌单
export const musicList = {
  api_url: '/user/playlist',
};
//获取歌单列表
export const playList = {
  api_url: '/playlist/detail',
};
//搜索
export const search = {
  api_url: '/search',
};
//热搜
export const searchHot = {
  api_url: '/search/hot/detail',
};
// placeholder
export const searchDefaule = {
  api_url: 'search/default',
};
// 搜索建议
export const searchSuggest = {
  api_url: 'search/suggest',
};
//获取音乐详情
export const getMusicDetail = {
  api_url: '/song/detail',
};
//手机号登录
export const loginTel = {
  api_url: '/login/cellphone',
};
// 获取音乐url
export const getMusicUrl = {
  api_url: '/song/url',
};
// 登录状态
export const loginStatus = {
  api_url: '/login/status',
};
//推荐歌单
export const recommendList = {
  api_url: '/personalized',
};
//推荐歌曲
export const recommendSong = {
  api_url: '/recommend/songs',
};
//独家放送入口
export const privatecontent = {
  api_url: '/personalized/privatecontent',
};
//独家放送列表
export const privatecontentList = {
  api_url: '/personalized/privatecontent/list',
};

//获取歌词
export const getLyric = {
  api_url: '/lyric',
};
//获取轮播图
export const getBanner = {
  api_url: '/banner',
};
//最新音乐
export const topSongs = {
  api_url: '/top/song',
};
//获取专辑列表
export const albumList = {
  api_url: '/album',
};
//视频标签列表
export const videoCategory = {
  api_url: '/video/category/list'
}
//视频分类列表
export const videoGroupList = {
  api_url: '/video/group/list',
};
//全部视频
export const videoAll = {
  api_url: '/video/timeline/all'
}
//单个标签数据
export const videoGroup = {
  api_url: '/video/group',
};
//获取视频详情
export const videoDetail = {
  api_url: '/video/detail',
};
//获取视频url
export const videoUrl = {
  api_url: '/video/url',
};
//相关视频
export const relatedAllvideo = {
  api_url: '/related/allvideo',
};
//歌单分类
export const playlistCatlist = {
  api_url: '/playlist/catlist',
};
//热门歌单
export const playlistHot = {
  api_url: '/playlist/hot',
};
//歌单获取
export const topPlaylist = {
  api_url: '/top/playlist',
};
//排行榜
export const topList = {
  api_url: '/top/list',
};
//所有榜单
export const allTopList = {
  api_url: '/toplist',
};
//所有榜单摘要内容
export const toplistDetail = {
  api_url: '/toplist/detail',
};
//歌手榜
export const toplistArtist = {
  api_url: '/toplist/artist',
};
//batch批量请求
export const batch = {
  api_url: '/batch',
};
//mv地址
export const mvUrl = {
  api_url: '/mv/url',
};
//相似mv
export const simiMv = {
  api_url: '/simi/mv',
};
//mv详情
export const mvDetail = {
  api_url: '/mv/detail',
};
//推荐mv
export const personalizedMv = {
  api_url: '/personalized/mv',
};
//全部 mv
export const mvAll = {
  api_url: '/mv/all',
};
//最新mv
export const mvFirst = {
  api_url: '/mv/first',
};
//网易出品
export const mvRcmd = {
  api_url: '/mv/exclusive/rcmd',
};
//mv排行
export const mvTop = {
  api_url: '/top/mv',
};
//歌手列表
export const artistList = {
  api_url: '/artist/list',
};
//歌手描述
export const artistDesc = {
  api_url: '/artist/desc',
};
//歌手专辑
export const artistAlbum = {
  api_url: '/artist/album',
};
//歌手MV
export const artistMv = {
  api_url: '/artist/mv',
};
//相似歌手
export const simiArtist = {
  api_url: '/simi/artist',
};
//歌手热门top50
export const artistTopSong = {
  api_url: '/artist/top/song',
};
//新歌速递
export const topSong = {
  api_url: '/top/song'
}
// mv评论
export const mvComment = {
  api_url: '/comment/mv'
}
// 视频评论
export const videoComment = {
  api_url: '/comment/video'
}
// 热门评论
export const hotComment = {
  api_url: '/comment/hot'
}
//歌曲评论
export const musicComment = {
  api_url: '/comment/music'
}
// 获取用户信息 , 歌单，收藏，mv, dj 数量
export const userSubcount = {
  api_url: '/user/subcount'
}
// 获取用户详情
export const userDetail = {
  api_url: '/user/detail'
}
// 获取动态消息
export const event = {
  api_url: '/event'
}
// 获取动态消息
export const userEvent = {
  api_url: '/user/event'
}

//相似音乐
export const simiSong = {
  api_url: '/simi/song'
}
//包含歌曲的歌单
export const simiPlaylist = {
  api_url: '/simi/playlist'
}
//获取最近 5 个听了这首歌的用户
export const simiUser = {
  api_url: '/simi/user'
}