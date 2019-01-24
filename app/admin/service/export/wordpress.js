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

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _wxr = require('wxr');

var _wxr2 = _interopRequireDefault(_wxr);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOT_SAFE_IN_XML = /[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm;

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    var _ref;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args)));

    _this.outputFile = _path2.default.join(think.RUNTIME_PATH, 'output_wordpress.xml');
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'run',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var importer, posts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, post, cateList, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, cate;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                importer = new _wxr2.default();
                _context.next = 3;
                return this.getPosts();

              case 3:
                posts = _context.sent;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 7;

                for (_iterator = (0, _getIterator3.default)(posts); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  post = _step.value;

                  post.content = post.content.replace(NOT_SAFE_IN_XML, '');
                  post.summary = post.summary.replace(NOT_SAFE_IN_XML, '');

                  importer.addPost({
                    id: post.id,
                    title: post.title,
                    date: think.datetime(post.create_time),
                    contentEncoded: post.content,
                    excerptEncoded: post.summary,
                    categories: post.cate
                  });
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
                _context.next = 25;
                return this.model('cate').select();

              case 25:
                cateList = _context.sent;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 29;

                for (_iterator2 = (0, _getIterator3.default)(cateList); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  cate = _step2.value;

                  importer.addCategory({
                    id: cate.id,
                    title: cate.name,
                    slug: cate.pathname
                  });
                }

                _context.next = 37;
                break;

              case 33:
                _context.prev = 33;
                _context.t1 = _context['catch'](29);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t1;

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
                _context.prev = 45;

                _fs2.default.writeFileSync(this.outputFile, importer.stringify());
                return _context.abrupt('return', this.outputFile);

              case 50:
                _context.prev = 50;
                _context.t2 = _context['catch'](45);
                throw new Error(_context.t2);

              case 53:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 11, 15, 23], [16,, 18, 22], [29, 33, 37, 45], [38,, 40, 44], [45, 50]]);
      }));

      function run() {
        return _ref2.apply(this, arguments);
      }

      return run;
    }()
  }]);
  return _class;
}(_base2.default);

exports.default = _class;