'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _package = require('../../../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$controller$bas) {
  (0, _inherits3.default)(_class, _think$controller$bas);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'init',

    /**
     * init
     * @param  {[type]} http [description]
     * @return {[type]}      [description]
     */
    value: function init(http) {
      (0, _get3.default)(_class.prototype.__proto__ || (0, _getPrototypeOf2.default)(_class.prototype), 'init', this).call(this, http);
      //home view path
      this.HOME_VIEW_PATH = '' + think.ROOT_PATH + think.sep + 'view' + think.sep + 'home' + think.sep;
    }
    /**
     * some base method in here
     */

  }, {
    key: '__before',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var model, options, navigation, themeConfig, commentConfigName, theme, siteUrl, categories, tagModel, tagList, postModel, lastPostList;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.http.action === 'install')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                if (firekylin.isInstalled) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt('return', this.redirect('/index/install'));

              case 4:
                model = this.model('options');
                _context.next = 7;
                return model.getOptions();

              case 7:
                options = _context.sent;

                this.options = options;
                navigation = options.navigation, themeConfig = options.themeConfig;

                try {
                  navigation = JSON.parse(navigation);
                } catch (e) {
                  navigation = [];
                }
                try {
                  themeConfig = JSON.parse(themeConfig);
                } catch (e) {
                  themeConfig = {};
                }

                //remove github pwd
                commentConfigName = {};

                try {
                  commentConfigName = JSON.parse(options.comment.name);
                  delete commentConfigName.githubPassWord;
                  options.comment.name = (0, _stringify2.default)(commentConfigName);
                } catch (e) {
                  commentConfigName = {};
                }

                this.assign('options', options);
                this.assign('navigation', navigation);
                this.assign('themeConfig', themeConfig);
                this.assign('VERSION', _package2.default.version);
                //set theme view root path
                theme = options.theme || 'firekylin';

                this.THEME_VIEW_PATH = '' + think.ROOT_PATH + think.sep + 'www' + think.sep + 'theme' + think.sep + theme + think.sep;

                //网站地址
                siteUrl = this.options.site_url;

                if (!siteUrl) {
                  siteUrl = 'http://' + this.http.host;
                }
                this.assign('site_url', siteUrl);

                //所有的分类
                _context.next = 25;
                return this.model('cate').getCateArchive();

              case 25:
                categories = _context.sent;

                this.assign('categories', categories);

                // 所有标签
                tagModel = this.model('tag');
                _context.next = 30;
                return tagModel.getTagArchive();

              case 30:
                tagList = _context.sent;

                this.assign('tags', tagList);

                // 最近10条文章
                postModel = this.model('post');
                _context.next = 35;
                return postModel.getLastPostList();

              case 35:
                lastPostList = _context.sent;

                this.assign('lastPostList', lastPostList);

                this.assign('currentYear', new Date().getFullYear());

              case 38:
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
    /**
     * display view page
     * @param  {} name []
     * @return {}      []
     */

  }, {
    key: 'displayView',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(name) {
        var jsonOutput, assignObj;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.http.url.match(/\.json(?:\?|$)/)) {
                  _context2.next = 5;
                  break;
                }

                jsonOutput = {}, assignObj = this.assign();

                (0, _keys2.default)(assignObj).forEach(function (key) {
                  if (['controller', 'http', 'config', '_', 'options'].indexOf(key) === -1) {
                    jsonOutput[key] = assignObj[key];
                  }
                });

                this.type('application/json');
                return _context2.abrupt('return', this.end(jsonOutput));

              case 5:
                return _context2.abrupt('return', this.display(this.THEME_VIEW_PATH + name + '.html'));

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function displayView(_x) {
        return _ref2.apply(this, arguments);
      }

      return displayView;
    }()
  }]);
  return _class;
}(think.controller.base);

exports.default = _class;