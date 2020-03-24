var app = new Vue({
  el: '#page',
  data: {
    网页名称: '鲲鲲的个人简历',
    姓名: '严伟',
    号码: '15779005309',
    邮箱: '1148199374@qq.com',
    个人网页: 'www.baidu.com',
    地址: '常熟海城花苑11栋',
    职业: '销服人员',
    头像地址: 'images/user.png',
    /** 支持类型有[微博,qq,git,instagram]*/
    联系方式: [
      {
        类型: '微博',
        地址: 'https://weibo.com'
      },
      {
        类型: 'qq',
        地址: 'https://1148199374@qq.com'
      },
      {
        类型: 'git',
        地址: '23423'
      },
      {
        类型: 'instagram',
        地址: '234234'
      }
    ],
    关于我标题: '大家好',
    关于我内容: '我是一名热爱生活热爱工作的阳光男孩',
    /** 个人简历*/
    工作经历: [
      {
        职业名称: '办公助理',
        公司名称: '江苏歌德互娱中心',
        时间: '017.09 - 2018.12',
        介绍: '负责办公室的文秘、信息、机要和保密工作，做好办公室档案收集、整理工作'
      },
      {
        职业名称: '普工',
        公司名称: '江苏盱眙工业园区',
        时间: '2019.03 - 2019.12',
        介绍: '巡检，辅助上料以及机器作业'
      },
      {
        职业名称: '销售后勤',
        公司名称: '保险公司',
        时间: '2018.11 - 2019.03',
        介绍: '报表汇总，业主信息收集与分发'
      },
    ],
    /** 教育经历*/
    教育经历: [
      {
        学段: '初中',
        学校名称: '盱眙第二中学',
        时间: '2007.9 - 2010.7',
        介绍: '好好学习，天天向上'
      },
      {
        学段: '高中',
        学校名称: '新马高中',
        时间: '2010.09 - 2013.07',
        介绍: '好好学习，天天向上'
      },
      {
        学段: '大学',
        学校名称: '江西理工大学',
        时间: '2013.09 - 2017.06',
        介绍: '好好学习，天天向上'
      },
    ],
    /** 我的能力 图标可以打开/fonts/demo.html看看需要什么样的图标*/
    我的优点: [
      {
        名称: '进取务实',
        图标: '学校名称',
        介绍: '敢于主动承担自我的职责'
      },
      {
        名称: '勤奋',
        图标: '学校名称',
        介绍: '善于学习自我感兴趣的知识和事物'
      },
      {
        名称: '能坚持',
        图标: '学校名称',
        介绍: '确定了正确方向，我就能把所有的力气砸向那个方向'
      },
      {
        名称: '有耐心',
        图标: '学校名称',
        介绍: '心态好，善于维系客户关系'
      },
      {
        名称: '目标明确',
        图标: '学校名称',
        介绍: '我觉得我有个好的习惯是目标明确的写在我的记事本中'
      },
      {
        名称: '舍得付出',
        图标: '学校名称',
        介绍: '因为有舍就有得，懂得舍去，放下，付出，会收获更多'
      }
    ],
    /** 我的技能*/
    我的性格: [
      {
        名称: '善良',
        进度: 100,
      },
      {
        名称: '开朗',
        进度: 100
      },
      {
        名称: '乐观',
        进度: 100
      },
      {
        名称: '坦率',
        进度: 90
      },
      {
        名称: '活泼',
        进度: 80
      },
      {
        名称: '毅力',
        进度: 100
      },
      {
        名称: '体贴',
        进度: 100
      },
      {
        名称: '有爱',
        进度: 100
      }
    ],
    /** 我的作品*/
    我的作品: [
      {
        名称: '篮球',
        地址: 'https://www.8kana.com/book/11126.html',
        图片: 'images/cxk.jpg',
        简介: '小说'
      },
      {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      },
      {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }, {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }, {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }, {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }, {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }, {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }
    ]
  },
  mounted () {
    document.title = this.网页名称
  }
})