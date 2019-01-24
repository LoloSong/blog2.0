'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _url = require('url');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var build_query = function build_query(obj) {
  return '?' + (0, _keys2.default)(obj).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
  }).join('&');
};
/**
 * template config
 */
exports.default = {
  type: 'nunjucks',
  content_type: 'text/html',
  file_ext: '.html',
  file_depr: '_',
  root_path: think.ROOT_PATH + '/view',
  adapter: {
    nunjucks: {
      prerender: function prerender(nunjucks, env) {
        env.addFilter('utc', function (time) {
          return new Date(time).toUTCString();
        });
        env.addFilter('pagination', function (page) {
          var _parse = (0, _url.parse)(this.ctx.http.url, true),
              pathname = _parse.pathname,
              query = _parse.query;

          query.page = page;
          return pathname + build_query(query);
        });
        env.addFilter('xml', function (str) {
          var NOT_SAFE_IN_XML = /[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm;
          return str.replace(NOT_SAFE_IN_XML, '');
        });
      }
    }
  }
};