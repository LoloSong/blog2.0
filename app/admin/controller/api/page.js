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

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Post) {
  (0, _inherits3.default)(_class, _Post);

  function _class(http) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, http));

    _this.postModel = _this.model('post');

    _this._modelInstance = _this.modelInstance;
    Object.defineProperty(_this, 'modelInstance', {
      get: function get() {
        return this._modelInstance.setRelation('user').where({ type: 1 });
      }
    });
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'getAction',
    value: function getAction(self) {
      if (!this.id) {
        var field = ['id', 'title', 'user_id', 'create_time', 'update_time', 'status', 'pathname', 'is_public'];
        this.modelInstance.order('create_time DESC').field(field);
      }

      if (this.get('page') !== '-1') {
        this.modelInstance.page(this.get('page'), 20);
      }
      return (0, _get3.default)(_class.prototype.__proto__ || (0, _getPrototypeOf2.default)(_class.prototype), 'getBaseAction', this).call(this, self);
    }
  }, {
    key: 'postAction',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var data, post, insert;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = this.post();

                //check pathname

                _context.next = 3;
                return this.modelInstance.where({ pathname: data.pathname }).find();

              case 3:
                post = _context.sent;

                if (think.isEmpty(post)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt('return', this.fail('PATHNAME_EXIST'));

              case 6:

                data.type = 1;
                data.user_id = this.userInfo.id;
                _context.next = 10;
                return this.postModel.getContentAndSummary(data);

              case 10:
                data = _context.sent;

                data = this.postModel.getPostTime(data);

                _context.next = 14;
                return this.modelInstance.addPost(data);

              case 14:
                insert = _context.sent;
                return _context.abrupt('return', this.success(insert));

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function postAction() {
        return _ref.apply(this, arguments);
      }

      return postAction;
    }()
  }, {
    key: 'putAction',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var page, data, rows;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.id) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return', this.fail('PARAMS_ERROR'));

              case 2:
                if (!(this.userInfo.type !== 1)) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 5;
                return this.modelInstance.where({ id: this.id }).find();

              case 5:
                page = _context2.sent;

                if (!(page.user_id !== this.userInfo.id)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt('return', this.fail('USER_NO_PERMISSION'));

              case 8:
                data = this.post();

                data.id = this.id;
                data.type = 1;
                _context2.next = 13;
                return this.postModel.getContentAndSummary(data);

              case 13:
                data = _context2.sent;

                data = this.postModel.getPostTime(data);

                _context2.next = 17;
                return this.modelInstance.savePost(data);

              case 17:
                rows = _context2.sent;
                return _context2.abrupt('return', this.success({ affectedRows: rows }));

              case 19:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function putAction() {
        return _ref2.apply(this, arguments);
      }

      return putAction;
    }()
  }]);
  return _class;
}(_post2.default);

exports.default = _class;