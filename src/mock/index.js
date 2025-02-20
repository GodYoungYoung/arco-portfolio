// src/mock/index.js
import Mock from 'mockjs';
import './user'

// 模拟用户数据
const users = Mock.mock({
  'data|10': [
    {
      'id|+1': 1, // 自增 ID
      'name': '@cname', // 随机中文名字
      'age|18-30': 1, // 随机年龄，范围 18-30
      'email': '@email' // 随机邮箱
    }
  ]
});

// 模拟商品数据
const goods = Mock.mock({
  'data|6': [
    {
      'shopId|+1': 1, // 自增商品 ID
      'shopMsg': '@ctitle(10)', // 随机商品信息，长度为 10 个汉字
      'shopName': '@cname', // 随机商品名
      'shopTel': /^1(5|3|7|8)[0-9]{9}$/, // 随机电话号码
      'shopAddress': '@county(true)', // 随机地址
      'shopStar|1-5': '★', // 随机星级，1-5
      'salesVolume|30-1000': 30, // 随机销量，范围 30-1000
      'shopLogo': '@Image("100x40","#c33", "#ffffff","小北鼻")', // 随机图片
      'food|2': [
        {
          'foodName': '@cname', // 随机食品名
          'foodPic': '@Image("100x40","#c33", "#ffffff","小可爱")', // 随机图片
          'foodPrice|1-100': 20, // 随机价格，范围 1-100
          'aname|2': [
            {
              'aname': '@cname', // 随机名字
              'aprice|30-60': 20 // 随机价格，范围 30-60
            }
          ]
        }
      ]
    }
  ]
});

// 拦截请求
Mock.mock('/api/users', 'get', () => {
  return {
    code: 200,
    message: 'success',
    data: users.data
  };
});

Mock.mock('/goods/list', 'get', () => {
  return {
    code: 200,
    message: 'success',
    data: goods.data
  };
});