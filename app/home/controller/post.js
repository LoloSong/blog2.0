'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var stats = think.promisify(_fs2.default.stat);

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'indexAction',

    /**
     * index action
     * @return {[type]} [description]
     */
    value: function indexAction() {
      return this.listAction();
    }
    /**
     * post list
     * @return {Promise} []
     */

  }, {
    key: 'listAction',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var model, where, user, tagName, cateName, _assign$filter, _assign$filter2, list, data, pagination;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                model = this.model('post');
                where = {
                  tag: this.get('tag'),
                  cate: this.get('cate')
                };

                if (!this.get('name')) {
                  _context.next = 7;
                  break;
                }

                _context.next = 5;
                return this.model('user').where({ name: this.get('name') }).find();

              case 5:
                user = _context.sent;

                if (!think.isEmpty(user)) {
                  where.where = { user_id: user.id };
                }

              case 7:
                tagName = '', cateName = '';

                if (!where.tag) {
                  _context.next = 17;
                  break;
                }

                _context.next = 11;
                return this.model('tag').where({ pathname: where.tag }).find();

              case 11:
                tagName = _context.sent;

                if (think.isEmpty(tagName)) {
                  _context.next = 16;
                  break;
                }

                tagName = tagName.name;
                _context.next = 17;
                break;

              case 16:
                return _context.abrupt('return', think.statusAction(404, this.http));

              case 17:
                if (!where.cate) {
                  _context.next = 26;
                  break;
                }

                _assign$filter = this.assign('categories').filter(function (cate) {
                  return cate.pathname.toLowerCase() === where.cate.toLowerCase();
                });
                _assign$filter2 = (0, _slicedToArray3.default)(_assign$filter, 1);
                cateName = _assign$filter2[0];

                if (!(cateName && cateName.name)) {
                  _context.next = 25;
                  break;
                }

                cateName = cateName.name;
                _context.next = 26;
                break;

              case 25:
                return _context.abrupt('return', think.statusAction(404, this.http));

              case 26:
                _context.next = 28;
                return model.getPostList(this.get('page'), where);

              case 28:
                list = _context.sent;

                list.data.forEach(function (post) {
                  post.pathname = encodeURIComponent(post.pathname);
                  try {
                    post.options = JSON.parse(post.options) || {};
                    post.featuredImage = post.options.featuredImage;
                  } catch (e) {
                    post.options = {};
                    post.featuredImage = '';
                  }
                });
                data = list.data, pagination = (0, _objectWithoutProperties3.default)(list, ['data']);

                this.assign({
                  posts: data,
                  pagination: pagination,
                  tag: tagName,
                  cate: cateName,
                  pathname: where.tag || where.cate
                });
                return _context.abrupt('return', this.displayView('index'));

              case 33:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function listAction() {
        return _ref.apply(this, arguments);
      }

      return listAction;
    }()
    /**
     * post detail
     * @return {[type]} [description]
     */

  }, {
    key: 'detailAction',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var pathname, detail, previewData;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.http.url = decodeURIComponent(this.http.url);
                pathname = this.get('pathname');

                if (!(pathname === 'list')) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt('return', this.listAction());

              case 4:
                detail = void 0;

                if (!this.get('preview')) {
                  _context2.next = 15;
                  break;
                }

                _context2.prev = 6;
                previewData = JSON.parse(this.post('previewData'));
                _context2.next = 10;
                return think.model('post', null, 'admin').getContentAndSummary(previewData);

              case 10:
                detail = _context2.sent;
                _context2.next = 15;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2['catch'](6);

              case 15:
                _context2.t1 = detail;

                if (_context2.t1) {
                  _context2.next = 20;
                  break;
                }

                _context2.next = 19;
                return this.model('post').getPostDetail(pathname);

              case 19:
                _context2.t1 = _context2.sent;

              case 20:
                detail = _context2.t1;

                if (!think.isEmpty(detail)) {
                  _context2.next = 23;
                  break;
                }

                return _context2.abrupt('return', this.redirect('/'));

              case 23:
                detail.pathname = encodeURIComponent(detail.pathname);
                try {
                  detail.options = JSON.parse(detail.options) || {};
                  detail.featuredImage = detail.options.featuredImage;
                } catch (e) {
                  detail.options = {};
                  detail.featuredImage = '';
                }
                this.assign('post', detail);

                return _context2.abrupt('return', this.displayView('post'));

              case 27:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 13]]);
      }));

      function detailAction() {
        return _ref2.apply(this, arguments);
      }

      return detailAction;
    }()
  }, {
    key: 'pageAction',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var pathname, detail, previewData, template;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                pathname = this.get('pathname');
                detail = void 0;

                if (!this.get('preview')) {
                  _context3.next = 12;
                  break;
                }

                _context3.prev = 3;
                previewData = JSON.parse(this.post('previewData'));
                _context3.next = 7;
                return think.model('post', null, 'admin').getContentAndSummary(previewData);

              case 7:
                detail = _context3.sent;
                _context3.next = 12;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3['catch'](3);

              case 12:
                _context3.t1 = detail;

                if (_context3.t1) {
                  _context3.next = 17;
                  break;
                }

                _context3.next = 16;
                return this.model('post').setRelation(false).where({
                  pathname: pathname,
                  is_public: 1, //公开
                  type: 1, //文章
                  status: 3 //已经发布
                }).find();

              case 16:
                _context3.t1 = _context3.sent;

              case 17:
                detail = _context3.t1;

                detail.pathname = encodeURIComponent(detail.pathname);
                try {
                  detail.options = JSON.parse(detail.options) || {};
                  detail.featuredImage = detail.options.featuredImage;
                } catch (e) {
                  detail.options = {};
                  detail.featuredImage = '';
                }
                this.assign('page', detail);
                this.assign('pathname', pathname);

                template = 'page';

                if (!detail.options) {
                  _context3.next = 34;
                  break;
                }

                _context3.prev = 24;

                if (!detail.options.template) {
                  _context3.next = 29;
                  break;
                }

                _context3.next = 28;
                return stats(_path2.default.join(this.THEME_VIEW_PATH, 'template', detail.options.template));

              case 28:
                template = 'template' + think.sep + detail.options.template.slice(0, -5);

              case 29:
                _context3.next = 34;
                break;

              case 31:
                _context3.prev = 31;
                _context3.t2 = _context3['catch'](24);

                console.log(_context3.t2); // eslint-disable-line no-console

              case 34:
                return _context3.abrupt('return', this.displayView(template));

              case 35:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 10], [24, 31]]);
      }));

      function pageAction() {
        return _ref3.apply(this, arguments);
      }

      return pageAction;
    }()
    /**
     * post archive
     * @return {[type]} [description]
     */

  }, {
    key: 'archiveAction',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        var model, data, i;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                model = this.model('post');
                _context4.next = 3;
                return model.getPostArchive();

              case 3:
                data = _context4.sent;

                for (i in data) {
                  data[i].map(function (post) {
                    return post.pathname = encodeURIComponent(post.pathname);
                  });
                }
                this.assign('list', data);
                return _context4.abrupt('return', this.displayView('archive'));

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function archiveAction() {
        return _ref4.apply(this, arguments);
      }

      return archiveAction;
    }()
  }, {
    key: 'tagAction',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt('return', this.displayView('tag'));

              case 1:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function tagAction() {
        return _ref5.apply(this, arguments);
      }

      return tagAction;
    }()
    /**
     * search action
     * @return {[type]} [description]
     */

  }, {
    key: 'searchAction',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
        var keyword, postModel, searchResult, tagModel, hotTags;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                keyword = this.get('keyword').trim();

                if (!keyword) {
                  _context6.next = 8;
                  break;
                }

                postModel = this.model('post');
                _context6.next = 5;
                return postModel.getPostSearch(keyword, this.get('page'));

              case 5:
                searchResult = _context6.sent;

                this.assign('searchData', searchResult);
                this.assign('pagination', searchResult);

              case 8:

                //热门标签
                tagModel = this.model('tag');
                _context6.next = 11;
                return tagModel.getHotTags();

              case 11:
                hotTags = _context6.sent;

                this.assign('hotTags', hotTags);

                this.assign('keyword', keyword);
                return _context6.abrupt('return', this.displayView('search'));

              case 15:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function searchAction() {
        return _ref6.apply(this, arguments);
      }

      return searchAction;
    }()
  }]);
  return _class;
}(_base2.default);

exports.default = _class;