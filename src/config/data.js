/*
 * @Author: 司徒欣 sheri.situ@wetax.com.cn
 * @Date: 2020-04-04 21:03:08
 * @LastEditors: 司徒欣 sheri.situ@wetax.com.cn
 * @LastEditTime: 2022-09-27 18:59:37
 * @FilePath: /vue-resume/src/config/data.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
    Brief: {
        name: '林巧怡',
        position: '文职',
        location: '广东,阳江',
        sex: '女',
        age: 26,
        degree: '中专'
    },
    Contact: [
        { icon: require('@/assets/contact-phone.png'), key: 'phone', value: '15113538898' },
        { icon: require('@/assets/contact-mail.png'), key: 'mail', value: '244547102@qq.com' },
        { icon: require('@/assets/social-wechat.png'), key: 'wechat', value: 'LqyAINI' }
    ],
    Skill: [
        { icon: require('@/assets/skill-ps.png'), key: 'ps', value: 'ps' },
        { icon: require('@/assets/WPS.png'), key: 'WPS', value: 'office' },
        { icon: require('@/assets/sale.png'), key: 'sale', value: '销售营销' },
        { icon: require('@/assets/print.png'), key: 'print', value: '打印、复印' }
    ],
    Certificate: [
        { icon: require('@/assets/driver.png'), key: 'driver', value: 'C1驾照' }
    ],
    AboutMe: `本人做事稳重，对待工作认真，责任心较强，善于沟通，具有较强的独立学习和工作能力，工作有担当，性格开朗，具有良好的沟通协调能力，执行力强，待人接物有耐心、有亲和力`,
    Education: [
        { school: '阳江市高级技工学校', major: '电子商务', date: '2011.11-2013.3', description: '' }
    ],
    WorkingExperience: [
        {
            company: '飘香粽',
            position: '个体商户',
            date: '2020.08-今',
            description: `
            该店铺主要从事售卖手工粽子行业，我在该店主要负责产品销售，按客户的要求定制节日礼盒，活动营销和跟单处理的工作，主要参与：<br><br>
            1.管理订购客户档案，与客户直接沟通交流，跟进客户的需求订制应节粽子产品及礼盒<br>
            2.参与负责产品的包装设计，定制工作，包括产品拍摄，构图及图片后期制作<br>
            3.参与新口味产品的试吃，定价及口味调查，提出改进产品建议及产品销售介绍，广告宣传的工作<br>
            4.负责产品的微信营销策略定制，朋友圈宣传文案撰写工作
            `
        },
        {
            company: '宏宏照相馆',
            position: '照片修复员',
            date: '2018.1-2020.3',
            description: `
            该企业主要从事各种类证件照拍摄，数码照片冲洗和怀旧照片修复等业务，我任职于照片处理部门，主要参与：<br><br>
            1.负责门店顾客接待，资料记录以及证件照摄影工作<br>
            2.负责证件照，数码照片后期，怀旧照片修复等工作<br>
            3.负责日历，相册排版，设计及印刷工作<br>
            4.参与店内产品如相架，胶卷等的产品销售工作
            `
        }
    ],
    ProjectExperience: [
        {
            company: '端午节活动营销策划',
            position: '',
            date: '',
            description: `
            描述：端午节的粽子礼盒包装和设计，以及节日活动策划，打折促销，朋友圈营销策略定制<br>
            工作内容：<br>
            1.负责产品的保鲜，真空包装的设计<br>
            2.负责礼盒的设计，以及联系淘宝卖家生产包装盒，跟踪质量和进度<br>
            3.负责快递合作方案定制<br>
            4.负责微信，朋友圈宣传节日文案撰写，粽子的宣传图拍摄和后期处理
            `
        },
        {
            company: '照片处理',
            position: '',
            date: '',
            description: `
            描述：对照片进行美化，剪辑及处理<br>
            工作内容：<br>
            1.利用photoshop处理图像，调整图像过暗过亮，对比度等问题<br>
            2.新年日历的照片排版，客户私人定制相册的排版工作<br>
            `
        }
    ]
}
