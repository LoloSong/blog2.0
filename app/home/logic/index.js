'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _class = function (_think$logic$base) {
  (0, _inherits3.default)(_class, _think$logic$base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'indexAction',

    /**
     * index action logic
     * @return {} []
     */
    value: function indexAction() {}
    /**
     * install
     * @return {[type]} [description]
     */

  }, {
    key: 'installAction',
    value: function installAction() {
      this.rules = {
        step: 'int|default:1'
      };

      if (!this.isGet()) {
        this.rules = think.extend({
          db_account: 'requiredIf:step,1',
          db_name: 'requiredIf:step,1',
          title: 'requiredIf:step,2',
          site_url: 'requiredIf:step,2:url',
          username: 'requiredIf:step,2|minLength:4',
          password: 'requiredIf:step,2|minLength:8'
        }, this.rules);
      }
    }
  }]);
  return _class;
}(think.logic.base);

exports.default = _class;