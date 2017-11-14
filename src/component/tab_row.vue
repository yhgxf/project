<template>
    <tbody>
        <tr>
            <td v-for="(key,index) in item_row" :key="index"><span v-if="index==0" class="btn"  v-on:click="tab_show">+</span>{{key}}</td>
        </tr>
        <tr>
            <td colspan="8">
                <table class="inner" v-if="flag">
                    <tr v-for="(key,index) in item_table" :key="index">
                        <td class="on">{{key.province}}</td>
                        <td>{{key.collegeName}}</td>
                        <td class="big">{{key.majorName}}</td>
                        <td class="big">{{key.remark.join(",")}}</td>
                        <td>{{key.subjectRangeNames.join(",")}}</td>
                    </tr>
                </table>
            </td>
        </tr>
    </tbody>
</template>
<script>
    export default{
        props:{
            "tabRow":{
                required:true,
                type:Array
            }
        },
        data:function(){
            return {
                 item_row:[],
                 item_table:[],
                 flag:false
            }
        },
        methods:{
            "tab_show":function(){
                this.flag=!this.flag;
                console.log(0);
            }
        },
        created:function(){
            let len=this.tabRow.length;
            this.item_row=this.tabRow.slice(0,len-1);
            this.item_table=this.tabRow.slice(len-1)[0];
            console.log(this.item_row)
            console.log(this.item_table)
        }
    }
</script>
<style>
        .college{
        width:100%;
        height:auto;
        margin-top:20px;
    }
    .college thead{
        width:100%;
        display:flex;
        height:auto;
    }
    .college thead td{
        flex:1;
        text-align: center;
        align-items: center;
        color:#fff;
         font-size:14px;
    }
    .college tbody{
        width:100%;
        height:auto;
    }
    .college tbody tr{
        width:100%;
        display:flex;
        height:auto;
        position: relative;
        left: 0;
        top: bottom;
    }
    .college tbody tr td{
        font-size:14px;
        position: relative;
    }
    .college tbody tr td:nth-child(1){
        color:#0f9941;
    }
     .inner{
        background:#eee;
    }
    .college tr td span.btn{
        width:15px;
        height:15px;
        display:inline-block;
        background:#0f9941;
        color:#fff;
        text-align:center;
        line-height: 15px;
        position: absolute;
        left: 0;
        top: 10px;
    }
    .college .inner tr td.on{
        color:#333;
    }
    .college .inner tr td.big{
        flex:3;
    }
</style>

