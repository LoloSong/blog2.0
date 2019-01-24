'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _speakeasy = require('speakeasy');

var _speakeasy2 = _interopRequireDefault(_speakeasy);

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
    key: 'loginAction',

    /**
     * login
     * @return {} []
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var username, userInfo, model, options, two_factor_auth, verified, ldapConfig;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                username = this.post('username');
                userInfo = {};
                model = this.model('options');
                _context.next = 5;
                return model.getOptions();

              case 5:
                options = _context.sent;

                if (!options.two_factor_auth) {
                  _context.next = 11;
                  break;
                }

                two_factor_auth = this.post('two_factor_auth');
                verified = _speakeasy2.default.totp.verify({
                  secret: options.two_factor_auth,
                  encoding: 'base32',
                  token: two_factor_auth,
                  window: 2
                });

                if (verified) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt('return', this.fail('TWO_FACTOR_AUTH_ERROR'));

              case 11:
                ldapConfig = {
                  //switch, maybe, default '0', '0' => close, '1' => open
                  ldap_on: options.ldap_on === '1',
                  //ldap url, required，'ldap://xxx.xx.x.xx:xxx'
                  ldap_url: options.ldap_url,
                  // ldap connect timeout, maybe, default 20000ms
                  ldap_connect_timeout: parseInt(options.ldap_connect_timeout),
                  //ldap baseDn, required
                  ldap_baseDn: options.ldap_baseDn,
                  //sep by ",", accounts in this string will not be varified with LDAP when LDAP is opened
                  //and these accounts can be edited by itself instead of LDAP administrator, required
                  ldap_whiteList: options.ldap_whiteList ? options.ldap_whiteList.split(',') : [],
                  //url for ldap user to change userinfo, maybe, default ''
                  ldap_user_page: options.ldap_user_page,
                  //logconf, maybe, default '1', '0' => close, '1' => open
                  ldap_log: options.ldap_log !== '0'
                };

                if (!(ldapConfig.ldap_on && ldapConfig.ldap_whiteList.indexOf(username) === -1)) {
                  _context.next = 19;
                  break;
                }

                think.log('LDAP', 'VERIFY TYPE');
                _context.next = 16;
                return this.ldapVerify(username, ldapConfig);

              case 16:
                userInfo = _context.sent;
                _context.next = 23;
                break;

              case 19:
                think.log('NORMAL', 'VERIFY TYPE');
                _context.next = 22;
                return this.normalVerify(username);

              case 22:
                userInfo = _context.sent;

              case 23:
                if (!((userInfo.status | 0) !== 1 || userInfo.type === 3)) {
                  _context.next = 25;
                  break;
                }

                return _context.abrupt('return', this.fail('ACCOUNT_FORBIDDEN'));

              case 25:
                _context.next = 27;
                return this.session('userInfo', userInfo);

              case 27:
                return _context.abrupt('return', this.success());

              case 28:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loginAction() {
        return _ref.apply(this, arguments);
      }

      return loginAction;
    }()
    /**
     * logout
     * @return {}
     */

  }, {
    key: 'logoutAction',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.session('userInfo', '');

              case 2:
                return _context2.abrupt('return', this.redirect('/'));

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function logoutAction() {
        return _ref2.apply(this, arguments);
      }

      return logoutAction;
    }()

    /**
     * update user password
     */

  }, {
    key: 'passwordAction',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var userInfo, rows;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.session('userInfo');

              case 2:
                _context3.t0 = _context3.sent;

                if (_context3.t0) {
                  _context3.next = 5;
                  break;
                }

                _context3.t0 = {};

              case 5:
                userInfo = _context3.t0;

                if (!think.isEmpty(userInfo)) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt('return', this.fail('USER_NOT_LOGIN'));

              case 8:
                _context3.next = 10;
                return this.model('user').saveUser({
                  password: this.post('password'),
                  id: userInfo.id
                }, this.ip());

              case 10:
                rows = _context3.sent;
                return _context3.abrupt('return', this.success(rows));

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function passwordAction() {
        return _ref3.apply(this, arguments);
      }

      return passwordAction;
    }()
  }, {
    key: 'forgotAction',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        var userInfo, user, options, resetTime, resetToken, resetUrl, transporter;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.session('userInfo');

              case 2:
                _context4.t0 = _context4.sent;

                if (_context4.t0) {
                  _context4.next = 5;
                  break;
                }

                _context4.t0 = {};

              case 5:
                userInfo = _context4.t0;

                if (think.isEmpty(userInfo)) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt('return', this.success());

              case 8:
                if (!this.isPost()) {
                  _context4.next = 28;
                  break;
                }

                user = this.post('user');
                _context4.next = 12;
                return this.model('user').where({
                  name: user,
                  email: user,
                  _logic: 'OR'
                }).find();

              case 12:
                user = _context4.sent;

                if (!think.isEmpty(user)) {
                  _context4.next = 15;
                  break;
                }

                return _context4.abrupt('return', this.fail('查无此人'));

              case 15:
                if (user.email) {
                  _context4.next = 17;
                  break;
                }

                return _context4.abrupt('return', this.fail('该用户未设置邮箱，不能使用找回密码功能'));

              case 17:
                _context4.next = 19;
                return this.model('options').getOptions();

              case 19:
                options = _context4.sent;
                resetTime = Date.now();
                resetToken = think.md5(user.email + resetTime + Math.random());
                resetUrl = options.site_url + ('/admin/dashboard?reset=1&token=' + resetToken);
                transporter = _nodemailer2.default.createTransport();

                transporter.sendMail({
                  from: 'no-reply@firekylin.org',
                  to: user.email,
                  subject: '\u3010' + options.title + '\u3011\u5BC6\u7801\u91CD\u7F6E',
                  text: '\u4F60\u597D\uFF0C' + user.name + '\uFF0C\u70B9\u51FB ' + resetUrl + ' \u8FDB\u884C\u5BC6\u7801\u91CD\u7F6E\uFF0C\u8BE5\u5730\u5740\u6709\u6548\u671F\u4E3A 1 \u5C0F\u65F6\uFF0C\u8BF7\u53CA\u65F6\u4FEE\u6539\u5BC6\u7801\u3002\u5982\u679C\u60A8\u6CA1\u6709\u7533\u8BF7\u8FC7\u5BC6\u7801\u91CD\u7F6E\uFF0C\u8BF7\u5FFD\u7565\u8BE5\u90AE\u4EF6\uFF01'
                });

                _context4.next = 27;
                return think.cache(resetToken, user.name, {
                  timeout: 60 * 60 * 1000
                });

              case 27:
                return _context4.abrupt('return', this.success());

              case 28:
                return _context4.abrupt('return', this.success());

              case 29:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function forgotAction() {
        return _ref4.apply(this, arguments);
      }

      return forgotAction;
    }()
  }, {
    key: 'resetAction',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
        var userInfo, _post, password, token, user, findUser, rows;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.session('userInfo');

              case 2:
                _context5.t0 = _context5.sent;

                if (_context5.t0) {
                  _context5.next = 5;
                  break;
                }

                _context5.t0 = {};

              case 5:
                userInfo = _context5.t0;

                if (think.isEmpty(userInfo)) {
                  _context5.next = 8;
                  break;
                }

                return _context5.abrupt('return', this.success());

              case 8:
                if (!this.isPost()) {
                  _context5.next = 26;
                  break;
                }

                _post = this.post(), password = _post.password, token = _post.token;
                _context5.next = 12;
                return think.cache(token);

              case 12:
                user = _context5.sent;

                if (!think.isEmpty(user)) {
                  _context5.next = 15;
                  break;
                }

                return _context5.abrupt('return', this.fail('查无此人'));

              case 15:
                _context5.next = 17;
                return this.model('user').where({ name: user }).find();

              case 17:
                findUser = _context5.sent;

                if (!think.isEmpty(findUser)) {
                  _context5.next = 20;
                  break;
                }

                return _context5.abrupt('return', this.fail('查无此人'));

              case 20:
                _context5.next = 22;
                return this.model('user').saveUser({
                  password: password,
                  id: findUser.id
                }, this.ip());

              case 22:
                rows = _context5.sent;
                _context5.next = 25;
                return think.cache(token, null);

              case 25:
                return _context5.abrupt('return', this.success(rows));

              case 26:
                return _context5.abrupt('return', this.success());

              case 27:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function resetAction() {
        return _ref5.apply(this, arguments);
      }

      return resetAction;
    }()
  }, {
    key: 'normalVerify',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(username) {
        var userModel, userInfo, password;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                //校验帐号和密码
                userModel = this.model('user');
                _context6.next = 3;
                return userModel.where({ name: username }).find();

              case 3:
                userInfo = _context6.sent;

                if (!think.isEmpty(userInfo)) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt('return', this.fail('ACCOUNT_ERROR'));

              case 6:

                //校验密码
                password = this.post('password');

                if (userModel.checkPassword(userInfo, password)) {
                  _context6.next = 9;
                  break;
                }

                return _context6.abrupt('return', this.fail('ACCOUNT_ERROR'));

              case 9:
                return _context6.abrupt('return', userInfo);

              case 10:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function normalVerify(_x) {
        return _ref6.apply(this, arguments);
      }

      return normalVerify;
    }()
  }, {
    key: 'ldapVerify',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(username, ldapConfig) {
        var oripassword, Ldap, ldap, ldapRes, ldapUserInfo, newData, userModel, userInfo, modelInstance, insertId, updateData, _modelInstance, rows;

        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                //ldap校验
                oripassword = this.post('oripassword');
                Ldap = think.service('ldap', 'admin');
                ldap = new Ldap(ldapConfig);
                _context7.next = 5;
                return ldap.validate(username, oripassword);

              case 5:
                ldapRes = _context7.sent;

                if (ldapRes) {
                  _context7.next = 8;
                  break;
                }

                return _context7.abrupt('return', this.fail('ACCOUNT_ERROR'));

              case 8:
                if (!(ldapRes === 'timeout')) {
                  _context7.next = 10;
                  break;
                }

                return _context7.abrupt('return', this.fail('LDAP_CONNECT_TIMEOUT'));

              case 10:
                _context7.next = 12;
                return ldap.getUserInfo(username);

              case 12:
                ldapUserInfo = _context7.sent;
                newData = {};


                if (!think.isEmpty(ldapUserInfo)) {
                  newData = {
                    username: username,
                    email: ldapUserInfo.mail,
                    display_name: ldapUserInfo.displayName,
                    password: ldapUserInfo.userPassword,
                    type: 2,
                    status: 1
                  };
                }

                //校验数据库中帐号是否存在
                userModel = this.model('user');
                _context7.next = 18;
                return userModel.where({ name: username }).find();

              case 18:
                userInfo = _context7.sent;

                if (!think.isEmpty(userInfo)) {
                  _context7.next = 33;
                  break;
                }

                //新增该用户到数据库

                modelInstance = this.model('user');
                _context7.next = 23;
                return modelInstance.addUser(newData, this.ip());

              case 23:
                insertId = _context7.sent;


                think.log('insertId: ' + (0, _stringify2.default)(insertId), 'LDAP');

                if (!(insertId && insertId.type === 'add')) {
                  _context7.next = 29;
                  break;
                }

                _context7.next = 28;
                return userModel.where({ name: username }).find();

              case 28:
                userInfo = _context7.sent;

              case 29:
                if (!(insertId && insertId.type === 'exist')) {
                  _context7.next = 31;
                  break;
                }

                return _context7.abrupt('return', this.fail('ACCOUNT_ERROR'));

              case 31:
                _context7.next = 43;
                break;

              case 33:
                //更新数据库用户信息

                updateData = (0, _extends3.default)({}, userInfo, {
                  email: ldapUserInfo.mail,
                  display_name: ldapUserInfo.displayName,
                  password: ldapUserInfo.userPassword
                });
                _modelInstance = this.model('user');
                _context7.next = 37;
                return _modelInstance.saveUser(updateData, this.ip());

              case 37:
                rows = _context7.sent;


                think.log('affectedRows: ' + rows, 'USERINFO UPDATED');

                if (!rows) {
                  _context7.next = 43;
                  break;
                }

                _context7.next = 42;
                return userModel.where({ name: username }).find();

              case 42:
                userInfo = _context7.sent;

              case 43:
                return _context7.abrupt('return', userInfo);

              case 44:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function ldapVerify(_x2, _x3) {
        return _ref7.apply(this, arguments);
      }

      return ldapVerify;
    }()
  }]);
  return _class;
}(_base2.default);

exports.default = _class;