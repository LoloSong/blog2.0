'use strict';
/**
 * model
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$model$relation) {
  (0, _inherits3.default)(_class, _think$model$relation);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.relation = {
      post_cate: {
        type: think.model.HAS_MANY,
        field: 'cate_id'
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_class, [{
    key: 'getCateArchive',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var data, result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, cate;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.model('post_cate').join({
                  table: 'post',
                  on: ['post_id', 'id']
                }).join({
                  table: 'cate',
                  on: ['cate_id', 'id']
                }).where({
                  type: 0,
                  status: 3,
                  is_public: 1
                }).order('update_time DESC').select();

              case 2:
                data = _context.sent;
                result = {};
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 7;

                for (_iterator = (0, _getIterator3.default)(data); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  cate = _step.value;

                  if (result[cate.pathname]) {
                    result[cate.pathname].count += 1;
                  } else {
                    result[cate.pathname] = {
                      name: cate.name,
                      pathname: encodeURIComponent(cate.pathname),
                      update_time: cate.update_time,
                      count: 1
                    };
                  }
                }
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](7);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 15:
                _context.prev = 15;
                _context.prev = 16;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 18:
                _context.prev = 18;

                if (!_didIteratorError) {
                  _context.next = 21;
                  break;
                }

                throw _iteratorError;

              case 21:
                return _context.finish(18);

              case 22:
                return _context.finish(15);

              case 23:
                return _context.abrupt('return', (0, _values2.default)(result).sort(function (a, b) {
                  return a.count > b.count ? -1 : 1;
                }));

              case 24:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 11, 15, 23], [16,, 18, 22]]);
      }));

      function getCateArchive() {
        return _ref2.apply(this, arguments);
      }

      return getCateArchive;
    }()
  }]);
  return _class;
}(think.model.relation);

exports.default = _class;