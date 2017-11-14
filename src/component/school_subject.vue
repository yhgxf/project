<template>
    <div>
         <h5>选考科目分析</h5>
         <p>科目比例:要求所选选考科目的专业总数/条件范围内专业总数,以专业为例:经济统计学专业历史所占比例为66.7%,意为选考历史,66.7%的经济统计学专业均可报名</p>
    <table>
        <thead>
                <td>选考科目</td>
                <td>高校数</td>
                <td>专业类数</td>
                <td>科目比例</td>
                <td>选考科目</td>
                <td>高校数</td>
                <td>专业类数</td>
                <td>科目比例</td>
           </thead>
        <tab-item v-for="(key,index) in schoolSubject" v-bind:sub="key.subject" v-bind:collegeCount="key.collegesCount" v-bind:majorCount="key.majorCount" v-bind:rate="key.rate" :key="index">
        </tab-item>
    </table>
    </div>
</template>
<script>
export default{
     props: {
       schoolSubject: {
        required: true,
        type: Array
        }
    },
    components:{
        "tab-item":{
           template: `
           <tbody>
                <tr>
                    <td>{{sub}}</td>
                    <td>{{collegeCount}}</td>
                    <td>{{majorCount}}</td>
                    <td>{{rate}}</td>
                </tr>
          
           </tbody>
          `,
          props:["sub","collegeCount","majorCount","rate"]
      }
   }
 }
</script>
<style>
    h5{
        line-height: 30px;
    }
    p{
        color:red;
        font-size:14px;
        line-height: 30px;
    }
    table{
        width:100%;
        border:1px solid #ccc;
        border-collapse: collapse;
    }
    table td{
        /* height:40px; */
        text-align:center;
        line-height:40px;
        border:1px solid #ccc;
        font-size: 14px;
    }
    tbody{
        width:50%;
        float:left;
    }
    tbody tr{
        display:flex;
    }
    tbody tr td{
        flex:1;
        display: flex;
        justify-content:center;
        align-items:center;
        color:#333;
    }
    thead{
        display:flex;
        background:#0f9941;
    }
    thead td{
        flex:1;
        border:none;
        color:#fff;
    }
</style>

