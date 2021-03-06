/*
 * @Author: REFUSE_C
 * @Date: 2020-04-03 15:13:06
 * @LastEditors: refuse_c
 * @LastEditTime: 2020-06-08 17:18:42
 * @Description:检索-Video
 */
import React, { Component } from 'react';
import './index.scss';
import { imgParam, isArrays } from '../../common/utils/format';
import { NavLink } from 'react-router-dom';
import Empty from '../../components/empty';

//store
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { setPageNum, gainSearchInfo, setMenuIndex } from '../../store/actions';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { data } = this.props;
    const path = '/videoDetail';
    return (
      <div className="video">
        {
          isArrays(data) ?
            <ul>
              {
                data && data.map((item, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={path + (item.vid || item.id)}
                    >
                      <li>
                        <img src={imgParam(item.coverUrl || item.imgurl, 160, 90)} alt="" />
                        <h4>{item.title || item.name}</h4>
                        <p>by {item.artistName || item.creator[0].userName || ''}</p>
                      </li>
                    </NavLink>
                  )
                })
              }
            </ul>
            : <Empty />
        }

      </div>
    );
  }
}
//注册store
const mapStateToProps = (state) => {
  return {
    searchInfo: state.searchInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // gainSearchInfo: bindActionCreators(gainSearchInfo, dispatch),
    // setPageNum: bindActionCreators(setPageNum, dispatch),
    // setMenuIndex: bindActionCreators(setMenuIndex, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Video);