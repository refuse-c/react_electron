/*
 * @Author: RA
 * @Date: 2020-04-01 17:07:55
 * @LastEditTime: 2020-04-03 17:02:07
 * @LastEditors: refuse_c
 * @Description: 
 */
import React, { Component } from 'react';
import './index.scss';
import { Route } from 'react-router-dom';
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="info">
        {
          this.props.routes.map((item, key) => {
            return <Route true key={key} path={item.path} component={item.component} />
          })
        }
      </div>
    );
  }
}

export default Info;