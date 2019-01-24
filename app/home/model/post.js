'use strict';
/**
 * model
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _get3 = require('babel-runtime/helpers/get');

var _get4 = _interopRequireDefault(_get3);

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
      cate: {
        type: think.model.MANY_TO_MANY,
        field: 'id,name,pathname'
      },
      tag: {
        type: think.model.MANY_TO_MANY,
        field: 'id,name,pathname'
      },
      user: {
        type: think.model.BELONG_TO,
        field: 'id,name,display_name,email'
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /**
   * relation
   * @type {Object}
   */


  (0, _createClass3.default)(_class, [{
    key: 'init',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _get2;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var _ref3, feedFullText, postsListSize;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (_get2 = (0, _get4.default)(_class.prototype.__proto__ || (0, _getPrototypeOf2.default)(_class.prototype), 'init', this)).call.apply(_get2, [this].concat(args));
                _context.next = 3;
                return this.model('options').getOptions();

              case 3:
                _ref3 = _context.sent;
                feedFullText = _ref3.feedFullText;
                postsListSize = _ref3.postsListSize;

                this.feedFullText = feedFullText;
                this.postsListSize = +postsListSize;

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _ref2.apply(this, arguments);
      }

      return init;
    }()
    /**
     * get where condition
     * @param  {[type]} where [description]
     * @return {[type]}       [description]
     */

  }, {
    key: 'getWhereCondition',
    value: function getWhereCondition(where) {
      where = think.extend({}, where, {
        is_public: 1, //公开
        type: 0, //文章
        status: 3 //已经发布
      });
      if (!where.create_time) {
        where.create_time = {
          '<=': think.datetime()
        };
      }
      return where;
    }

    /**
     * 获取最近的10条数据 - 有缓存
     *
     * @return {Promise}
     */

  }, {
    key: 'getLastPostList',
    value: function getLastPostList() {
      var _this2 = this;

      return think.cache('lastPostList', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var postList;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.getPostList();

              case 2:
                postList = _context2.sent;
                return _context2.abrupt('return', postList.data);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      })));
    }

    /**
     * get post list
     * @param  {[type]} page  [description]
     * @param  {[type]} where [description]
     * @return {[type]}       [description]
     */

  }, {
    key: 'getPostList',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(page) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var field, name, _ref6, id, _where, where;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                page = page | 0 || 1;

                field = options.field || 'id,title,pathname,create_time,summary,comment_num,options';
                _context3.next = 4;
                return this.model('user').count();

              case 4:
                _context3.t0 = _context3.sent;

                if (!(_context3.t0 > 0)) {
                  _context3.next = 7;
                  break;
                }

                field += ',user_id';

              case 7:
                if (!(options.tag || options.cate)) {
                  _context3.next = 17;
                  break;
                }

                name = options.tag ? 'tag' : 'cate';
                _context3.next = 11;
                return this.model(name).field('id').setRelation(false).where({ pathname: options.tag || options.cate }).find();

              case 11:
                _ref6 = _context3.sent;
                id = _ref6.id;

                if (!think.isEmpty(id)) {
                  _context3.next = 15;
                  break;
                }

                return _context3.abrupt('return', false);

              case 15:
                _where = this.getWhereCondition((0, _defineProperty3.default)({}, name + '.' + name + '_id', id));
                return _context3.abrupt('return', this.join({
                  table: 'post_' + name,
                  as: name,
                  on: ['id', 'post_id']
                }).where(_where).order('create_time DESC').page(page, this.postsListSize).countSelect());

              case 17:
                where = this.getWhereCondition(options.where);
                // only cache first page post
                // if(page === 1){
                //   return think.cache('post_1', () => {
                //     return this.field(field)
                //       .page(page, this.postsListSize)
                //       .setRelation(false)
                //       .order('create_time DESC')
                //       .where(where)
                //       .countSelect();
                //   },{timeout:259200});
                // }

                return _context3.abrupt('return', this.field(field).page(page, this.postsListSize).setRelation('user').order('create_time DESC').where(where).countSelect());

              case 19:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getPostList(_x) {
        return _ref5.apply(this, arguments);
      }

      return getPostList;
    }()

    /**
     * get post detail info
     * @param  {[type]} pathname [description]
     * @return {[type]}          [description]
     */

  }, {
    key: 'getPostDetail',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(pathname) {
        var where, detail, createTime, prevWhere, prevPromise, nextWhere, nextPromise, _ref8, _ref9, prev, next;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                where = this.getWhereCondition({ pathname: pathname });
                _context4.next = 3;
                return this.where(where).fieldReverse('markdown_content,summary').find();

              case 3:
                detail = _context4.sent;

                if (!think.isEmpty(detail)) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt('return', detail);

              case 6:
                createTime = think.datetime(detail.create_time);
                prevWhere = this.getWhereCondition({
                  create_time: ['<', createTime],
                  id: ['!=', detail.id]
                });
                prevPromise = this.field('title,pathname').setRelation(false).where(prevWhere).order('create_time DESC').find();
                nextWhere = this.getWhereCondition({
                  create_time: ['>', createTime],
                  id: ['!=', detail.id]
                });
                nextPromise = this.field('title,pathname').setRelation(false).where(nextWhere).order('create_time ASC').find();
                _context4.next = 13;
                return _promise2.default.all([prevPromise, nextPromise]);

              case 13:
                _ref8 = _context4.sent;
                _ref9 = (0, _slicedToArray3.default)(_ref8, 2);
                prev = _ref9[0];
                next = _ref9[1];

                detail.prev = prev;
                detail.next = next;
                return _context4.abrupt('return', detail);

              case 20:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getPostDetail(_x3) {
        return _ref7.apply(this, arguments);
      }

      return getPostDetail;
    }()
  }, {
    key: 'getPostRssList',
    value: function () {
      var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
        var field, where, data;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                field = 'id,title,pathname,create_time,';
                where = this.getWhereCondition();


                if (this.feedFullText === '0') {
                  field += 'summary,content';
                } else {
                  field += 'content';
                }

                _context5.next = 5;
                return this.field(field).where(where).order('create_time DESC').setRelation(false).limit(10).select();

              case 5:
                data = _context5.sent;
                return _context5.abrupt('return', data);

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getPostRssList() {
        return _ref10.apply(this, arguments);
      }

      return getPostRssList;
    }()
  }, {
    key: 'getPostSitemapList',
    value: function () {
      var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
        var field, where, data;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                field = 'pathname,type,update_time';
                where = {
                  is_public: 1, //公开
                  status: 3, //已经发布
                  create_time: {
                    '<=': think.datetime()
                  }
                };
                _context6.next = 4;
                return this.field(field).where(where).order('update_time DESC').setRelation(false).select();

              case 4:
                data = _context6.sent;
                return _context6.abrupt('return', data);

              case 6:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getPostSitemapList() {
        return _ref11.apply(this, arguments);
      }

      return getPostSitemapList;
    }()
    /**
     * get post archive
     * @return {[type]} [description]
     */

  }, {
    key: 'getPostArchive',
    value: function () {
      var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
        var where, data, result;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                where = this.getWhereCondition();
                _context7.next = 3;
                return this.field('id,title,pathname,create_time').order('create_time DESC').setRelation(false).where(where).select();

              case 3:
                data = _context7.sent;
                result = {};

                data.forEach(function (item) {
                  var yearMonth = think.datetime(item.create_time, 'YYYY年MM月');
                  if (!(yearMonth in result)) {
                    result[yearMonth] = [];
                  }
                  result[yearMonth].push(item);
                });
                return _context7.abrupt('return', result);

              case 7:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getPostArchive() {
        return _ref12.apply(this, arguments);
      }

      return getPostArchive;
    }()
    /**
     * get post search result
     * @param  {[type]} keyword [description]
     * @param  {[type]} page    [description]
     * @return {[type]}         [description]
     */

  }, {
    key: 'getPostSearch',
    value: function () {
      var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(keyword, page) {
        var where;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                where = { 'title|content': ['LIKE', '%' + keyword + '%'] };

                where = this.getWhereCondition(where);
                return _context8.abrupt('return', this.where(where).page(page, this.postsListSize).setRelation(false).field('title,pathname,summary,create_time').order('create_time DESC').countSelect(false));

              case 3:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getPostSearch(_x4, _x5) {
        return _ref13.apply(this, arguments);
      }

      return getPostSearch;
    }()
  }]);
  return _class;
}(think.model.relation);

exports.default = _class;