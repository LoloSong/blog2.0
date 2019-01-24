'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cluster = require('cluster');

var statsAsync = think.promisify(_fs2.default.stat);
var readdirAsync = think.promisify(_fs2.default.readdir);
var readFileAsync = think.promisify(_fs2.default.readFile);
var writeFileAsync = think.promisify(_fs2.default.writeFile);
var THEME_DIR = _path2.default.join(think.RESOURCE_PATH, 'theme');

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'pathCheck',

    /**
     * forbidden ../ style path
     */
    value: function pathCheck(themePath) {
      var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : THEME_DIR;

      if (themePath.indexOf(basePath) !== 0) {
        this.fail();
        throw Error('theme path ' + themePath + ' error');
      }
      return true;
    }
  }, {
    key: 'getAction',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _get, theme, themePath, files, _get2, filePath, file;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this.get('type');
                _context.next = _context.t0 === 'fileList' ? 3 : _context.t0 === 'file' ? 10 : _context.t0 === 'templateList' ? 17 : _context.t0 === 'themeList' ? 20 : 20;
                break;

              case 3:
                _get = this.get(), theme = _get.theme;
                themePath = _path2.default.join(THEME_DIR, theme);

                this.pathCheck(themePath);

                _context.next = 8;
                return this.getFileList(themePath);

              case 8:
                files = _context.sent;
                return _context.abrupt('return', this.success(files));

              case 10:
                _get2 = this.get(), filePath = _get2.filePath;

                filePath = _path2.default.join(THEME_DIR, filePath);
                this.pathCheck(filePath);

                _context.next = 15;
                return readFileAsync(filePath, { encoding: 'utf-8' });

              case 15:
                file = _context.sent;
                return _context.abrupt('return', this.success(file));

              case 17:
                _context.next = 19;
                return this.getPageTemplateList();

              case 19:
                return _context.abrupt('return', _context.sent);

              case 20:
                _context.next = 22;
                return this.getThemeList();

              case 22:
                return _context.abrupt('return', _context.sent);

              case 23:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAction() {
        return _ref.apply(this, arguments);
      }

      return getAction;
    }()
  }, {
    key: 'updateAction',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var _post, filePath, content;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _post = this.post(), filePath = _post.filePath, content = _post.content;

                filePath = _path2.default.join(THEME_DIR, filePath);
                this.pathCheck(filePath);

                _context2.prev = 3;
                _context2.next = 6;
                return writeFileAsync(filePath, content, { encoding: 'utf-8' });

              case 6:

                if (cluster.isWorker) {
                  setTimeout(function () {
                    return cluster.worker.kill();
                  }, 200);
                }
                this.success();
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2['catch'](3);
                return _context2.abrupt('return', this.fail(_context2.t0));

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 10]]);
      }));

      function updateAction() {
        return _ref2.apply(this, arguments);
      }

      return updateAction;
    }()

    /**
     * Fork theme
     */

  }, {
    key: 'putAction',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', this.fail('自动克隆接口已废弃，你可以手动操作'));

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function putAction() {
        return _ref3.apply(this, arguments);
      }

      return putAction;
    }()

    /**
     * 递归获取文件夹树
     */

  }, {
    key: 'getFileList',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(base) {
        var result, files, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, pos, stat;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = [];
                _context4.next = 3;
                return readdirAsync(base);

              case 3:
                files = _context4.sent;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context4.prev = 7;
                _iterator = (0, _getIterator3.default)(files);

              case 9:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context4.next = 27;
                  break;
                }

                file = _step.value;
                pos = _path2.default.join(base, file);
                _context4.next = 14;
                return statsAsync(pos);

              case 14:
                stat = _context4.sent;

                if (!stat.isDirectory()) {
                  _context4.next = 23;
                  break;
                }

                _context4.t0 = result;
                _context4.t1 = file;
                _context4.next = 20;
                return this.getFileList(pos);

              case 20:
                _context4.t2 = _context4.sent;
                _context4.t3 = {
                  module: _context4.t1,
                  children: _context4.t2
                };

                _context4.t0.push.call(_context4.t0, _context4.t3);

              case 23:

                if (stat.isFile()) {
                  result.push({ module: file });
                }

              case 24:
                _iteratorNormalCompletion = true;
                _context4.next = 9;
                break;

              case 27:
                _context4.next = 33;
                break;

              case 29:
                _context4.prev = 29;
                _context4.t4 = _context4['catch'](7);
                _didIteratorError = true;
                _iteratorError = _context4.t4;

              case 33:
                _context4.prev = 33;
                _context4.prev = 34;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 36:
                _context4.prev = 36;

                if (!_didIteratorError) {
                  _context4.next = 39;
                  break;
                }

                throw _iteratorError;

              case 39:
                return _context4.finish(36);

              case 40:
                return _context4.finish(33);

              case 41:
                return _context4.abrupt('return', result);

              case 42:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[7, 29, 33, 41], [34,, 36, 40]]);
      }));

      function getFileList(_x2) {
        return _ref4.apply(this, arguments);
      }

      return getFileList;
    }()

    /**
     * 获取主题列表
     */

  }, {
    key: 'getThemeList',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
        var themes, result, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, theme, infoFile;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return readdirAsync(THEME_DIR);

              case 2:
                themes = _context5.sent;
                result = [];
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context5.prev = 7;
                _iterator2 = (0, _getIterator3.default)(themes);

              case 9:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context5.next = 24;
                  break;
                }

                theme = _step2.value;
                infoFile = _path2.default.join(THEME_DIR, theme, 'package.json');
                _context5.prev = 12;
                _context5.next = 15;
                return statsAsync(infoFile);

              case 15:
                result.push(think.extend({ id: theme }, think.require(infoFile)));
                _context5.next = 21;
                break;

              case 18:
                _context5.prev = 18;
                _context5.t0 = _context5['catch'](12);

                console.log(_context5.t0); // eslint-disable-line no-console

              case 21:
                _iteratorNormalCompletion2 = true;
                _context5.next = 9;
                break;

              case 24:
                _context5.next = 30;
                break;

              case 26:
                _context5.prev = 26;
                _context5.t1 = _context5['catch'](7);
                _didIteratorError2 = true;
                _iteratorError2 = _context5.t1;

              case 30:
                _context5.prev = 30;
                _context5.prev = 31;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 33:
                _context5.prev = 33;

                if (!_didIteratorError2) {
                  _context5.next = 36;
                  break;
                }

                throw _iteratorError2;

              case 36:
                return _context5.finish(33);

              case 37:
                return _context5.finish(30);

              case 38:
                return _context5.abrupt('return', this.success(result));

              case 39:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[7, 26, 30, 38], [12, 18], [31,, 33, 37]]);
      }));

      function getThemeList() {
        return _ref5.apply(this, arguments);
      }

      return getThemeList;
    }()

    /**
     * 获取主题的自定义模板
     */

  }, {
    key: 'getPageTemplateList',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
        var _get3, theme, templatePath, templates, stat;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _get3 = this.get(), theme = _get3.theme;
                templatePath = _path2.default.join(THEME_DIR, theme, 'template');

                this.pathCheck(templatePath);

                templates = [];
                _context6.prev = 4;
                _context6.next = 7;
                return statsAsync(templatePath);

              case 7:
                stat = _context6.sent;

                if (stat.isDirectory()) {
                  _context6.next = 10;
                  break;
                }

                throw Error();

              case 10:
                _context6.next = 15;
                break;

              case 12:
                _context6.prev = 12;
                _context6.t0 = _context6['catch'](4);
                return _context6.abrupt('return', this.success(templates));

              case 15:
                _context6.next = 17;
                return readdirAsync(templatePath);

              case 17:
                templates = _context6.sent;

                templates = templates.filter(function (t) {
                  return (/\.html$/.test(t)
                  );
                });
                return _context6.abrupt('return', this.success(templates));

              case 20:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[4, 12]]);
      }));

      function getPageTemplateList() {
        return _ref6.apply(this, arguments);
      }

      return getPageTemplateList;
    }()
  }]);
  return _class;
}(_base2.default);

exports.default = _class;