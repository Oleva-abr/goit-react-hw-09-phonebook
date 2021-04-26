import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from './loader.module.css';

class Spin extends Component {
  state = {};
  render() {
    return (
      <div className={style.loader}>
        <Loader
          type="ThreeDots"
          color="#1877f2"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}

export default Spin;
