const Mock = require('mockjs')
// 搜索用户接口
const data1 = Mock.mock({
  list:{
    id:'@id',
    name: '丁伟强',
    username:'dingweiqiang',
    center:'北京中心',
    depart:'项目建设一处',
    password:'123457',
    authList:{
      0:["bj-01"],
      1:[],
      2:[],
      3:[],
      4:["xa-01","xa-02"]
    }
  }
}) 

// 新增用户
// const data2 = Mock.mock({
//   list:
// })

module.exports = [
  // {
  //   url: '/search/user',
  //   type: 'post',
  //   response: config => {
  //     return {
  //       code: 200,
  //       data: {
  //         list: data1.list
  //       }
  //     }
  //   }
  // },
  // {
  //   url: '/add/user',
  //   type: 'post',
  //   response: config => {
  //     return {
  //       code: 200
  //     }
  //   }
  // },
  // {
  //   url: '/delete/user',
  //   type: 'post',
  //   response: config => {
  //     return {
  //       code: 200
  //     }
  //   }
  // },
  // {
  //   url: '/update/user',
  //   type: 'post',
  //   response: config => {
  //     return {
  //       code: 200
  //     }
  //   }
  // },
  // {
  //   url: '/change/admin',
  //   type: 'post',
  //   response: config => {
  //     return {
  //       code: 200
  //     }
  //   }
  // },
  // {
  //   url: '/reset/password',
  //   type: 'post',
  //   response: config => {
  //     return {
  //       code: 200
  //     }
  //   }
  // }
]
