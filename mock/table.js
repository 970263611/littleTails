const Mock = require('mockjs')

// 右侧评分升降列表
const data = Mock.mock({
  'list|30': [{
    id: '@id',
    name: '@cname',
    'status|1': ['0', '1', '2'],
    'depart|1': ['项目建设一处', '项目建设二处', '项目建设五处'],
    'score|-20-20': 20
  }]
})
//风险预警
const risk = Mock.mock({
  'list|10': [{
    id: '@id',
    name: '@cname',
    'status|1': ['0', '1', '2'],
    'depart|1': ['项目建设一处', '项目建设二处', '项目建设五处'],
    'content|1': ['考勤异常', '违纪违规', '征信异常', '绩效异常', '工作态度异常']
  }]
})
//人员增减动态变化图
const list01 = Mock.mock({
  'list': [{
    type: '新增',
    'datas|6': ['@natural(1, 100)'],
    'time': ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    type: '减员',
    'datas|6': ['@natural(-100, -1)'],
    'time': ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  }]
})

// 处室人员列表
const depart = Mock.mock({
  name:'项目建设一处',
  total:'99',
  upnum:'44',
  downnum:'22',
  add:'32',
  remove:'23',
  personA:['丁伟强','张小花'],
  personC:['王小虎'],
  pagenum:1,
  pagetotal:100,
  'list|9': [{
    'type|1' : ['0','1','2'],
    name: '@cname',
    'gender|1':['男', '女'],
    'age|20-60': 20,
    'education|1': ['本科','硕士研究生','博士研究生'],
    'station|1':['后台开发','前端开发','项目经理','UI设计','产品经理'],
    'joinTime|1':['2020年8月3日','2021年2月4日','2022年6月1日','2018年10月25日','2021年7月9日','2022年5月9日'],
    'source|1':['校招','社招'],
    'scoreChange|-20-20':20
  }]
})

//首页主图
const select = Mock.mock({
  'list': [
    {
      list: [
        { type: '1', id: '1', name: '30岁以下', num: 2506*0.59, percent: '59', show: true },
        { type: '1', id: '2', name: '31-35岁', num: 2506*0.21, percent: '21', show: true },
        { type: '1', id: '3', name: '36-40岁', num: 2506*0.09, percent: '9', show: true },
        { type: '1', id: '4', name: '41-40岁', num:100, percent: '7', show: true },
        { type: '1', id: '5', name: '51岁以上', num:26, percent: '4', show: true },
      ],
      name: '年龄',
      class: 'age'
    },
    {
      list: [
        { type: '2', id: '11', name: '3年以下', num: 2506*0.01*75, percent: '75', show: true },
        { type: '2', id: '21', name: '3-5年', num: 2506*0.01*19, percent: '19', show: true },
        { type: '2', id: '31', name: '5-10年', num: 125, percent: '5', show: true },
        { type: '2', id: '41', name: '10年以上', num: 26, percent: '1', show: true },
      ],
      name: '总行工作年限',
      class: 'work_time'
    },
    {
      list: [
        { type: '3', id: '111', name: '校园招聘', num: 2506*0.01*40, percent: '40', show: true },
        { type: '3', id: '211', name: '社会招聘', num: 2506*0.01*59, percent: '59', show: true },
        { type: '3', id: '311', name: '行内调转', num: 26, percent: '1', show: true },
      ],
      name: '招聘来源',
      class: 'source'

    },
    {
      list: [
        { type: '4', id: '1111', name: '本科学历', num: 2506*0.01*30, percent: '30', show: true },
        { type: '4', id: '2111', name: '硕士研究生', num: 2506*0.01*69, percent: '69', show: true },
        { type: '4', id: '3111', name: '博士研究生', num: 26, percent: '1', show: true },
      ],
      name: '学历',
      class: 'education'
    }
  ],
})

//云图
const cloud = Mock.mock({
  'list': [{
    name: '丁伟强',
    data: [{ name: '自研人员', 'value|1-300': 500 },
    { name: '技术经理', 'value|1-300': 25 },
    { name: '后台开发岗', 'value|1-300': 3 },
    { name: '青年员工', 'value|1-300': 43 },
    { name: '参赛达人', 'value|1-300': 53 },
    { name: '执行力高', 'value|1-300': 63 },
    { name: '忠诚员工', 'value|1-300': 73 },
    { name: '家有儿女', 'value|1-300': 8 },
    { name: '绩优人员', 'value|1-300': 9 },
    { name: '后台研发', 'value|1-300': 15 },
    { name: 'Java工程师', 'value|1-300': 33 },
    { name: '全栈工程师', 'value|1-300': 22 },
    { name: '自研人员', 'value|1-300': 14 }],
  }, {
    name: '王小虎',
    data: [{ name: '自研人员', 'value|1-300': 500 },
    { name: '技术经理', 'value|1-300': 25 },
    { name: '后台开发岗', 'value|1-300': 3 },
    { name: '青年员工', 'value|1-300': 43 },
    { name: '参赛达人', 'value|1-300': 53 },
    { name: '执行力高', 'value|1-300': 63 },
    { name: '忠诚员工', 'value|1-300': 73 },
    { name: '家有儿女', 'value|1-300': 8 },
    { name: '绩优人员', 'value|1-300': 9 },
    { name: '后台研发', 'value|1-300': 15 },
    { name: 'Java工程师', 'value|1-300': 33 },
    { name: '全栈工程师', 'value|1-300': 22 },
    { name: '自研人员', 'value|1-300': 14 }],
  },{
    name: '张小花',
    data: [{ name: '自研人员', 'value|1-300': 500 },
    { name: '技术经理', 'value|1-300': 25 },
    { name: '后台开发岗', 'value|1-300': 3 },
    { name: '青年员工', 'value|1-300': 43 },
    { name: '参赛达人', 'value|1-300': 53 },
    { name: '执行力高', 'value|1-300': 63 },
    { name: '忠诚员工', 'value|1-300': 73 },
    { name: '家有儿女', 'value|1-300': 8 },
    { name: '绩优人员', 'value|1-300': 9 },
    { name: '后台研发', 'value|1-300': 15 },
    { name: 'Java工程师', 'value|1-300': 33 },
    { name: '全栈工程师', 'value|1-300': 22 },
    { name: '自研人员', 'value|1-300': 14 }],
  }]
})

//获取个人基本信息
const userDetails = Mock.mock({
  'list': [
    {
      name: '丁伟强',
      // avter:require("@/assets/image/touxiang.jpg"),
      depart: '项目建设一处',
      project: '企业消息总线',
      duty: '后台开发岗',
      joinDate: '2020年08月03日',
      timeWork: '12.5小时',
      guideList: [
        { id: 1, year: "2022", result: 0 },
        { id: 2, year: "2021", result: 1 },
        { id: 3, year: "2020", result: 2 },
      ],
      personalList: [
        { id: "12", type: "证书", num: '2', details: "银行从业证书、中国经济师" },
        { id: "13", type: "专利", num: '0', details: "" },
        { id: "15", type: "获奖", num: '1', details: "2021研发达人奖" },
        { id: "16", type: "违纪", num: '0', details: "" },
      ],
      tip:{
        status:2 , // 0 危险  1一般 2良好
        content:'暂无预警信息',
      }
    },
    {
      name: '王小虎',
      // avter:require("@/assets/image/icon-user.png"),
      depart: '项目建设二处',
      project: '贵金属业务',
      duty: '产品经理',
      joinDate: '2022年05月03日',
      timeWork: '11.5小时',
      guideList: [
        { id: 1, year: "2022", result: 2 },
        { id: 2, year: "2021", result: 1 },
        { id: 3, year: "2020", result: 0 },
      ],
      personalList: [
        { id: "12", type: "证书", num: '1', details: "银行从业证书" },
        { id: "13", type: "专利", num: '0', details: "" },
        { id: "15", type: "获奖", num: '0', details: "" },
        { id: "16", type: "违纪", num: '1', details: "工作态度异常" },
      ],
      tip:{
        status:0 , // 0 危险  1一般 2良好
        content:'工作态度异常',
      }
    },
    {
      name: '张小花',
      // avter:require("@/assets/image/icon-getUserInfouser.png"),
      depart: '项目建设二处',
      project: '贵金属业务',
      duty: '产品经理',
      joinDate: '2022年05月03日',
      timeWork: '11.5小时',
      guideList: [
        { id: 1, year: "2022", result: 2 },
        { id: 2, year: "2021", result: 1 },
        { id: 3, year: "2020", result: 0 },
      ],
      personalList: [
        { id: "12", type: "证书", num: '1', details: "银行从业证书" },
        { id: "13", type: "专利", num: '0', details: "" },
        { id: "15", type: "获奖", num: '0', details: "" },
        { id: "16", type: "违纪", num: '1', details: "工作态度异常" },
      ],
      tip:{
        status:1 , // 0 危险  1一般 2良好
        content:'工作态度一般',
      }
    },
  ]
})

// 个人历史分值数据
const history = Mock.mock({
  list: [
    { time: '2020年9月', value1: 90, value2: 88, value3: 67, value4: 86 },
    { time: '2021年6月', value1: 88, value2: 55, value3: 87, value4: 77 },
    { time: '2021年9月', value1: 66, value2: 67, value3: 92, value4: 90 },
    { time: '2022年6月', value1: 77, value2: 75, value3: 83, value4: 80 },
  ]
})

// 个人轨迹书
const steps = Mock.mock({
  list: [{
    name: '丁伟强',
    data: [{ time: '2016-7-8', value: '加入中心' },
    { time: '2019-4-30', value: '职级晋升（9->10）' },
    { time: '2020-10-9', value: '岗位异动：软件开发岗->项目管理岗' },
    { time: '2021-3-31', value: '职级晋升（10->11）' },
    { time: '2022-10-30', value: '职务变动：员工->组长' }]
  },
  {
    name: '王小虎',
    data: [{ time: '2016-7-8', value: '加入中心' },
    { time: '2019-4-30', value: '职级晋升（9->10）' },
    { time: '2020-10-9', value: '岗位异动：软件开发岗->项目管理岗' },
    { time: '2021-3-31', value: '职级晋升（10->11）' },
    ]
  },
  {
    name: '张小花',
    data: [{ time: '2016-7-8', value: '加入中心' },
    { time: '2019-4-30', value: '职级晋升（9->10）' },
    { time: '2020-10-9', value: '岗位异动：软件开发岗->项目管理岗' },
    { time: '2021-3-31', value: '职级晋升（10->11）' },
    ]
  }]
})


module.exports = [
  {
    url: '/list/score',
    type: 'post',
    response: config => {
      const list = data.list
      return {
        code: 200,
        data: {
          total: list.length,
          list: list
        }
      }
    }
  },
  {
    url: '/list/risk',
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: {
          total: risk.list.length,
          list: risk.list
        }
      }
    }
  },
  // 处室人员列表
  {
    url: '/list/depart',
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: {
          list: depart,
          total:9,
        }
      }
    }
  },
  {
    url: '/list/select',
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: {
          list: select.list,
          total: 2506,
        }
      }
    }
  },

  {
    url: '/list/cloud',
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: {
          list: cloud.list,
        }
      }
    }
  },
  //人员增减echarts图
  {
    url: '/list/upAndDown',
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: {
          list: list01.list,
        }
      }
    }
  },
  // 个人基本信息
  {
    url: '/list/userDetails',
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: {
          list: userDetails.list,
        }
      }
    }
  },
  //个人历史分值
  {
    url: '/list/history',
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: {
          list: history.list,
        }
      }
    }
  },
  //个人轨迹
  {
    url: '/list/steps',
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: {
          list: steps.list,
        }
      }
    }
  }
]



// module.exports = [
//   {
//     url: '/risk/list',
//     type: 'post',
//     response: config => {
//       const list = risk.list
//       return {
//         code: 200,
//         data: {
//           total: list.length,
//           list: list
//         }
//       }
//     }
//   }
// ]