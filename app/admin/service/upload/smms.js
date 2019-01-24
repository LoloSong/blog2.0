'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var _formData = require('form-data');

var _formData2 = _interopRequireDefault(_formData);

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
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(filename, config) {
        var form, buffer;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                form = new _formData2.default();
                buffer = require('fs').readFileSync(filename);

                form.append('smfile', buffer, (0, _assign2.default)({
                  filename: filename.split('/')[filename.split('/').length - 1],
                  contentType: 'image/png'
                }));

                if (!(buffer.length >= 1024 * 1024 * 5)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt('return', _promise2.default.reject(config));

              case 5:
                return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
                  var request = _https2.default.request({
                    method: 'POST',
                    hostname: 'sm.ms',
                    path: '/api/upload',
                    headers: (0, _assign2.default)({}, form.getHeaders(), {
                      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) Chrome/47.0.2526.111 Safari/537.36'
                    })
                  }, function (res) {
                    var all = '';
                    res.on('data', function (chunk) {
                      return all += chunk;
                    });
                    res.on('end', function () {
                      try {
                        all = JSON.parse(all);
                        resolve(all.code === 'success' && all.data.url);
                      } catch (e) {
                        reject(false);
                      }
                    });
                  }).on('error', function () {
                    return reject(false);
                  });
                  form.pipe(request);
                }));

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
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
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(file, config) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.upload(file, config);

              case 2:
                return _context2.abrupt('return', _context2.sent);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
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