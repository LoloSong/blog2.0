'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  USER_NOT_LOGIN: [403, '未登录'],
  USER_EXIST: [100, '用户名或邮箱已经存在'],
  USER_NO_PERMISSION: [101, '没有权限'],
  PARAMS_ERROR: [102, '参数错误'],
  DATA_EMPTY: [103, '数据不能为空'],
  ACCOUNT_ERROR: [104, '用户名或者密码错误'],
  CATE_EXIST: [105, '分类名称或者缩略名已经存在'],
  TAG_EXIST: [106, '标签名称或者缩略名已经存在'],
  TWO_FACTOR_AUTH_ERROR: [107, '两步校验码错误'],
  TWO_FACTOR_AUTH_ERROR_DETAIL: [107, '两步校验码错误，请确认校验码或服务器时间是否正确'],
  APP_KEY_SECRET_ERROR: [108, '推送公钥或者私钥错误'],
  FILE_UPLOAD_ERROR: [109, '文件上传错误'],
  FILE_UPLOAD_MOVE_ERROR: [109, '文件上传后移动错误'],
  UPLOAD_URL_ERROR: [109, 'URL参数不合法或者请求失败！'],
  UPLOAD_TYPE_ERROR: [109, '请求的资源不是一张图片'],
  INVALID_FILE: [109, '文件格式错误无法解析'],
  KEY_EMPTY: [110, '公钥不能为空'],
  KEY_EXIST: [110, '公钥已经存在'],
  PATHNAME_EXIST: [111, '文章地址已经存在'],
  ACCESS_ERROR: [112, '权限错误'],
  NOT_LOGIN: [115, '暂未登录'],
  ACTION_NOT_FOUND: [116, '暂无该路由'],
  POSTER_NOT_EXIST: [117, '该密钥对暂无对应用户'],
  KEY_CHECK_SUCCESS: [117, '密钥认证成功'],
  KEY_CHECK_FAILED: [117, '密钥认证失败'],
  POST_CONTENT_ERROR: [118, '文章内容错误'],
  POST_USER_ERROR: [118, '当前用户与文章用户不一致'],
  ACCOUNT_FORBIDDEN: [119, '禁止登录'],
  SYSTERM_INSTALLED: [120, '程序已安装请勿重复安装'],
  PUSH_CLOSED: [121, '推送申请功能未开启'],
  DELETE_CURRENT_USER_ERROR: [122, '不能删除当前登录用户'],
  LDAP_CONNECT_TIMEOUT: [123, '登录超时，请稍后再试']
};