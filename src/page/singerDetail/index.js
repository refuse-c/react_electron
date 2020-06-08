/*
 * @Author: REFUSE_C
 * @Date: 2020-06-05 17:54:41
 * @LastEditors: refuse_c
 * @LastEditTime: 2020-06-08 17:44:54
 * @Description:歌手详情页
 */
import React, { Component } from 'react';
import './index.scss';
import { RAGet } from '../../api/netWork';
import { artistAlbum, artistMv } from '../../api/api';
import ScrollArea from 'react-scrollbar';
import { imgParam, isEmpty, obtainId } from '../../common/utils/format';
import { Route, NavLink } from 'react-router-dom';
class SingerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: obtainId(props.history.location.pathname, 'singerdetail'),
      artistsInfo: {},
      artistsNav: [
        {
          ti: '专辑', path: `/`
        }, {
          ti: 'MV', path: `/mv`
        },
        {
          ti: '歌手详情', path: `/desc`
        },
        {
          ti: '相似歌手', path: `/simi`
        },
      ]
    };
  }
  componentDidMount = () => {
    this.requestGroup();
  };
  componentWillReceiveProps = () => {
    this.setState({ artistsInfo: {} })
    this.requestGroup();
    console.log(this.props)
  };
  requestGroup = async () => {
    const str = this.props.history.location.pathname;
    const id = obtainId(str, 'singerdetail');
    let a = await this.getArtistAlbum(id);
    let b = await this.getArtistMv(id);
    let artistsInfo = {};
    artistsInfo = a.artist
    artistsInfo.mvLength = isEmpty(b.mvs) ? 0 : b.mvs.length;
    this.setState({ artistsInfo })
  }
  getArtistAlbum = async (id) => {
    let data = {}
    await RAGet(artistAlbum.api_url, {
      params: {
        id: id,
        limit: 50,
      },
    }).then((res) => {
      data = res;
    }).catch((err) => {
      console.log(err);
    });
    return data;
  };
  getArtistMv = async (id) => {
    let data = {};
    await RAGet(artistMv.api_url, {
      params: {
        id: id,
        limit: 50,
      },
    }).then((res) => {
      data = res;
    }).catch((err) => {
      console.log(err);
    });
    return data;
  };
  componentWillUnmount() {
    // 卸载异步操作设置状态
    this.setState = (state, callback) => {
      return;
    };
  }
  render() {
    const { routes } = this.props;
    const { artistsInfo, artistsNav, id } = this.state;
    return (
      <div className="singer_details">
        <ScrollArea
          speed={0.8}
          className="area"
          contentClassName="content"
          vertical={true}
          horizontal={true}
          minScrollSize={5}
        >
          <div className="single_info">
            <img src={imgParam(artistsInfo.picUrl, 200, 200)} alt="" />
            <div className="single_box">
              <div className="artists">
                <p>歌手</p>
                <div>
                  <h2>{artistsInfo.name}</h2>
                  <span>{artistsInfo.alias}</span>
                </div>
              </div>
              <div className="artists_info">
                <p>{`单曲数：${artistsInfo.musicSize || ''}`}</p>
                <p>{`专辑数：${artistsInfo.albumSize || ''}`}</p>
                <p>{`MV数：${artistsInfo.mvLength || ''}`}</p>
              </div>
            </div>
          </div>
          <div className="singer_nav">
            <ul>
              {
                artistsNav.map((item, index) => {
                  return (
                    <NavLink exact activeClassName="active" key={item.path} to={`/home/singerdetail${id}${item.path}`}>
                      <li>{item.ti}</li>
                    </NavLink>
                  )
                })
              }
            </ul>
          </div>
          <div className="singer_content">
            {
              routes.map((route, key) => {
                return <Route exact key={key} path={route.path}
                  render={props => (
                    <route.component {...props} routes={route.routes} />
                  )}
                />
              })
            }
          </div>
        </ScrollArea>
      </div>
    );
  }
}

export default SingerDetails;