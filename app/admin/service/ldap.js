'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _ldapjs = require('ldapjs');

var _ldapjs2 = _interopRequireDefault(_ldapjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ldap = function () {
  function Ldap() {
    var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, Ldap);

    // ldap配置
    // {
    //  url: 'ldap://x.x.x.x:389',
    //  ldap_baseDn: 'dc=ldap,dc=example,dc=com'
    // }
    this.config = (0, _extends3.default)({}, conf, {
      url: conf.ldap_url,
      log: conf.ldap_log === '1',
      ldap_connect_timeout: conf.ldap_connect_timeout || 20000
    });

    if (!this.config.url || !this.config.ldap_baseDn) {
      throw new Error('ldap config missing!');
    }

    this.session = {};
  }

  (0, _createClass3.default)(Ldap, [{
    key: 'getUserInfo',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(username) {
        var _this = this;

        var _config, url, ldap_baseDn, ldap_connect_timeout, client;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _config = this.config, url = _config.url, ldap_baseDn = _config.ldap_baseDn, ldap_connect_timeout = _config.ldap_connect_timeout;

                //创建LDAP client，把服务器url传入

                client = _ldapjs2.default.createClient({ url: url, ldap_connect_timeout: ldap_connect_timeout });

                this.log('connecting ' + url, 'LDAP');
                this.log('seasrch: ' + username, 'LDAP');

                return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
                  // 创建LDAP查询选项 filter的作用就是相当于SQL的条件
                  var opts = {
                    filter: '(cn=' + username + ')', // 查询条件过滤器，查找uid=kxh的用户节点
                    scope: 'sub', // 查询范围，sub表示没有深度限制
                    timeLimit: 500 // 查询超时
                  };

                  client.search(ldap_baseDn, opts, function (err, res) {
                    //查询结果事件响应
                    res.on('searchENtry', function (entry) {
                      //获取查询的对象
                      var user = entry.object;
                      _this.session = user;
                      resolve(user);
                      _this.log('search result: ' + (0, _stringify2.default)(user), 'LDAP');
                    });

                    //查询错误事件
                    res.on('error', function (err) {
                      _this.error('error: ' + err.message, 'LDAP');
                      //unbind操作，必须要做
                      client.unbind(function (e) {
                        return _this.log(e ? e.message : 'client disconnected', 'LDAP');
                      });
                      reject(err);
                    });

                    //查询结束
                    res.on('end', function (result) {
                      _this.log('search status: ' + result.status, 'LDAP');
                      // 校验是否有结果
                      if (!_this.session.dn) {
                        _this.log('result: No such user', 'LDAP');
                      }

                      //unbind操作，必须要做
                      client.unbind(function (e) {
                        return _this.log(e ? e.message : 'client disconnected', 'LDAP');
                      });
                    });
                  });

                  setTimeout(function () {
                    _this.log('connect timeout', 'LDAP');
                    reject('timeout');
                  }, ldap_connect_timeout);
                }));

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserInfo(_x2) {
        return _ref.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }, {
    key: 'validate',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(username, password) {
        var _this2 = this;

        var _config2, url, ldap_baseDn, ldap_connect_timeout, client, ldapCn;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _config2 = this.config, url = _config2.url, ldap_baseDn = _config2.ldap_baseDn, ldap_connect_timeout = _config2.ldap_connect_timeout;

                //创建LDAP client，把服务器url传入

                client = _ldapjs2.default.createClient({
                  url: url,
                  ldap_connect_timeout: ldap_connect_timeout
                });

                this.log('connecting ' + url, 'LDAP');

                ldapCn = 'cn=' + username + ',' + ldap_baseDn;

                this.log('ldapCn: ' + ldapCn, 'LDAP');

                return _context2.abrupt('return', new _promise2.default(function (resolve, reject) {
                  // 将client绑定LDAP Server 第一个参数：是用户，必须是从根节点到用户节点的全路径 第二个参数：用户密码
                  client.bind(ldapCn, password, function (err) {
                    var result = !err;
                    resolve(result);
                    _this2.log(result ? '认证成功！' : '\u8BA4\u8BC1\u5931\u8D25, errmsg: ' + (0, _stringify2.default)(err), 'LDAP');
                    client.unbind(function (e) {
                      return _this2.log(e ? e.message : 'client disconnected', 'LDAP');
                    });
                  });

                  setTimeout(function () {
                    reject('timeout');
                    _this2.log('connect timeout', 'LDAP');
                  }, ldap_connect_timeout);
                }));

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function validate(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return validate;
    }()
  }, {
    key: 'log',
    value: function log() {
      var _think;

      if (!this.config.log) {
        return true;
      }

      return (_think = think).log.apply(_think, arguments);
    }
  }, {
    key: 'error',
    value: function error() {
      var _think2;

      if (!this.config.log) {
        return true;
      }

      return (_think2 = think).error.apply(_think2, arguments);
    }
  }]);
  return Ldap;
}();

exports.default = Ldap;