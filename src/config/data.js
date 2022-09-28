export default {
    Brief: {
        name: '司徒欣',
        position: '求职目标：前端开发',
        location: '常驻地：广东广州',
        sex: '女',
        age: '1992.09',
        degree: '本科'
    },
    Contact: [
        { icon: require('@/assets/contact-phone.png'), key: 'phone', value: '135****0252' },
        { icon: require('@/assets/contact-mail.png'), key: 'mail', value: 'sheri.situ@163.com' },
        { icon: require('@/assets/social-wechat.png'), key: 'wechat', value: '135****0252' }
    ],
    Social: [
        { icon: require('@/assets/social-github.png'), key: 'github', value: 'https://github.com/SheriSzeto' },
        { icon: require('@/assets/social-dribbble.png'), key: 'szeto.club', value: 'szeto.club' }
    ],
    Skill: [
        { icon: require('@/assets/mini.png'), key: 'mini', value: '微信小程序' },
        { icon: require('@/assets/Nodejs.png'), key: 'node', value: 'Nodejs' },
        { icon: require('@/assets/Vue.png'), key: 'vue', value: 'Vue' },
        { icon: require('@/assets/React.png'), key: 'react', value: 'React' }
    ],
    Certificate: [
        { icon: require('@/assets/cet4.png'), key: 'mini', value: '大学英语CET-4' },
        { icon: require('@/assets/prize.png'), key: 'node', value: '大学英语奥林匹克竞赛三等奖' },
        { icon: require('@/assets/cert.png'), key: 'vue', value: 'web前端开发高级专项技术证书' }
    ],
    AboutMe: `
        本人做事稳重，对待工作认真，责任心较强，待人真诚，善于沟通，时刻保持学习，积极拥抱变化，喜欢前端开发，乐于学习和尝试新技术，具有较强的执行力和团队合作意识，能够很快地适应工作环境
    `,
    Education: [
        { school: '广东技术师范大学', major: '软件工程', date: '2011.9-2015.6', description: '' }
    ],
    WorkingExperience: [
        {
            company: '高灯科技',
            position: '前端开发工程师',
            date: '2018.3-今',
            description: `该企业是由腾讯集团全资投资，主要从事交通ETC和发票财税类业务，我任职于交通事业部的研发部，主要参与：<br>
            1、微信小程序开发，包括“ETC助手”，发票类“票根”，及“ETC会员”小程序，主要负责ETC线上申办，电子发票以及提供车主加油违章查询等业务组件开发；<br>
            2、百度小程序“ETC助手”发票栏目开发；<br>
            3、公司内部统一授权平台及加油商户中后台系统开发。<br>`
        },
        {
            company: '航天精一（广东）信息有限公司',
            position: '前端开发工程师',
            date: '2016.6-2017.6',
            description: `
                该企业是从事政府公安类地理信息系统服务行业，我任职于其研发事业部，主要负责：<br>
                1、优化前端架构标准，定期维护和升级前端框架，完成业务组件封装；<br>
                2、与UI合作，开发兼容各个系统的基础布局及组件库；<br>
                3、结合WEB GIS实现地图上的交互，轨迹播放组件开发和Echarts图表开发。<br>`
        },
        {
            company: '广州超班软件有限公司',
            position: '实习兼前端开发',
            date: '2014.10-2016.5',
            description: `
                1、负责产品PC端及移动端开发，维护平台正常运作和性能优化的工作；<br>
                2、负责公司官网开发及规划，兼容多端浏览器；<br>
                3、配合UI设计，实现h5的动态交互，提高用户体验；<br>
                4、网页的兼容测试，功能测试。<br>`
        }
    ],
    ProjectExperience: [
        {
            company: '名称：ETC助手',
            position: '',
            date: '',
            description: `
                项目描述：该项目是全国首个在交通路网中心指导下，实现ETC线上申办-微信支付-通行免密扣款-下发行程单及电子发票的微信小程序。<br>
                项目职责：<br>1、使用wepy小程序框架+原生API能力，构建基础框架，实现页面布局<br>
                2、利用cdn和腾讯云上传和配置图片，利用redux实现状态管理<br>
                3、搭建前端业务和UI公共组件`
        },
        {
            company: '名称：加油商户系统',
            position: '',
            date: '',
            description: `
                项目描述：该项目主要提供油站合作商户交接班，处理订单和对账使用，主要有订单列表，订单详情，交接班，表格导出功能。超级管理员还可以添加油站，配置油价，分配账号，角色管理等功能。<br>
                项目职责：<br>1、基于react框架ant design pro创建基础目录，使用typescript构建页面组件<br>
                2、二次封装表格，表单等组件<br>
                3、利用dva进行状态管理<br>
                4、利用umi配置网页路由<br>
                5、利用封装fetch进行mock.js数据请求及交互<br>
                6、使用jest对部分组件进行单元测试`
        },
        {
            company: '名称：CRM系统',
            position: '',
            date: '',
            description: `
                项目描述：辅助销售建立客户信息管理，收集和全方位记录合同，费用到回款过程的系统<br>
                项目职责：<br>1、基于Vue 2.x+gulp搭建基础架构，配置多环境自动打包<br>
                2、利用vuex进行状态管理和页面传参<br>
                3、利用jsonp实现跨域，接入第三方群呼功能<br>
                4、负责整个系统的版本迭代，日常维护和开发`
        },
        {
            company: '名称：信用卡申请（移动端）',
            position: '',
            date: '',
            description: `
                项目描述：该项目是一个线上申请信用卡的h5<br>
                项目职责：<br>1、负责项目构建，基于Vue+webpack+flexible搭建基础框架<br>
                2、利用localStorage存储数据<br>
                3、利用Nginx实现项目部署`
        }
    ]
}
