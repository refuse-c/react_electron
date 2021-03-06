/*
 * @Author: RA
 * @Date: 2020-06-07 01:14:11
 * @LastEditTime: 2020-06-09 13:46:58
 * @LastEditors: refuse_c
 * @Description: 歌手详情->描述
 */
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import '../index.scss';
import { obtainId, isEmpty } from '../../../common/utils/format';
import { RAGet } from '../../../api/netWork';
import { artistDesc } from '../../../api/api';
import Empty from '../../../components/empty';
class singerDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistDesc: ''
    }
  }
  componentDidMount = () => {
    const id = obtainId(window.location.href, 'singerdetail')
    this.getArtistDesc(id);
  }
  getArtistDesc = async (id) => {
    await RAGet(artistDesc.api_url, {
      params: {
        id: id,
      },
    }).then((res) => {
      const artistDesc = res;
      const desc = artistDesc.introduction;
      let text = '';
      if (desc.length > 0) {
        desc.forEach(ele => {
          text += `\n## ${ele.ti}\n +  ${ele.txt.replace(/\n/g, '\n + ')}`
        });
      } else if (!isEmpty(res.briefDesc)) {
        text += `\n## 人物简介\n +  ${res.briefDesc}`
      } else {
        text = ''
      }
      this.setState({ artistDesc: text });
    }).catch((err) => {
      // console.log(err);
    });
  };
  componentWillUnmount() {
    // 卸载异步操作设置状态
    this.setState = (state, callback) => {
      return;
    };
  }
  render() {
    const { artistDesc } = this.state;
    return (
      <div className="singer_desc">
        {
          !isEmpty(artistDesc)
            ? <ReactMarkdown
              source={artistDesc}
              escapeHtml={false}  //不进行HTML标签的转化
            />
            : <Empty />
        }


      </div>
    );
  }
}

export default singerDesc;