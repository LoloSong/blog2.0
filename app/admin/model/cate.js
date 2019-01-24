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

var _get3 = require('babel-runtime/helpers/get');

var _get4 = _interopRequireDefault(_get3);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * relation model
 */
var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'init',

    /**
     * init
     * @param  {} args []
     * @return {}         []
     */
    value: function init() {
      var _get2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get4.default)(_class.prototype.__proto__ || (0, _getPrototypeOf2.default)(_class.prototype), 'init', this)).call.apply(_get2, [this].concat(args));

      this.relation = {
        post_cate: {
          type: think.model.HAS_MANY,
          fKey: 'cate_id'
        }
      };
    }

    /**
     * 添加分类
     * @param {[type]} data [description]
     * @param {[type]} ip   [description]
     */

  }, {
    key: 'addCate',
    value: function addCate(data) {
      var where = {
        name: data.name,
        _logic: 'OR'
      };
      if (data.pathname) {
        where.pathname = data.pathname;
      }
      return this.where(where).thenAdd(data);
    }
  }, {
    key: 'saveCate',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {
        var info;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.where({ id: data.id }).find();

              case 2:
                info = _context.sent;

                if (!think.isEmpty(info)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt('return', _promise2.default.reject(new Error('CATE_NOT_EXIST')));

              case 5:
                return _context.abrupt('return', this.where({ id: data.id }).update(data));

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function saveCate(_x) {
        return _ref.apply(this, arguments);
      }

      return saveCate;
    }()
  }, {
    key: 'deleteCate',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(cate_id) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.model('post_cate').where({ cate_id: cate_id }).delete();
                return _context2.abrupt('return', this.where({ id: cate_id }).delete());

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteCate(_x2) {
        return _ref2.apply(this, arguments);
      }

      return deleteCate;
    }()
    /**
     * get count posts
     * @param  {Number} userId []
     * @return {Promise}        []
     */

  }, {
    key: 'getCount',
    value: function getCount(userId) {
      if (userId) {
        return this.where({ user_id: userId }).count();
      }
      return this.count();
    }
  }]);
  return _class;
}(_base2.default);

exports.default = _class;