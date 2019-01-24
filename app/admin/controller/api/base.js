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

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _url = require('url');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * base rest controller
 */
var _class = function (_think$controller$res) {
  (0, _inherits3.default)(_class, _think$controller$res);

  /**
   * [constructor description]
   * @param  {[type]} http [description]
   * @return {[type]}      [description]
   */
  function _class(http) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, http));

    _this.allowList = ['api/post/put', 'api/post/post', 'api/post/delete', 'api/file/post', 'api/file/get'];

    _this._method = 'method';
    return _this;
  }
  /**
   * before
   * @return {} []
   */

  /**
   * allow list for user
   * @type {Array}
   */


  (0, _createClass3.default)(_class, [{
    key: '__before',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var userInfo, action, referrer, _ref2, site_url, siteUrlHost, referrerHost, type, name;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.session('userInfo');

              case 2:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 5;
                  break;
                }

                _context.t0 = {};

              case 5:
                userInfo = _context.t0;

                if (!think.isEmpty(userInfo)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt('return', this.fail('USER_NOT_LOGIN'));

              case 8:
                action = this.http.action;

                if (!(action !== 'get')) {
                  _context.next = 28;
                  break;
                }

                referrer = this.http.referrer();
                _context.next = 13;
                return this.model('options').getOptions();

              case 13:
                _ref2 = _context.sent;
                site_url = _ref2.site_url;

                if (!(!referrer || !site_url)) {
                  _context.next = 17;
                  break;
                }

                return _context.abrupt('return', this.fail('REFERRER_ERROR'));

              case 17:
                siteUrlHost = (0, _url.parse)(site_url).host;
                referrerHost = (0, _url.parse)(referrer).host;

                if (!(!siteUrlHost || !referrerHost)) {
                  _context.next = 21;
                  break;
                }

                return _context.abrupt('return', this.fail('REFERRER_ERROR'));

              case 21:
                if (!(siteUrlHost.length < referrerHost.length)) {
                  _context.next = 26;
                  break;
                }

                if (!(referrerHost.slice(-siteUrlHost.length) !== siteUrlHost)) {
                  _context.next = 24;
                  break;
                }

                return _context.abrupt('return', this.fail('REFERRER_ERROR'));

              case 24:
                _context.next = 28;
                break;

              case 26:
                if (!(siteUrlHost.slice(-referrerHost.length) !== referrerHost)) {
                  _context.next = 28;
                  break;
                }

                return _context.abrupt('return', this.fail('REFERRER_ERROR'));

              case 28:

                this.userInfo = userInfo;
                type = userInfo.type | 0;
                //not admin

                if (!(type !== 1)) {
                  _context.next = 37;
                  break;
                }

                if (!(action === 'get')) {
                  _context.next = 33;
                  break;
                }

                return _context.abrupt('return');

              case 33:
                name = this.http.controller + '/' + this.http.action;

                if (!(this.allowList.indexOf(name) > -1)) {
                  _context.next = 36;
                  break;
                }

                return _context.abrupt('return');

              case 36:
                return _context.abrupt('return', this.fail('USER_NO_PERMISSION'));

              case 37:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function __before() {
        return _ref.apply(this, arguments);
      }

      return __before;
    }()
  }]);
  return _class;
}(think.controller.rest);

exports.default = _class;