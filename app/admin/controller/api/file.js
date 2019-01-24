'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _dns = require('dns');

var _dns2 = _interopRequireDefault(_dns);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _url = require('url');

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INTERNAL_AREAS = [['10.0.0.0', '10.255.255.255'], ['172.16.0.0', '172.31.255.255'], ['192.168.0.0', '192.168.255.255'], ['127.0.0.1', '127.255.255.255']];

function ip2long(ip) {
  var multi = [0x1000000, 0x10000, 0x100, 1];
  var longValue = 0;
  ip.split('.').forEach(function (part, i) {
    return longValue += part * multi[i];
  });
  return longValue;
}

_request2.default.defaults({
  strictSSL: false,
  rejectUnauthorized: false
});

var getFileContent = think.promisify(_request2.default.get, _request2.default);
var writeFileAsync = think.promisify(_fs2.default.writeFile, _fs2.default);
var lookupAsync = think.promisify(_dns2.default.lookup, _dns2.default);

var ALLOW_EXTS = [
/** 图片文件 */
/\.(gif|jpe?g|png|tiff|bmp)$/i,
/** 多媒体文件 */
/\.(mp3|wmv|mp4|avi|flv)$/i,
/** 常用档案文件 */
/\.(txt|xml|json|docx?|xlsx?|pptx?)/i, /\.(zip|rar|pdf|gz)/i];

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.uploadConfig = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_class, [{
    key: '__before',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _get3.default)(_class.prototype.__proto__ || (0, _getPrototypeOf2.default)(_class.prototype), '__before', this).call(this);

              case 2:
                _context.next = 4;
                return this.getUploadConfig();

              case 4:
                this.uploadConfig = _context.sent;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function __before() {
        return _ref2.apply(this, arguments);
      }

      return __before;
    }()
  }, {
    key: 'postAction',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var config, _config, type, file, ext;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                config = this.uploadConfig;
                _config = config, type = _config.type;
                file = void 0;

                /** 处理远程抓取 **/

                if (!this.post('fileUrl')) {
                  _context2.next = 15;
                  break;
                }

                _context2.prev = 4;
                _context2.next = 7;
                return this.getUrlFile(this.post('fileUrl'));

              case 7:
                file = _context2.sent;
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2['catch'](4);
                return _context2.abrupt('return', this.fail(_context2.t0.message));

              case 13:
                _context2.next = 16;
                break;

              case 15:
                file = this.file('file');

              case 16:
                if (file) {
                  _context2.next = 18;
                  break;
                }

                return _context2.abrupt('return', this.fail('FILE_UPLOAD_ERROR'));

              case 18:

                /** 检查文件类型 */
                ext = this.extWhiteList(file);

                if (ext) {
                  _context2.next = 21;
                  break;
                }

                return _context2.abrupt('return', this.fail('FILE_FORMAT_NOT_ALLOWED'));

              case 21:
                if (!this.post('importor')) {
                  _context2.next = 23;
                  break;
                }

                return _context2.abrupt('return', this.serviceImport(this.post('importor'), file));

              case 23:
                if (type) {
                  _context2.next = 25;
                  break;
                }

                return _context2.abrupt('return', this.fail());

              case 25:
                if (type === 'local') {
                  config = { name: this.post('name') };
                }

                return _context2.abrupt('return', this.serviceUpload(type, file.path, config));

              case 27:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 10]]);
      }));

      function postAction() {
        return _ref3.apply(this, arguments);
      }

      return postAction;
    }()

    // 导出其他平台数据

  }, {
    key: 'getAction',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.get('exporter')) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return', this.serviceExport(this.get('exporter')));

              case 2:
                return _context3.abrupt('return', this.success());

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAction() {
        return _ref4.apply(this, arguments);
      }

      return getAction;
    }()

    //MIME过滤

  }, {
    key: 'extWhiteList',
    value: function extWhiteList(file) {
      return ALLOW_EXTS.some(function (reg) {
        return reg.test(file.originalFilename);
      });
    }

    // 获取上传设置

  }, {
    key: 'getUploadConfig',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        var options;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.model('options').getOptions();

              case 2:
                options = _context4.sent;
                return _context4.abrupt('return', options.upload);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getUploadConfig() {
        return _ref5.apply(this, arguments);
      }

      return getUploadConfig;
    }()

    /**
     * 上传文件
     */

  }, {
    key: 'serviceUpload',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(service, file, config) {
        var uploader, result;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                uploader = think.service('upload/' + service, 'admin');
                _context5.next = 4;
                return new uploader().run(file, config);

              case 4:
                result = _context5.sent;
                return _context5.abrupt('return', this.success(result));

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5['catch'](0);
                return _context5.abrupt('return', this.fail(_context5.t0 || 'FILE_UPLOAD_ERROR'));

              case 11:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function serviceUpload(_x, _x2, _x3) {
        return _ref6.apply(this, arguments);
      }

      return serviceUpload;
    }()

    /**
     * 从其他平台导入数据
     */

  }, {
    key: 'serviceImport',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(service, file) {
        var importor, _ref8, post, page, category, tag;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                importor = think.service('import/' + service, 'admin');
                _context6.next = 4;
                return new importor(this).run(file);

              case 4:
                _ref8 = _context6.sent;
                post = _ref8.post;
                page = _ref8.page;
                category = _ref8.category;
                tag = _ref8.tag;
                return _context6.abrupt('return', this.success('\u5171\u5BFC\u5165\u6587\u7AE0 ' + post + ' \u7BC7\uFF0C\u9875\u9762 ' + page + ' \u9875\uFF0C\u5206\u7C7B ' + category + ' \u4E2A\uFF0C\u6807\u7B7E ' + tag + ' \u4E2A'));

              case 12:
                _context6.prev = 12;
                _context6.t0 = _context6['catch'](0);
                return _context6.abrupt('return', this.fail(_context6.t0));

              case 15:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 12]]);
      }));

      function serviceImport(_x4, _x5) {
        return _ref7.apply(this, arguments);
      }

      return serviceImport;
    }()

    /**
     * 导出数据到其它平台
     */

  }, {
    key: 'serviceExport',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(service) {
        var exporter, file;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                exporter = think.service('export/' + service, 'admin');
                _context7.next = 4;
                return new exporter().run();

              case 4:
                file = _context7.sent;
                return _context7.abrupt('return', this.download(file));

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7['catch'](0);
                return _context7.abrupt('return', this.fail(_context7.t0));

              case 11:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 8]]);
      }));

      function serviceExport(_x6) {
        return _ref9.apply(this, arguments);
      }

      return serviceExport;
    }()
  }, {
    key: 'getUrlFile',
    value: function () {
      var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(url) {
        var _parse, hostname, longIP, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step$value, start, end, resp, uploadDir, uploadName, uploadPath;

        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _parse = (0, _url.parse)(url), hostname = _parse.hostname;

                if (/^\d+\.\d+\.\d+\.\d+/i.test(hostname)) {
                  _context8.next = 5;
                  break;
                }

                _context8.next = 4;
                return lookupAsync(hostname);

              case 4:
                hostname = _context8.sent;

              case 5:
                longIP = ip2long(hostname);
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context8.prev = 9;
                _iterator = (0, _getIterator3.default)(INTERNAL_AREAS);

              case 11:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context8.next = 20;
                  break;
                }

                _step$value = (0, _slicedToArray3.default)(_step.value, 2), start = _step$value[0], end = _step$value[1];

                start = ip2long(start);
                end = ip2long(end);

                if (!(longIP >= start && longIP <= end)) {
                  _context8.next = 17;
                  break;
                }

                throw new Error('URL ILLEGAL');

              case 17:
                _iteratorNormalCompletion = true;
                _context8.next = 11;
                break;

              case 20:
                _context8.next = 26;
                break;

              case 22:
                _context8.prev = 22;
                _context8.t0 = _context8['catch'](9);
                _didIteratorError = true;
                _iteratorError = _context8.t0;

              case 26:
                _context8.prev = 26;
                _context8.prev = 27;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 29:
                _context8.prev = 29;

                if (!_didIteratorError) {
                  _context8.next = 32;
                  break;
                }

                throw _iteratorError;

              case 32:
                return _context8.finish(29);

              case 33:
                return _context8.finish(26);

              case 34:
                _context8.next = 36;
                return getFileContent({
                  url: url,
                  headers: {
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) Chrome/47.0.2526.111 Safari/537.36'
                  },
                  strictSSL: false,
                  timeout: 1000,
                  encoding: 'binary'
                }).catch(function () {
                  throw new Error('UPLOAD_URL_ERROR');
                });

              case 36:
                resp = _context8.sent;

                if (!(resp.headers['content-type'].indexOf('image') === -1)) {
                  _context8.next = 39;
                  break;
                }

                throw new Error('UPLOAD_TYPE_ERROR');

              case 39:
                uploadDir = this.config('post').file_upload_path;

                if (!uploadDir) {
                  uploadDir = _path2.default.join(_os2.default.tmpdir(), 'thinkjs/upload');
                }
                if (!think.isDir(uploadDir)) {
                  think.mkdir(uploadDir);
                }

                uploadName = think.uuid(20) + _path2.default.extname(url);
                uploadPath = _path2.default.join(uploadDir, uploadName);
                _context8.next = 46;
                return writeFileAsync(uploadPath, resp.body, 'binary');

              case 46:
                return _context8.abrupt('return', {
                  fieldName: 'file',
                  originalFilename: _path2.default.basename(url),
                  path: uploadPath,
                  size: resp.headers['content-length']
                });

              case 47:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this, [[9, 22, 26, 34], [27,, 29, 33]]);
      }));

      function getUrlFile(_x7) {
        return _ref10.apply(this, arguments);
      }

      return getUrlFile;
    }()
  }]);
  return _class;
}(_base2.default);

exports.default = _class;