<template>
    <div id="app">
        <div class="resume">
            <div class="left">
                <Brief :data="defaultData.Brief"/>
                <ContextList
                    title="联系方式"
                    title-size="14px"
                    :icon="require('@/assets/title-contact.png')"
                >
                    <ListItemInfo
                        :title="item.value"
                        :image="item.icon"
                        slot="listItem"
                        v-for="item in defaultData.Contact"
                        :key="item.key"
                    />
                </ContextList>
                <ContextList
                    title="社交博客"
                    title-size="14px"
                    :icon="require('@/assets/title-contact.png')"
                >
                    <ListItemInfo
                        :title="item.value"
                        :image="item.icon"
                        slot="listItem"
                        v-for="item in defaultData.Social"
                        :key="item.key"
                    />
                </ContextList>
                <ContextList
                    title="技能"
                    title-size="14px"
                    :icon="require('@/assets/title-contact.png')"
                >
                    <ListItemInfo
                        :title="item.value"
                        :image="item.icon"
                        slot="listItem"
                        v-for="item in defaultData.Skill"
                        :key="item.key"
                    />
                </ContextList>
                <ContextList
                    title="奖项荣誉"
                    title-size="14px"
                    :icon="require('@/assets/title-contact.png')"
                >
                    <ListItemInfo
                        :title="item.value"
                        :image="item.icon"
                        slot="listItem"
                        v-for="item in defaultData.Certificate"
                        :key="item.key"
                    />
                </ContextList>
                <ContextList
                    title="自我评价"
                    title-size="14px"
                    :icon="require('@/assets/title-contact.png')"
                >
                    <ListItemAbout style="padding: 10px 15px;font-size: 14px" slot="listItem" :data="defaultData.AboutMe"/>
                </ContextList>
            </div>
            <div class="right">
                <ContextList title="教育背景">
                    <ListItemEducation
                        slot="listItem"
                        :data="item"
                        v-for="item in defaultData.Education"
                        :key="item.school"
                    />
                </ContextList>
                <ContextList title="工作经历">
                    <ListItemExperience
                        slot="listItem"
                        v-for="item in defaultData.WorkingExperience"
                        :data="item"
                        :key="item.compony"
                    />
                </ContextList>
                <ContextList title="项目经历">
                    <ListItemExperience
                        slot="listItem"
                        v-for="item in defaultData.WorkingExperience"
                        :data="item"
                        :key="item.compony"
                    />
                </ContextList>
            </div>
        </div>
        <Guide/>
        <div class="actions">
            <button @click="saveAsImage">Save as PNG</button>
            <!-- <button @click="saveAsPdf">Save as PDF</button> -->
            <button @click="print">Print</button>
        </div>
        <div class="footer">
            <a href="https://github.com/SheriSzeto/vue-resume" target="_blank">
                <img src="./assets/social-github.png" height="36" width="36" alt>
            </a>
            vue-resume designed by
            <a href="https://github.com/SheriSzeto">sheriszeto</a>
        </div>
    </div>
</template>
<script>
import ContextList from '@/components/context-list'
import ListItemAbout from '@/components/list-item-about'
import ListItemSkill from '@/components/list-item-skill'
import ListItemEducation from '@/components/list-item-education'
import ListItemExperience from '@/components/list-item-experience'
import ListItemInfo from '@/components/list-item-info'
import html2canvas from '@/assets/js/html2canvas.js'
import FileSaver from 'file-saver'
import Brief from '@/components/brief'
import Guide from '@/components/guide'
// import GeneratePDF from '@/utils/generatePDF'
import defaultData from '@/config/data'
export default {
    name: 'app',
    components: {
        ContextList,
        ListItemAbout,
        ListItemSkill,
        ListItemEducation,
        ListItemExperience,
        ListItemInfo,
        Brief,
        Guide
    },
    computed: {
        defaultData () {
            return defaultData
        }
    },
    methods: {
        // saveAsPdf () {
        //     const resume = document.querySelector('.resume')
        //     const pdf = new GeneratePDF(resume)
        //     pdf.generate()
        // },
        saveAsImage () {
            let resume = document.querySelector('.resume')
            html2canvas(resume).then(canvas => {
                canvas.toBlob(blob => {
                    FileSaver.saveAs(blob, 'Resume.png')
                })
            })
        },
        print () {
            window.print()
        }
    }
}
</script>
<style lang="less">
body {
    padding: 0;
    margin: 0;
}

ul {
    padding: 0;
    margin: 0;

    li {
        list-style: none;
    }
}

p {
    margin: 0 0 12px 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .resume {
        margin-top: 40px;
        position: relative;
        width: 790px;
        // height: 1754px;
        border: 1px solid #dad8d7;
        background-color: white;
        overflow: hidden;
        box-sizing: border-box;

        .left {
            width: 240px;
            height: 100%;
            box-sizing: border-box;
            float: left;
            background-color: #fdfefe;
            position: relative;
        }

        .right {
            box-sizing: border-box;
            width: calc(~'100% - 240px');
            float: left;
            padding: 25px 20px;
            border-left: 1px solid #dad8d7;

            p {
                font-size: 14px;
                line-height: 18px;
                color: #555;
                text-align: justify;
            }
        }
    }

    .actions {
        position: absolute;
        top: 40px;
        left: 50%;
        margin-left: 415px;
        display: flex;
        flex-direction: column;
        button {
            padding: 5px 8px;
            border-radius: 4px;
            background-color: white;
            border: 1px solid #dad8d7;
            margin-bottom: 5px;
            cursor: pointer;
            &:hover {
                background-color: #f8f8f8;
            }
        }
    }

    

    .footer {
        line-height: 50px;

        a {
            text-decoration: none;
            color: #4aa74f;

            &:first-child {
                display: block;
                text-align: center;
                line-height: 0;
                margin-top: 15px;
            }
        }
    }
}
@page {
    size: auto;
    margin: 0cm;
    color: #ffffff;
    // -webkit-print-color-adjust: exact;
    // print-color-adjust: exact;
}
@media print {
    html,
    body,
    #app {
        font-size: 0 !important;
        min-height: auto !important;
        height: auto !important;
        // min-width: auto !important;
        // font-family: Microsoft YaHei, tahoma, arial, Hiragino Sans GB;
    }
    * {
        color: #000 !important;
        overflow: hidden !important;
    }
    .resume {
        // position: absolute;
        // top: 0;
        // left: 0;
        // width: 100%;
        margin-top: 0!important;
        // border: none!important;
    }
    .actions, .guide, .footer {
        display: none!important;
    }
}
</style>
