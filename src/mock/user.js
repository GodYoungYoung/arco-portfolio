// src/mock/index.js
import Mock from 'mockjs'

// 模拟用户信息
Mock.mock('/core/system/user', 'get', () => {
  return {
    "code": 200,
    "message": "success",
    "data": {
        "user": {
            "id": 1,
            "username": "admin",
            "user_type": "100",
            "nickname": "祭道之上",
            "phone": "13888888888",
            "email": "admin@admin.com",
            "avatar": "http:\/\/admin.saithink.top\/storage\/20240527\/7ece61225ffe6cc374a58add56f0e8e80b03fa09.jpg",
            "signed": "Today is very good！",
            "dashboard": "statistics",
            "dept_id": 0,
            "status": 1,
            "login_ip": "124.89.8.136",
            "login_time": "2025-02-20 16:17:40",
            "backend_setting": {
                "mode": "light",
                "tag": true,
                "menuCollapse": false,
                "menuWidth": 230,
                "layout": "classic",
                "skin": "mine",
                "i18n": false,
                "language": "zh_CN",
                "animation": "ma-slide-down",
                "color": "#7166F0",
                "waterMark": true,
                "waterContent": "saiadmin",
                "ws": true
            },
            "remark": null,
            "created_by": 1,
            "updated_by": 1,
            "create_time": null,
            "update_time": "2025-02-20 16:17:40",
            "delete_time": null,
            "roleList": [
                {
                    "id": 1,
                    "parent_id": 0,
                    "level": "0",
                    "name": "超级管理员（创始人）",
                    "code": "superAdmin",
                    "data_scope": 1,
                    "status": 1,
                    "sort": 100,
                    "remark": "系统内置角色，不可删除",
                    "created_by": 1,
                    "updated_by": 1,
                    "create_time": "2023-10-24 12:00:00",
                    "update_time": "2023-10-24 12:00:00",
                    "pivot": {
                        "user_id": 1,
                        "role_id": 1
                    }
                }
            ],
            "postList": [],
            "deptList": null
        },
        "codes": [
            "*"
        ],
        "roles": [
            "superAdmin"
        ],
        "routers": [
            {
                "id": 1000,
                "parent_id": 0,
                "name": "permission",
                "path": "\/permission",
                "component": "",
                "redirect": null,
                "meta": {
                    "title": "权限",
                    "type": "M",
                    "hidden": false,
                    "layout": true,
                    "hiddenBreadcrumb": false,
                    "icon": "bi:person-lock"
                },
                "children": [
                    {
                        "id": 1100,
                        "parent_id": 1000,
                        "name": "user",
                        "path": "\/user",
                        "component": "system\/user\/index",
                        "redirect": null,
                        "meta": {
                            "title": "用户管理",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "bi:people"
                        }
                    },
                    {
                        "id": 1400,
                        "parent_id": 1000,
                        "name": "role",
                        "path": "\/role",
                        "component": "system\/role\/index",
                        "redirect": null,
                        "meta": {
                            "title": "角色管理",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "bi:person-heart"
                        }
                    },
                    {
                        "id": 1300,
                        "parent_id": 1000,
                        "name": "dept",
                        "path": "\/dept",
                        "component": "system\/dept\/index",
                        "redirect": null,
                        "meta": {
                            "title": "部门管理",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "bi:diagram-3-fill"
                        }
                    },
                    {
                        "id": 1200,
                        "parent_id": 1000,
                        "name": "menu",
                        "path": "\/menu",
                        "component": "system\/menu\/index",
                        "redirect": null,
                        "meta": {
                            "title": "菜单管理",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "bi:layout-sidebar"
                        }
                    },
                    {
                        "id": 1500,
                        "parent_id": 1000,
                        "name": "post",
                        "path": "\/post",
                        "component": "system\/post\/index",
                        "redirect": null,
                        "meta": {
                            "title": "岗位管理",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "bi:person-fill-gear"
                        }
                    }
                ]
            },
            {
                "id": 2000,
                "parent_id": 0,
                "name": "dataCenter",
                "path": "\/dataCenter",
                "component": "",
                "redirect": null,
                "meta": {
                    "title": "数据",
                    "type": "M",
                    "hidden": false,
                    "layout": true,
                    "hiddenBreadcrumb": false,
                    "icon": "icon-storage"
                },
                "children": [
                    {
                        "id": 2100,
                        "parent_id": 2000,
                        "name": "dict",
                        "path": "\/dict",
                        "component": "system\/dict\/index",
                        "redirect": null,
                        "meta": {
                            "title": "数据字典",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "bi:ui-radios"
                        }
                    },
                    {
                        "id": 2200,
                        "parent_id": 2000,
                        "name": "attachment",
                        "path": "\/attachment",
                        "component": "system\/attachment\/index",
                        "redirect": null,
                        "meta": {
                            "title": "附件管理",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "bi:window-stack"
                        }
                    },
                    {
                        "id": 2300,
                        "parent_id": 2000,
                        "name": "dataMaintain",
                        "path": "\/dataMaintain",
                        "component": "system\/dataMaintain\/index",
                        "redirect": null,
                        "meta": {
                            "title": "数据表维护",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "bi:database-fill-gear"
                        }
                    },
                    {
                        "id": 2700,
                        "parent_id": 2000,
                        "name": "notice",
                        "path": "\/notice",
                        "component": "system\/notice\/index",
                        "redirect": null,
                        "meta": {
                            "title": "系统公告",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "bi:megaphone"
                        }
                    }
                ]
            },
            {
                "id": 3000,
                "parent_id": 0,
                "name": "monitor",
                "path": "\/monitor",
                "component": "",
                "redirect": null,
                "meta": {
                    "title": "监控",
                    "type": "M",
                    "hidden": false,
                    "layout": true,
                    "hiddenBreadcrumb": false,
                    "icon": "bi:app-indicator"
                },
                "children": [
                    {
                        "id": 3200,
                        "parent_id": 3000,
                        "name": "server",
                        "path": "\/server",
                        "component": "system\/monitor\/server\/index",
                        "redirect": null,
                        "meta": {
                            "title": "服务监控",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "bi:gear-wide-connected"
                        }
                    },
                    {
                        "id": 3300,
                        "parent_id": 3000,
                        "name": "logs",
                        "path": "\/logs",
                        "component": "",
                        "redirect": null,
                        "meta": {
                            "title": "日志监控",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "bi:journal-album"
                        },
                        "children": [
                            {
                                "id": 3400,
                                "parent_id": 3300,
                                "name": "loginLog",
                                "path": "\/loginLog",
                                "component": "system\/logs\/loginLog",
                                "redirect": null,
                                "meta": {
                                    "title": "登录日志",
                                    "type": "M",
                                    "hidden": false,
                                    "layout": true,
                                    "hiddenBreadcrumb": false,
                                    "icon": "bi:person-fill-up"
                                }
                            },
                            {
                                "id": 3500,
                                "parent_id": 3300,
                                "name": "operLog",
                                "path": "\/operLog",
                                "component": "system\/logs\/operLog",
                                "redirect": null,
                                "meta": {
                                    "title": "操作日志",
                                    "type": "M",
                                    "hidden": false,
                                    "layout": true,
                                    "hiddenBreadcrumb": false,
                                    "icon": "bi:list-ul"
                                }
                            }
                        ]
                    },
                    {
                        "id": 3600,
                        "parent_id": 3000,
                        "name": "emailLog",
                        "path": "\/emailLog",
                        "component": "system\/logs\/emailLog",
                        "redirect": null,
                        "meta": {
                            "title": "邮件记录",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "bi:envelope-at"
                        }
                    }
                ]
            },
            {
                "id": 4000,
                "parent_id": 0,
                "name": "devTools",
                "path": "\/devTools",
                "component": "",
                "redirect": null,
                "meta": {
                    "title": "工具",
                    "type": "M",
                    "hidden": false,
                    "layout": true,
                    "hiddenBreadcrumb": false,
                    "icon": "bi:tools"
                },
                "children": [
                    {
                        "id": 4200,
                        "parent_id": 4000,
                        "name": "code",
                        "path": "\/code",
                        "component": "setting\/code\/index",
                        "redirect": null,
                        "meta": {
                            "title": "代码生成器",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "bi:terminal-plus"
                        }
                    },
                    {
                        "id": 4400,
                        "parent_id": 4000,
                        "name": "crontab",
                        "path": "\/crontab",
                        "component": "setting\/crontab\/index",
                        "redirect": "",
                        "meta": {
                            "title": "定时任务",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "bi:clock"
                        }
                    }
                ]
            },
            {
                "id": 4629,
                "parent_id": 0,
                "name": "saicms",
                "path": "\/saicms",
                "component": "",
                "redirect": null,
                "meta": {
                    "title": "SAICMS",
                    "type": "M",
                    "hidden": false,
                    "layout": true,
                    "hiddenBreadcrumb": false,
                    "icon": "IconBook"
                },
                "children": [
                    {
                        "id": 4630,
                        "parent_id": 4629,
                        "name": "saicms\/news\/article",
                        "path": "\/saicms\/news\/article",
                        "component": "saicms\/news\/article\/index",
                        "redirect": null,
                        "meta": {
                            "title": "文章管理",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "icon-home"
                        }
                    },
                    {
                        "id": 4639,
                        "parent_id": 4629,
                        "name": "saicms\/news\/category",
                        "path": "\/saicms\/news\/category",
                        "component": "saicms\/news\/category\/index",
                        "redirect": null,
                        "meta": {
                            "title": "文章分类",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "icon-home"
                        }
                    },
                    {
                        "id": 4648,
                        "parent_id": 4629,
                        "name": "saicms\/news\/banner",
                        "path": "\/saicms\/news\/banner",
                        "component": "saicms\/news\/banner\/index",
                        "redirect": null,
                        "meta": {
                            "title": "文章轮播",
                            "type": "M",
                            "hidden": false,
                            "layout": true,
                            "hiddenBreadcrumb": false,
                            "icon": "icon-home"
                        }
                    }
                ]
            },
            {
                "id": 4500,
                "parent_id": 0,
                "name": "system",
                "path": "\/system",
                "component": "setting\/config\/index",
                "redirect": "",
                "meta": {
                    "title": "系统设置",
                    "type": "M",
                    "hidden": false,
                    "layout": true,
                    "hiddenBreadcrumb": false,
                    "icon": "bi:gear"
                }
            }
        ]
    }
  }
})

// 模拟字典
Mock.mock('/core/system/dictAll', 'get', () => {
  return {
    "code": 200,
    "message": "success",
    "data": {
        "table_engine": [
            {
                "id": 1,
                "type_id": 1,
                "label": "InnoDB",
                "value": "InnoDB",
                "code": "table_engine",
                "sort": 1,
                "status": 1,
                "remark": null
            },
            {
                "id": 2,
                "type_id": 1,
                "label": "MyISAM",
                "value": "MyISAM",
                "code": "table_engine",
                "sort": 1,
                "status": 1,
                "remark": null
            }
        ],
        "upload_mode": [
            {
                "id": 3,
                "type_id": 2,
                "label": "本地存储",
                "value": "1",
                "code": "upload_mode",
                "sort": 99,
                "status": 1,
                "remark": null
            },
            {
                "id": 4,
                "type_id": 2,
                "label": "阿里云OSS",
                "value": "2",
                "code": "upload_mode",
                "sort": 98,
                "status": 1,
                "remark": null
            },
            {
                "id": 5,
                "type_id": 2,
                "label": "七牛云",
                "value": "3",
                "code": "upload_mode",
                "sort": 97,
                "status": 1,
                "remark": null
            },
            {
                "id": 6,
                "type_id": 2,
                "label": "腾讯云COS",
                "value": "4",
                "code": "upload_mode",
                "sort": 96,
                "status": 1,
                "remark": null
            },
            {
                "id": 60,
                "type_id": 2,
                "label": "亚马逊S3",
                "value": "2",
                "code": "upload_mode",
                "sort": 95,
                "status": 1,
                "remark": null
            }
        ],
        "data_status": [
            {
                "id": 7,
                "type_id": 3,
                "label": "正常",
                "value": "1",
                "code": "data_status",
                "sort": 0,
                "status": 1,
                "remark": "1为正常"
            },
            {
                "id": 8,
                "type_id": 3,
                "label": "停用",
                "value": "2",
                "code": "data_status",
                "sort": 0,
                "status": 1,
                "remark": "2为停用"
            }
        ],
        "dashboard": [
            {
                "id": 9,
                "type_id": 4,
                "label": "统计页面",
                "value": "statistics",
                "code": "dashboard",
                "sort": 0,
                "status": 1,
                "remark": "管理员用"
            },
            {
                "id": 10,
                "type_id": 4,
                "label": "工作台",
                "value": "work",
                "code": "dashboard",
                "sort": 0,
                "status": 1,
                "remark": "员工使用"
            }
        ],
        "sex": [
            {
                "id": 11,
                "type_id": 5,
                "label": "男",
                "value": "1",
                "code": "sex",
                "sort": 0,
                "status": 1,
                "remark": null
            },
            {
                "id": 12,
                "type_id": 5,
                "label": "女",
                "value": "2",
                "code": "sex",
                "sort": 0,
                "status": 1,
                "remark": null
            },
            {
                "id": 13,
                "type_id": 5,
                "label": "未知",
                "value": "3",
                "code": "sex",
                "sort": 0,
                "status": 1,
                "remark": null
            }
        ],
        "backend_notice_type": [
            {
                "id": 22,
                "type_id": 7,
                "label": "通知",
                "value": "1",
                "code": "backend_notice_type",
                "sort": 2,
                "status": 1,
                "remark": null
            },
            {
                "id": 23,
                "type_id": 7,
                "label": "公告",
                "value": "2",
                "code": "backend_notice_type",
                "sort": 1,
                "status": 1,
                "remark": null
            }
        ],
        "request_mode": [
            {
                "id": 24,
                "type_id": 8,
                "label": "所有",
                "value": "A",
                "code": "request_mode",
                "sort": 5,
                "status": 1,
                "remark": null
            },
            {
                "id": 25,
                "type_id": 8,
                "label": "GET",
                "value": "G",
                "code": "request_mode",
                "sort": 4,
                "status": 1,
                "remark": null
            },
            {
                "id": 26,
                "type_id": 8,
                "label": "POST",
                "value": "P",
                "code": "request_mode",
                "sort": 3,
                "status": 1,
                "remark": null
            },
            {
                "id": 27,
                "type_id": 8,
                "label": "PUT",
                "value": "U",
                "code": "request_mode",
                "sort": 2,
                "status": 1,
                "remark": null
            },
            {
                "id": 28,
                "type_id": 8,
                "label": "DELETE",
                "value": "D",
                "code": "request_mode",
                "sort": 1,
                "status": 1,
                "remark": null
            }
        ],
        "attachment_type": [
            {
                "id": 44,
                "type_id": 12,
                "label": "图片",
                "value": "image",
                "code": "attachment_type",
                "sort": 10,
                "status": 1,
                "remark": null
            },
            {
                "id": 45,
                "type_id": 12,
                "label": "文档",
                "value": "text",
                "code": "attachment_type",
                "sort": 9,
                "status": 1,
                "remark": null
            },
            {
                "id": 46,
                "type_id": 12,
                "label": "音频",
                "value": "audio",
                "code": "attachment_type",
                "sort": 8,
                "status": 1,
                "remark": null
            },
            {
                "id": 47,
                "type_id": 12,
                "label": "视频",
                "value": "video",
                "code": "attachment_type",
                "sort": 7,
                "status": 1,
                "remark": null
            },
            {
                "id": 48,
                "type_id": 12,
                "label": "应用程序",
                "value": "application",
                "code": "attachment_type",
                "sort": 6,
                "status": 1,
                "remark": null
            }
        ],
        "menu_type": [
            {
                "id": 49,
                "type_id": 13,
                "label": "菜单",
                "value": "M",
                "code": "menu_type",
                "sort": 100,
                "status": 1,
                "remark": ""
            },
            {
                "id": 50,
                "type_id": 13,
                "label": "按钮",
                "value": "B",
                "code": "menu_type",
                "sort": 100,
                "status": 1,
                "remark": ""
            },
            {
                "id": 51,
                "type_id": 13,
                "label": "外链",
                "value": "L",
                "code": "menu_type",
                "sort": 100,
                "status": 1,
                "remark": ""
            },
            {
                "id": 52,
                "type_id": 13,
                "label": "iFrame",
                "value": "I",
                "code": "menu_type",
                "sort": 100,
                "status": 1,
                "remark": ""
            }
        ],
        "yes_or_no": [
            {
                "id": 53,
                "type_id": 14,
                "label": "是",
                "value": "1",
                "code": "yes_or_no",
                "sort": 100,
                "status": 1,
                "remark": ""
            },
            {
                "id": 54,
                "type_id": 14,
                "label": "否",
                "value": "2",
                "code": "yes_or_no",
                "sort": 100,
                "status": 1,
                "remark": ""
            }
        ],
        "data_scope": [
            {
                "id": 55,
                "type_id": 15,
                "label": "全部数据权限",
                "value": "1",
                "code": "data_scope",
                "sort": 100,
                "status": 1,
                "remark": ""
            },
            {
                "id": 56,
                "type_id": 15,
                "label": "自定义数据权限",
                "value": "2",
                "code": "data_scope",
                "sort": 100,
                "status": 1,
                "remark": ""
            },
            {
                "id": 57,
                "type_id": 15,
                "label": "本部门数据权限",
                "value": "3",
                "code": "data_scope",
                "sort": 100,
                "status": 1,
                "remark": ""
            },
            {
                "id": 58,
                "type_id": 15,
                "label": "本部门及以下数据权限",
                "value": "4",
                "code": "data_scope",
                "sort": 100,
                "status": 1,
                "remark": ""
            },
            {
                "id": 59,
                "type_id": 15,
                "label": "本人数据权限",
                "value": "5",
                "code": "data_scope",
                "sort": 100,
                "status": 1,
                "remark": ""
            }
        ]
    }
  }
})

Mock.mock('/core/captcha', 'get', () => {
  return {
    "code": 200,
    "message": "success",
    "data": {
        "result": 1,
        "uuid": "f0f3da31-95d6-4983-9524-9d6592fe9ee1",
        "image": "data:image\/png;base64,\/9j\/4AAQSkZJRgABAQEAYABgAAD\/\/gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK\/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU\/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU\/8AAEQgAJAB4AwEiAAIRAQMRAf\/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC\/\/EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29\/j5+v\/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC\/\/EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29\/j5+v\/aAAwDAQACEQMRAD8A\/TOsDxbo+sazBbw6Tq\/9jgMTNKse9mXHAH\/6xW\/RTlFSVmEZOD5kec\/8K38S3OBc+Ob5UT5UECFCVHQkhxk465z9TQNF8f8AhnKadqdpr9onKJqORMc8nJ789MtXYeIvElv4Ztori6gvJoHfaz2ls8\/lDGdzBQSB9AevSnaH4n0nxLCZdMv4LwKPnRG\/eRn0dD8yH1DAEdxXP9Xgtm0\/Vm31qTfLKz8rI4e\/+MM3hG0kbxZoV1pskY3mWAo8G3pkuWwOc9zWfefHWa58MXmr6X4av7u0+zSTWt3Gd0UgVSWYsFIAHHIyOvTFc1+3XrP9kfs4a+gbbJdzW9svvmVSf\/HQaYM+A\/2Ih\/yzktfCwz2yzRc\/mWp+zqfz\/gjlni6anKHs9o33Z5X8Ev2ydW0D4aah4p+Jlxc6vY3GqyWenSW0UCTHZGjGNUUJuA38sfbmuw8Pf8FFvhtqtysOo6frejBjjz5rdJIh9Sjls\/8AAfxr5O+BPhOL4k\/Ez4W+ENUUy6RBBNfTWrH5XLSyyMf+BIkQPsor9KPEXwe8EeK9HTS9V8LaVd2SKEjRrVVMYHQKwAK\/ga3Savrc8bC1MRiIJxkklprrd7u+p5r8Vv2vPC3gr4Y23i\/w1PaeLUuL+OwW3guQhRmjd8vwSMBPTvXb3nx08K6B4BtPEuu6tZWAksYruW1jnEjo7IG8sAck5OBwK+TP22fgv4M+Dvwq0GDwxph04XuvCWYmd5MgQyZHzE8ciuZ8JaBpn7WXxS03wxpkyaL4H8P2sTTr5x+037KoDMqsc\/MQcdlHual891axs8U4VJU5aysrJbXe\/nY9++AX7UXjX47eOL2HT\/Btnb+D4JTu1OWdlljTPAx0dz6AYHc+v0\/Xmtp+z34N0nT4LPSbOfR4YFCxi0nPy4\/3t1WrDw34z8PX9tb2eswajoaSLlb0ZnEecuM7ee+Pm9OlZ+0nF+9HTy1\/yPXo0EqfvVby63VvusegUUUV0EBRRRQAUUUUAYPjTxYngzRG1KSxutRAkWMQWabpCT3x6V5w3j34d+L5klvbi48J+IQSTLmWxuoz2DyphXQ\/K3luWQ4XcpxXsteffGfwTL4l8C642h6Lpt\/4pa3xZS3kKZ3jGMuRkcDHWkY1FKza18j5m\/bu1bxBL8OPCeg3V1putWOqaqklrqlnMVnulCNgGEJ5YGZF+dZCDgfKM8V\/2jP2k\/D+tfBpfhv4ahup\/E155GnPZhFYpGoXccozDLFSoQkP1JUAqTg\/D\/8AZD+JXxI8d2d98Rv+JD4e05zJFDbzqWLZztiTLbRkDLN6DrXu3hP9hnwB4X1We\/M2o30zyM6NM6blBPQttzn3G2g8ZU8RWc5RVlLTXex8xW9\/pPwF+O3wm18XTT6Muj29lfXggkRFlCtHOVLKAwAdWJUkc1+kNneQahaw3NrNHcW0yCSOWJgyupGQQR1BrxDxf+x34I8ZWE1pdXOrRwtzEgnRlgPbbuQtx9a8PH7Nv7QXwbilsvh34xj1PQ95MVn56xsi54ysowD\/ALrUzemquEbXJeL7bo2P+Cl0hPg3wTbjkyahMQB3IRR\/7NWb8cP2V7v4KRaT8QfhP59ve6FEn220Vi7TKo+aXHfP8S9+1eZ\/EP8A4WH418I+HtM+JEOoWep6Jqs07Xt\/ZuEkD7QIvMUeWTlDjBOfQ19TaF+05f8AjaVtM0HwpHqN\/EojuYHvRuVypJUxlQRwrHB5wORSMEqeIqTlPRu1u6aO6+AHxs0z45+ArbW7MrDfx4hv7LPzQTAcj6HqD6V6XXx78I\/A7+E\/2gJtU8Mfb\/DS6rvGpeGr60H2V9oJk8qYPkEEEqNhHXnFfYVM9bDznOH7zdfj5hRRRQdIUUUUAFFFFABRRRQAUUUUAFFFFABVaTTbSW6t7l7WF7m33+TM0YLx7\/v7TjIz3x1oooAs0UUUAFFFFABRRRQB\/9k="
    }
  }
})

Mock.mock('/core/login', 'get', () => {
  return {
    "code": 200,
    "message": "success",
    "data": {
        "token_type": "Bearer",
        "expires_in": 7200,
        "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZWJtYW4udGlueXdhbi5jbiIsImF1ZCI6IndlYm1hbi50aW55d2FuLmNuIiwiaWF0IjoxNzQwMDQxMDAxLCJuYmYiOjE3NDAwNDEwMDEsImV4cCI6MTc0MDA0ODIwMSwiZXh0ZW5kIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwidHlwZSI6InBjIn19.ZU0oAwbtbtf5kNZZMdePtSoRq53dFaEHiIH2TvFTdjQ",
        "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZWJtYW4udGlueXdhbi5jbiIsImF1ZCI6IndlYm1hbi50aW55d2FuLmNuIiwiaWF0IjoxNzQwMDQxMDAxLCJuYmYiOjE3NDAwNDEwMDEsImV4cCI6MTc0MDY0NTgwMSwiZXh0ZW5kIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwidHlwZSI6InBjIn19.Al7RvnM9rhV0VhHISQNeC8PrIsls_YeCYDYFiiKJ6q0"
    }
  }
})