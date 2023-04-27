
const tokens = {
  admin: {
    token: 'admin-token'
  },
  user: {
    token: 'user-token'
  }
}

const users = {
  0: {
    roles: ['admin'],
    name: 'Super Admin',
    menus: [
      {
        id: 'bj',
        name: '北京中心',
        children: [{
          id: 'bj-xmjsyc',
          name: '项目建设一处',
        }, {
          id: 'bj-xmjsec',
          name: '项目建设二处',
        }],
      },
      {
        id: 'hf',
        name: '合肥中心',
        children: [{
          id: 'hf-xmjsyc',
          name: '项目建设一处',
        }, {
          id: 'hf-xmjssc',
          name: '项目建设三处',
        }],
      },
      {
        id: 'sz',
        name: '苏州中心',
        children: [{
          id: 'sz-xmjsec',
          name: '项目建设二处',
        }, {
          id: 'sz-xmjssc',
          name: '项目建设三处',
        }],
      },
      {
        id: 'cd',
        name: '成都中心',
        children: [{
          id: 'cd-xmjsyc',
          name: '项目建设一处',
        }, {
          id: 'cd-xmjsec',
          name: '项目建设二处',
        }],
      },
      {
        id: 'xa',
        name: '西安中心',
        children: [{
          id: 'xa-xmjsyc',
          name: '项目建设一处',
        }, {
          id: 'xa-xmjsec',
          name: '项目建设二处',
        }],
      }
    ]
  },
  // 'user-token': {
  //   roles: ['user'],
  //   introduction: 'I am an user',
  //   permissions: [],
  //   name: 'Normal Editor',
  //   menus: [
  //     {
  //       id: 'bj',
  //       name: '北京中心',
  //       nameId: 'bj',
  //       children: [{
  //         id: 'bj-01',
  //         nameId: 'bj-01',
  //         name: '项目建设一处',
  //       }, {
  //         id: 'bj-02',
  //         nameId: 'bj-02',
  //         name: '项目建设二处',
  //       }],
  //     },
  //     {
  //       id: 'hf',
  //       name: '合肥中心',
  //       nameId: 'hf',
  //       children: [{
  //         id: 'hf-01',
  //         nameId: 'hf-01',
  //         name: '项目建设一处',
  //       }, {
  //         id: 'hf-02',
  //         nameId: 'hf-02',
  //         name: '项目建设二处',
  //       }],
  //     },
  //     {
  //       id: 'sz',
  //       name: '苏州中心',
  //       nameId: 'sz',
  //       children: [{
  //         id: 'sz-01',
  //         nameId: 'sz-01',
  //         name: '项目建设一处',
  //       }, {
  //         id: 'sz-02',
  //         nameId: 'sz-02',
  //         name: '项目建设二处',
  //       }],
  //     },
  //   ]
  // }
}

module.exports = [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]
      console.log(config);
      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 200,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/user/getUserInfo',
    type: 'post',
    response: config => {
      const { token } = config.body
      const info = users[0]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 200,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/resetPass',
    type: 'post',
    response: _ => {
      return {
        code: 200,
        data: 'success'
      }
    }
  }
]
