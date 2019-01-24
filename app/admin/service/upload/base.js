'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get3 = require('babel-runtime/helpers/get');

var _get4 = _interopRequireDefault(_get3);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$service$base) {
  (0, _inherits3.default)(_class, _think$service$base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'init',
    value: function init() {
      var _get2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get4.default)(_class.prototype.__proto__ || (0, _getPrototypeOf2.default)(_class.prototype), 'init', this)).call.apply(_get2, [this].concat(args));
    }

    // 域名不带http/https自动补全http

  }, {
    key: 'getAbsOrigin',
    value: function getAbsOrigin(origin) {
      var reg = /^(https?:)?\/\/.+/;
      if (!reg.test(origin)) {
        return 'http://' + origin;
      }
      return origin;
    }

    // 获取当前的格式化时间

  }, {
    key: 'formatNow',
    value: function formatNow() {
      return (0, _moment2.default)(new Date()).format('YYYYMMDD');
    }

    // 获取存储路径

  }, {
    key: 'getSavePath',
    value: function getSavePath(filename, prefix) {
      prefix = prefix ? prefix + '/' : '';
      var dir = this.formatNow();
      var basename = _path2.default.basename(filename);
      return '' + prefix + dir + '/' + basename;
    }

    // 导入方法

  }, {
    key: 'uploadMethod',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function uploadMethod() {
        return _ref.apply(this, arguments);
      }

      return uploadMethod;
    }()
  }, {
    key: 'upload',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(filename, config) {
        var result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.uploadMethod(filename, config);

              case 2:
                result = _context2.sent;
                return _context2.abrupt('return', result);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function upload(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return upload;
    }()
  }]);
  return _class;
}(think.service.base);

exports.default = _class;