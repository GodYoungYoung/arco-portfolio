import { request } from '@/utils/request.js'

export default {
  /**
   * 获取用户列表
   * @returns
   */
  getUserList(params = {}) {
    return request({
      url: '/core/system/getUserList',
      method: 'get',
      params
    })
  },

  /**
   * 通过id 列表获取用户基础信息
   * @returns
   */
  getUserInfoByIds(data = {}) {
    return request({
      url: '/core/system/getUserInfoByIds',
      method: 'post',
      data
    })
  },

  /**
   * 获取公告列表
   * @returns
   */
  getNoticeList(params = {}) {
    return request({
      url: '/core/system/notice',
      method: 'get',
      params
    })
  },

  /**
   * 清除所有缓存
   * @returns
   */
  clearAllCache() {
    return request({
      url: '/core/system/clearAllCache',
      method: 'get'
    })
  },

  /**
   * 上传图片接口
   * @returns
   */
  uploadImage(data = {}) {
    return request({
      url: '/core/system/uploadImage',
      method: 'post',
      timeout: 30000,
      // headers: { 'Content-Type': 'multipart/form-data' },
      data
    })
  },

  /**
   * 上传文件接口
   * @returns
   */
  uploadFile(data = {}) {
    return request({
      url: '/core/system/uploadFile',
      method: 'post',
      timeout: 30000,
      // headers: { 'Content-Type': 'multipart/form-data' },
      data
    })
  },

  /**
   * 保存网络图片
   * @returns
   */
  saveNetWorkImage(data = {}) {
    return request({
      url: '/core/system/saveNetworkImage',
      method: 'post',
      data
    })
  },

  /**
   * 获取登录日志列表
   */
  getLoginLogList(params = {}) {
    return new Promise((resolve, reject) => {
      resolve({
        "total": 11119,
        "per_page": 5,
        "current_page": 1,
        "last_page": 2224,
        "data": [
            {
                "id": 11459,
                "username": "admin",
                "ip": "124.89.8.136",
                "ip_location": "陕西省-西安市:联通",
                "os": "Windows",
                "browser": "Chrome",
                "status": 1,
                "message": "登录成功",
                "login_time": "2025-02-21 10:56:26",
                "remark": null,
                "create_time": "2025-02-21 10:56:27",
                "update_time": "2025-02-21 10:56:27"
            },
            {
                "id": 11458,
                "username": "admin",
                "ip": "183.253.120.83",
                "ip_location": "福建省-莆田市:移动",
                "os": "Mac",
                "browser": "Chrome",
                "status": 1,
                "message": "登录成功",
                "login_time": "2025-02-21 10:35:50",
                "remark": null,
                "create_time": "2025-02-21 10:35:51",
                "update_time": "2025-02-21 10:35:51"
            },
            {
                "id": 11457,
                "username": "admin",
                "ip": "183.253.120.83",
                "ip_location": "福建省-莆田市:移动",
                "os": "Mac",
                "browser": "Chrome",
                "status": 0,
                "message": "账号或密码错误，请重新输入!",
                "login_time": "2025-02-21 10:35:28",
                "remark": null,
                "create_time": "2025-02-21 10:35:28",
                "update_time": "2025-02-21 10:35:28"
            },
            {
                "id": 11456,
                "username": "admin",
                "ip": "121.29.123.47",
                "ip_location": "河北省-石家庄市:联通",
                "os": "Windows",
                "browser": "Chrome",
                "status": 1,
                "message": "登录成功",
                "login_time": "2025-02-21 10:18:28",
                "remark": null,
                "create_time": "2025-02-21 10:18:29",
                "update_time": "2025-02-21 10:18:29"
            },
            {
                "id": 11455,
                "username": "admin",
                "ip": "116.7.104.233",
                "ip_location": "广东省-深圳市:电信",
                "os": "Windows",
                "browser": "Chrome",
                "status": 1,
                "message": "登录成功",
                "login_time": "2025-02-21 10:13:17",
                "remark": null,
                "create_time": "2025-02-21 10:13:18",
                "update_time": "2025-02-21 10:13:18"
            }
        ],
        "has_more": true
      })
    })
  },

  /**
   * 获取操作日志列表
   */
  getOperationLogList(params = {}) {
    return new Promise((resolve, reject) => {
      resolve({
        "total": 8762,
        "per_page": 5,
        "current_page": 1,
        "last_page": 1753,
        "data": [
            {
                "id": 8892,
                "username": "admin",
                "app": "saiadmin",
                "method": "POST",
                "router": "\/core\/post\/export",
                "service_name": "岗位导出",
                "ip": "112.5.168.202",
                "ip_location": "福建省-厦门市:移动",
                "remark": null,
                "created_by": 1,
                "updated_by": 1,
                "create_time": "2025-02-21 11:11:56",
                "update_time": "2025-02-21 11:11:56"
            },
            {
                "id": 8891,
                "username": "admin",
                "app": "saiadmin",
                "method": "POST",
                "router": "\/core\/post\/export",
                "service_name": "岗位导出",
                "ip": "112.5.168.202",
                "ip_location": "福建省-厦门市:移动",
                "remark": null,
                "created_by": 1,
                "updated_by": 1,
                "create_time": "2025-02-21 11:11:52",
                "update_time": "2025-02-21 11:11:52"
            },
            {
                "id": 8890,
                "username": "admin",
                "app": "saiadmin",
                "method": "POST",
                "router": "\/core\/post\/export",
                "service_name": "岗位导出",
                "ip": "112.5.168.202",
                "ip_location": "福建省-厦门市:移动",
                "remark": null,
                "created_by": 1,
                "updated_by": 1,
                "create_time": "2025-02-21 11:11:47",
                "update_time": "2025-02-21 11:11:47"
            },
            {
                "id": 8889,
                "username": "admin",
                "app": "saiadmin",
                "method": "POST",
                "router": "\/core\/post\/export",
                "service_name": "岗位导出",
                "ip": "112.5.168.202",
                "ip_location": "福建省-厦门市:移动",
                "remark": null,
                "created_by": 1,
                "updated_by": 1,
                "create_time": "2025-02-21 11:11:40",
                "update_time": "2025-02-21 11:11:40"
            },
            {
                "id": 8888,
                "username": "admin",
                "app": "saiadmin",
                "method": "POST",
                "router": "\/core\/user\/updateinfo",
                "service_name": "未知",
                "ip": "183.253.120.83",
                "ip_location": "福建省-莆田市:移动",
                "remark": null,
                "created_by": 1,
                "updated_by": 1,
                "create_time": "2025-02-21 10:37:08",
                "update_time": "2025-02-21 10:37:08"
            }
        ],
        "has_more": true
      })
    })
  },

  /**
   * 获取资源列表
   */
  getResourceList(params = {}) {
    return request({
      url: '/core/system/getResourceList',
      method: 'get',
      params
    })
  },

  /**
   * 通用导入Excel
   */
  importExcel(url, data) {
    return request({
      url,
      method: 'post',
      data,
      timeout: 30 * 1000
      // headers: { 'Content-Type': 'multipart/form-data' },
    })
  },

  /**
   * 下载通用方法
   */
  download(url, method = 'post') {
    return request({ url, method, responseType: 'blob' })
  },

  /**
   * GET通用方法
   */
  commonGet(url, params = {}) {
    return request({ url, method: 'get', params })
  },

  /**
   * 快捷查询字典
   */
  getDict(code) {
    return request({
      url: '/core/system/dictData?code=' + code,
      method: 'get'
    })
  },

  /**
   * 查询所有字典数据
   */
  dictAll() {
    return request({
      url: '/core/system/dictAll',
      method: 'get'
    })
  },

  /**
   * 获取插件信息
   */
  getPluginInfo(params) {
    return request({
      url: '/core/system/getPlugin',
      method: 'get',
      params
    })
  },

  downloadById(id) {
    return request({
      url: '/core/system/downloadById/' + id,
      responseType: 'blob',
      method: 'get'
    })
  },

  downloadByHash(hash) {
    return request({
      url: '/core/system/downloadByHash/' + hash,
      responseType: 'blob',
      method: 'get'
    })
  }
}
