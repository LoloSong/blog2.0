'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _ghost = require('./ghost');

var _ghost2 = _interopRequireDefault(_ghost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Ghost) {
  (0, _inherits3.default)(_class, _Ghost);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'tag',

    /**
     * 导入标签
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var tags = _ref2.tags;

        var len, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _tag, result;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!tags || !Array.isArray(tags))) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', 0);

              case 2:
                len = 0;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 6;
                _iterator = (0, _getIterator3.default)(tags);

              case 8:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 17;
                  break;
                }

                _tag = _step.value;
                _context.next = 12;
                return this.tagModelInstance.addTag({
                  name: _tag.name,
                  pathname: _tag.slug
                });

              case 12:
                result = _context.sent;


                if (result.type === 'add') {
                  len += 1;
                }

              case 14:
                _iteratorNormalCompletion = true;
                _context.next = 8;
                break;

              case 17:
                _context.next = 23;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context['catch'](6);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 23:
                _context.prev = 23;
                _context.prev = 24;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 26:
                _context.prev = 26;

                if (!_didIteratorError) {
                  _context.next = 29;
                  break;
                }

                throw _iteratorError;

              case 29:
                return _context.finish(26);

              case 30:
                return _context.finish(23);

              case 31:
                return _context.abrupt('return', len);

              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 19, 23, 31], [24,, 26, 30]]);
      }));

      function tag(_x) {
        return _ref.apply(this, arguments);
      }

      return tag;
    }()

    /**
     * 导入分类
     * 为了简单不支持子分类导入，默认所有分类为一级分类
     */

  }, {
    key: 'category',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref4) {
        var categories = _ref4.categories;

        var len, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _category, result;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!categories || !Array.isArray(categories))) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return', 0);

              case 2:
                len = 0;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 6;
                _iterator2 = (0, _getIterator3.default)(categories);

              case 8:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context2.next = 17;
                  break;
                }

                _category = _step2.value;
                _context2.next = 12;
                return this.cateModelInstance.addCate({
                  name: _category.name,
                  pathname: _category.slug,
                  pid: 0
                });

              case 12:
                result = _context2.sent;


                if (result.type === 'add') {
                  len += 1;
                }

              case 14:
                _iteratorNormalCompletion2 = true;
                _context2.next = 8;
                break;

              case 17:
                _context2.next = 23;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2['catch'](6);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t0;

              case 23:
                _context2.prev = 23;
                _context2.prev = 24;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 26:
                _context2.prev = 26;

                if (!_didIteratorError2) {
                  _context2.next = 29;
                  break;
                }

                throw _iteratorError2;

              case 29:
                return _context2.finish(26);

              case 30:
                return _context2.finish(23);

              case 31:
                return _context2.abrupt('return', len);

              case 32:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 19, 23, 31], [24,, 26, 30]]);
      }));

      function category(_x2) {
        return _ref3.apply(this, arguments);
      }

      return category;
    }()
  }]);
  return _class;
}(_ghost2.default);

exports.default = _class;