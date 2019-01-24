'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _aliOss = require('ali-oss');

var _aliOss2 = _interopRequireDefault(_aliOss);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'uploadMethod',

    // 导入方法
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(filename, config) {
        var client, savePath, origin;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                client = new _aliOss2.default({
                  region: config.region,
                  accessKeyId: config.accessKeyId,
                  accessKeySecret: config.accessKeySecret,
                  bucket: config.bucket
                });
                savePath = this.getSavePath(filename, config.prefix);
                origin = this.getAbsOrigin(config.origin);
                return _context2.abrupt('return', new _promise2.default(function (resolve, reject) {
                  (0, _co2.default)(_regenerator2.default.mark(function _callee() {
                    var result, compeletePath;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return client.put(savePath, filename);

                          case 2:
                            result = _context.sent;
                            compeletePath = origin + '/' + result.name;

                            resolve(compeletePath);

                          case 5:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  })).catch(function (err) {
                    reject(err);
                  });
                }));

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function uploadMethod(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return uploadMethod;
    }()

    // 执行方法

  }, {
    key: 'run',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(file, config) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.upload(file, config);

              case 2:
                return _context3.abrupt('return', _context3.sent);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function run(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return run;
    }()
  }]);
  return _class;
}(_base2.default);

exports.default = _class;