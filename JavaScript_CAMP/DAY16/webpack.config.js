/*! webpack.config.js © yamoo9.net, 2016 */
'use strict';

// 의존 모듈 로드
let webpack = require('webpack');
let path    = require('path');

// 웹팩 환경설정 객체
let webpack_config = {
  // 진입 파일
  'entry': './js/app.js',
  // 출력 파일
  'output': {
    'path': path.join(__dirname, 'js'),
    'filename': 'app.bundle.js'
  },
  // webpack 모듈 로더 설정
  'module': {
    'loaders': [
      // Sass Loader
      {
        'test': /\.(sass|scss)$/,
        'loader': 'style!css!sass'
        // 'loader': 'style-loader!css-loader!sass-loader'
        // 'loader': ['style-loader', 'css-loader', 'sass-loader']
      },
      // Babel Loader
      {
        'test': /\.es6$/,
        'exclude': /node_modules/,
        'loader': 'babel',
        'query': {
          'presets': ['es2015']
        }
      },
    ]
  },
  // 결정사항 추가
  'resolve': {
    'extensions': ['', '.js', '.es6']
  }

  // 개발 모드
  // 'devtool': 'source-map',
  // 관찰 모드
  // 'watch': true,
};

// 웹팩 환경설정 객체(모듈) 내보내기
module.exports = webpack_config;

