'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startPost = '\n\u8FD9\u662F\u7A0B\u5E8F\u81EA\u52A8\u53D1\u5E03\u7684\u6587\u7AE0\u3002\u5982\u679C\u60A8\u770B\u5230\u8FD9\u7BC7\u6587\u7AE0\uFF0C\u8868\u793A\u60A8\u7684 Blog \u5DF2\u7ECF\u5B89\u88C5\u6210\u529F\uFF01\n\n\u5982\u679C\u60A8\u5BF9 Firekylin \u4E0D\u662F\u5F88\u719F\u6089\uFF0C\u53EF\u4EE5\u5148\u9605\u8BFB\u4EE5\u4E0B\u5E38\u7528\u64CD\u4F5C\u4E86\u89E3\u4E00\u4E0B\u3002\n\n<!--more-->\n\n## \u5E38\u7528\u64CD\u4F5C\n### \u767B\u5F55\u540E\u53F0\nFirekylin \u7684\u540E\u53F0\u767B\u5F55\u5165\u53E3\u5728 [~/admin](/admin)\n\n### \u7F51\u7AD9\u57FA\u672C\u8BBE\u7F6E\n\u540E\u53F0\u7684 [\u7CFB\u7EDF\u8BBE\u7F6E](/admin/options/) \u63D0\u4F9B\u4E86\u4E0E\u7F51\u7AD9\u76F8\u5173\u7684\u9009\u9879\uFF0C\u4F8B\u5982\u53EF\u5728\u5176\u4E2D\u7684 [\u57FA\u672C\u8BBE\u7F6E](admin/options/general) \u4E2D\u8BBE\u7F6E\u7F51\u7AD9\u540D\u79F0\u3001Logo\u5730\u5740\u7B49\u3002  \n\u66F4\u591A\u7684\u8BBE\u7F6E\uFF0C\u8BF7\u53C2\u8003 [\u5B98\u65B9 WIKI](https://github.com/firekylin/firekylin/wiki/) \u7684 [\u7CFB\u7EDF\u8BBE\u7F6E](https://github.com/firekylin/firekylin/wiki/\u7CFB\u7EDF\u8BBE\u7F6E)\n\n### \u8BC4\u8BBA\u8BBE\u7F6E\nFirekylin \u6CA1\u6709\u5185\u7F6E\u8BC4\u8BBA\u6A21\u5757\u3002\u4F46\u662F\uFF0CFirekylin \u53EF\u65B9\u4FBF\u5730\u4F7F\u7528\u7B2C\u4E09\u65B9\u8BC4\u8BBA\u7CFB\u7EDF\u3002\u5728\u540E\u53F0\u7684 [\u7CFB\u7EDF\u8BBE\u7F6E](/admin/options/) \u7684 [\u8BC4\u8BBA\u8BBE\u7F6E](/admin/options/comment) \u7684 `\u81EA\u5B9A\u4E49` \u6A21\u5F0F\u4E0B\u7C98\u8D34\u7B2C\u4E09\u65B9\u8BC4\u8BBA\u7CFB\u7EDF\u7684\u4EE3\u7801\u5373\u53EF\u3002\n\nFirekylin \u8FD8\u5BF9 [Disqus](https://disqus.com/) \u3001[\u7545\u8A00](https://changyan.kuaizhan.com/) \u3001[\u7F51\u6613\u4E91\u8DDF\u5E16](https://gentie.163.com/)  \u63D0\u4F9B\u4E86\u7279\u522B\u7684\u652F\u6301\uFF0C\u53EA\u9700\u8981\u586B\u5199\u5BF9\u5E94\u7684\u7F51\u7AD9id\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u7C98\u8D34\u5177\u4F53\u7684\u4EE3\u7801\u3002\n\n### \u83DC\u5355\u7BA1\u7406\n\u540E\u53F0\u7684 [\u5916\u89C2\u8BBE\u7F6E](admin/appearance/) \u53EF\u8FDB\u884C [\u83DC\u5355\u7BA1\u7406](/admin/appearance/navigation)\uFF0C\u5305\u62EC\u65B0\u589E\u83DC\u5355\u3001\u5220\u9664\u83DC\u5355\u3001\u83DC\u5355\u6392\u5E8F\u7B49\u3002  \n\u65B0\u589E\u83DC\u5355\u65F6\uFF0C\u5982\u586B\u5199\u4E86\u83DC\u5355\u5C5E\u6027\uFF08\u4F8B\u5982\u5C5E\u6027\u4E3A `home`\uFF09\uFF0CFirekylin \u81EA\u5E26\u7684\u4E3B\u9898\u4F1A\u4ECE\u56FE\u6807\u5E93\u5C1D\u8BD5\u5BFB\u627E `icon-home` \u4F5C\u4E3A\u8BE5\u83DC\u5355\u7684\u56FE\u6807\uFF0C\u5982\u672A\u67E5\u5230\u5339\u914D\u7684\u5219\u4E0D\u4F1A\u663E\u793A\u56FE\u6807\u3002\n\n### \u4E3B\u9898\u5916\u89C2\nFirekylin \u76EE\u524D\u53EA\u5E26\u4E86\u4E00\u5957\u4E3B\u9898\uFF0C\u6240\u4EE5\u57FA\u4E8E Firekylin \u67B6\u6784\u7684\u7F51\u7AD9\u957F\u5F97\u90FD\u5DEE\u4E0D\u591A^_^  \n\u4E3B\u9898\u5916\u89C2\u7684\u4F7F\u7528\u3001\u4FEE\u6539\u3001\u521B\u5EFA\u53EF\u53C2\u8003\u5B98\u7F51 WIKI \u7684 [\u4E3B\u9898\u5916\u89C2](https://github.com/firekylin/firekylin/wiki/\u4E3B\u9898\u5916\u89C2)\u3002  \n\u6B22\u8FCE\u8D8A\u6765\u8D8A\u591A\u7684\u70ED\u5FC3\u7528\u6237\u4E3A Firekylin \u5F00\u53D1\u4E3B\u9898\u5916\u89C2\uFF0C\u5F00\u53D1\u624B\u518C\u8BE6\u89C1 [\u4E3B\u9898\u5F00\u53D1]( https://github.com/firekylin/firekylin/wiki/\u4E3B\u9898\u5F00\u53D1)\u3002\n\n## Markdown \u7B80\u4ECB\nFirekylin \u7684\u7F16\u8F91\u5668\u4E3A\u652F\u6301 Markdown \u8BED\u6CD5\u7684\u7F16\u8F91\u5668\u3002Markdown \u662F\u4E00\u79CD\u7B80\u5316\u7684\u6807\u8BB0\u8BED\u8A00\uFF0C\u666E\u901A\u7684\u7EAF\u6587\u672C\u5185\u5BB9\uFF08\u4F8B\u5982 Windows \u7684\u8BB0\u4E8B\u672C\u64B0\u5199\u7684\u5185\u5BB9\uFF09\u7ECF\u8FC7 Markdown \u6807\u8BB0\u4E4B\u540E\uFF0C\u53EF\u88AB\u6E32\u67D3\u6210\u8D4F\u5FC3\u60A6\u76EE\u7684\u5BCC\u683C\u5F0F\u6587\u672C\u3002\n\nMarkdown \u7684\u683C\u5F0F\u8BF4\u660E\u53EF\u53C2\u8003\uFF1A[\u82F1\u6587\u7248](https://guides.github.com/features/mastering-markdown/)\u3001[\u4E2D\u6587\u7248](https://coding.net/help/doc/project/markdown.html)\n\n\u597D\u4E86\uFF0C\u4ECB\u7ECD\u5C31\u8FD9\u4E48\u591A\uFF0C\u5FEB\u5F00\u59CB\u4F60\u7684 Blog \u4E4B\u65C5\u5427\uFF01\n';

var InstallService = function (_think$service$base) {
  (0, _inherits3.default)(InstallService, _think$service$base);

  function InstallService(ip) {
    (0, _classCallCheck3.default)(this, InstallService);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InstallService.__proto__ || (0, _getPrototypeOf2.default)(InstallService)).call(this, ip));

    _this.ip = ip;

    var dbConfig = think.config('db');
    if (think.isObject(dbConfig.adapter) && think.isObject(dbConfig.adapter[dbConfig.type])) {
      _this.dbConfig = dbConfig.adapter[dbConfig.type];
    }
    return _this;
  }

  (0, _createClass3.default)(InstallService, [{
    key: 'getModel',
    value: function getModel(name, module) {
      var dbConfig = void 0;
      if (name === true) {
        dbConfig = think.extend({}, this.dbConfig);
        dbConfig.database = '';
        name = '';
      } else {
        dbConfig = this.dbConfig;
      }
      return this.model(name || 'user', {
        adapter: {
          mysql: dbConfig
        }
      }, module);
    }
  }, {
    key: 'checkDbInfo',
    value: function checkDbInfo() {
      var _this2 = this;

      var dbInstance = this.getModel(true);
      return dbInstance.query('SELECT VERSION()').catch(function () {
        return _promise2.default.reject('数据库信息有误');
      }).then(function (data) {
        var version = void 0;
        try {
          /** version compatible, set encoding utf8mb4 when MySQL larger than 5.5.3 */
          version = data[0]['VERSION()'].match(/^[\d.]/);
          if (think.isArray(version)) {
            version = data[0]['VERSION()'];
          } else {
            version = version[0];
          }

          _this2.dbConfig.encoding = _semver2.default.gt(version, '5.5.3') ? 'utf8mb4' : 'utf8';
        } catch (e) {
          _this2.dbConfig.encoding = 'utf8';
        }
        return version;
      });
    }
  }, {
    key: 'insertData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(title, site_url) {
        var model, dbExist, dbFile, content, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item, optionsModel, salt;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                model = this.getModel(true);
                _context.next = 3;
                return model.query('SELECT `TABLE_NAME` FROM `INFORMATION_SCHEMA`.`TABLES` WHERE `TABLE_SCHEMA`= \'' + this.dbConfig.database + '\'');

              case 3:
                dbExist = _context.sent;

                if (!think.isEmpty(dbExist)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 7;
                return model.query('CREATE DATABASE `' + this.dbConfig.database + '`').catch(function () {});

              case 7:
                dbFile = think.ROOT_PATH + think.sep + 'firekylin.sql';

                if (think.isFile(dbFile)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt('return', _promise2.default.reject('数据库文件（firekylin.sql）不存在，请重新下载'));

              case 10:
                content = _fs2.default.readFileSync(dbFile, 'utf8');

                content = content.split('\n').filter(function (item) {
                  item = item.trim();
                  var ignoreList = ['#', 'LOCK', 'UNLOCK'];
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                    for (var _iterator = (0, _getIterator3.default)(ignoreList), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var it = _step.value;

                      if (item.indexOf(it) === 0) {
                        return false;
                      }
                    }
                  } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                      }
                    } finally {
                      if (_didIteratorError) {
                        throw _iteratorError;
                      }
                    }
                  }

                  return true;
                }).join(' ');
                content = content.replace(/\/\*.*?\*\//g, '').replace(/fk_/g, this.dbConfig.prefix || '');

                //导入数据
                model = this.getModel();
                content = content.split(';');
                _context.prev = 15;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 19;
                _iterator2 = (0, _getIterator3.default)(content);

              case 21:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context.next = 31;
                  break;
                }

                item = _step2.value;

                item = item.trim();

                if (!item) {
                  _context.next = 28;
                  break;
                }

                think.log(item);
                _context.next = 28;
                return model.query(item);

              case 28:
                _iteratorNormalCompletion2 = true;
                _context.next = 21;
                break;

              case 31:
                _context.next = 37;
                break;

              case 33:
                _context.prev = 33;
                _context.t0 = _context['catch'](19);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t0;

              case 37:
                _context.prev = 37;
                _context.prev = 38;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 40:
                _context.prev = 40;

                if (!_didIteratorError2) {
                  _context.next = 43;
                  break;
                }

                throw _iteratorError2;

              case 43:
                return _context.finish(40);

              case 44:
                return _context.finish(37);

              case 45:
                _context.next = 51;
                break;

              case 47:
                _context.prev = 47;
                _context.t1 = _context['catch'](15);

                think.log(_context.t1);
                return _context.abrupt('return', _promise2.default.reject('数据表导入失败，请在控制台下查看具体的错误信息，并在 GitHub 上发 issue。'));

              case 51:
                optionsModel = this.getModel('options');
                _context.next = 54;
                return optionsModel.where('1=1').update({ value: '' });

              case 54:
                salt = think.uuid(10) + '!@#$%^&*';

                this.password_salt = salt;

                _context.next = 58;
                return optionsModel.updateOptions('title', title);

              case 58:
                _context.next = 60;
                return optionsModel.updateOptions('site_url', site_url);

              case 60:
                _context.next = 62;
                return optionsModel.updateOptions('navigation', (0, _stringify2.default)([{ 'label': '首页', 'url': '/', 'option': 'home' }, { 'label': '归档', 'url': '/archives/', 'option': 'archive' }, { 'label': '标签', 'url': '/tags', 'option': 'tags' }, { 'label': '关于', 'url': '/about', 'option': 'user' }, { 'label': '友链', 'url': '/links', 'option': 'link' }]));

              case 62:
                _context.next = 64;
                return optionsModel.updateOptions('password_salt', salt);

              case 64:
                _context.next = 66;
                return optionsModel.updateOptions('logo_url', '/static/img/firekylin.jpg');

              case 66:
                _context.next = 68;
                return optionsModel.updateOptions('theme', 'firekylin');

              case 68:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[15, 47], [19, 33, 37, 45], [38,, 40, 44]]);
      }));

      function insertData(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return insertData;
    }()
  }, {
    key: 'updateConfig',
    value: function updateConfig() {
      var data = {
        type: 'mysql',
        adapter: {
          mysql: this.dbConfig
        }
      };
      var content = '\n      "use strict";\n      exports.__esModule = true;\n      exports.default = ' + (0, _stringify2.default)(data, undefined, 4) + '\n    ';

      var dbConfigFile = void 0;
      try {
        var srcPath = _path2.default.join(think.ROOT_PATH, 'src/common/config');
        _fs2.default.statSync(srcPath);
        dbConfigFile = _path2.default.join(srcPath, 'db.js');
      } catch (e) {
        dbConfigFile = _path2.default.join(think.APP_PATH, '/common/config/db.js');
      }
      _fs2.default.writeFileSync(dbConfigFile, content);
      think.config('db', data);
    }
  }, {
    key: 'createAccount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(username, password) {
        var model, data;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                password = think.md5(this.password_salt + password);

                model = this.getModel('user', 'admin');
                data = {
                  username: username,
                  password: password,
                  email: '',
                  type: 1,
                  status: 1,
                  ip: this.ip
                };
                _context2.next = 5;
                return model.addUser(data);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createAccount(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return createAccount;
    }()
  }, {
    key: 'addStartPost',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var postModel, data, insert;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                postModel = this.getModel('post', 'admin');
                data = {
                  type: 0,
                  status: 3,
                  user_id: 1,
                  is_public: 1,
                  comment_num: 0,
                  allow_comment: 1,
                  title: '欢迎使用 Firekylin',
                  markdown_content: startPost,
                  create_time: think.datetime(),
                  update_time: think.datetime(),
                  pathname: 'hello-world-via-firekylin'
                };
                _context3.next = 4;
                return postModel.getContentAndSummary(data);

              case 4:
                data = _context3.sent;
                _context3.next = 7;
                return postModel.addPost(data);

              case 7:
                insert = _context3.sent;
                return _context3.abrupt('return', insert);

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addStartPost() {
        return _ref3.apply(this, arguments);
      }

      return addStartPost;
    }()
  }, {
    key: 'saveDbInfo',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(dbConfig) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.dbConfig = dbConfig;
                this.dbConfig.type = 'mysql';
                _context4.next = 4;
                return this.checkDbInfo();

              case 4:
                this.updateConfig();

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function saveDbInfo(_x5) {
        return _ref4.apply(this, arguments);
      }

      return saveDbInfo;
    }()
  }, {
    key: 'saveSiteInfo',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(_ref6) {
        var title = _ref6.title,
            site_url = _ref6.site_url,
            username = _ref6.username,
            password = _ref6.password;
        var optionsModel;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.insertData(title, site_url);

              case 2:
                _context5.next = 4;
                return this.createAccount(username, password);

              case 4:
                _context5.next = 6;
                return this.addStartPost();

              case 6:

                firekylin.setInstalled();

                optionsModel = this.getModel('options');
                _context5.next = 10;
                return optionsModel.getOptions(true);

              case 10:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function saveSiteInfo(_x6) {
        return _ref5.apply(this, arguments);
      }

      return saveSiteInfo;
    }()
  }]);
  return InstallService;
}(think.service.base);

var tables = ['cate', 'post', 'post_cate', 'post_tag', 'tag', 'user'];
InstallService.checkInstalled = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
  var dbConfig, database, prefix, existTables, installed;
  return _regenerator2.default.wrap(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          dbConfig = think.config('db');
          database = dbConfig.database;
          prefix = dbConfig.prefix;

          if (!database && think.isObject(dbConfig.adapter) && think.isObject(dbConfig.adapter[dbConfig.type])) {
            database = dbConfig.adapter[dbConfig.type].database;
            prefix = dbConfig.adapter[dbConfig.type].prefix;
          }

          _context6.prev = 4;
          _context6.next = 7;
          return think.model('user', dbConfig).query('SELECT `TABLE_NAME` FROM `INFORMATION_SCHEMA`.`TABLES` WHERE `TABLE_SCHEMA`=\'' + database + '\'');

        case 7:
          existTables = _context6.sent;

          if (!think.isEmpty(existTables)) {
            _context6.next = 10;
            break;
          }

          return _context6.abrupt('return', false);

        case 10:

          existTables = existTables.map(function (table) {
            return table.TABLE_NAME;
          });
          installed = tables.every(function (table) {
            return existTables.indexOf(prefix + table) > -1;
          });

          if (installed) {
            firekylin.setInstalled();
          }
          return _context6.abrupt('return', installed);

        case 16:
          _context6.prev = 16;
          _context6.t0 = _context6['catch'](4);

          think.log(_context6.t0);
          return _context6.abrupt('return', false);

        case 20:
        case 'end':
          return _context6.stop();
      }
    }
  }, _callee6, this, [[4, 16]]);
}));

exports.default = InstallService;