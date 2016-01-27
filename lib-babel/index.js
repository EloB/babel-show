'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var func = function func() {
  return console.log('Works');
};

console.log(_path2.default.join(__dirname));

console.log('Hello world');