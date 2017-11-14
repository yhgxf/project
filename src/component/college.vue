<template >
    <table class="tab">
        <tab-tit v-bind:title="title"></tab-tit>
       
        <tab-tbody v-bind:coll="college"></tab-tbody>
       
    </table>
</template>
<script>
    //引入+按钮
    import btn from "./btn.vue"
    export default{
     props:["title","college"],
     components:{
        "tab-tit":{
           template:'<thead><td v-for="key in title">{{key}}</td></thead> ',
           props:["title"]
         },
        "tab-tbody":{
            template:`
                <tbody>
                    <tr v-for="(key,index) in coll">
                        <td class="on">
                          <btn></btn>
                          {{key[0]}}
                        </td>
                        <td>{{key[1]}}</td>
                        <td>{{key[2]}}</td>
                        <td>{{key[3]}}</td>
                        <td>{{key[4]}}</td>
                        <td>{{key[5]}}</td>
                        <td>{{key[6]}}</td>
                        <td>{{key[7]}}</td>
                         <td>{{key[8]}}</td>
                    </tr>
                </tbody>`,
            props:["coll"],
            data:function(){
                return {
                    item_coll:[]
                }
            },
            created:function(){
                this.item_coll
            },
            components:{
                "btn":btn
            }
        }
       
   }
 }
</script>
<style>
    .tab{
        width:100%;
        height:auto;
        margin-top: 20px;
    }
    .tab thead{
        width:100%;
        display:flex;
        height:auto;
    }
    .tab thead td{
        flex:1;
        text-align: center;
        align-items: center;
        color:#fff;
         font-size:14px;
    }
    .tab tbody{
        width:100%;
        height:auto;
    }
    .tab tbody tr{
        width:100%;
        display:flex;
        height:auto;
        position: relative;
        left: 0;
        top: bottom;
    }
    .tab tbody tr td{
        flex:1;
        font-size:14px;
    }
    .on{
        position:relative;
        color:#0f9941;
    }
   i{
        width: 16px;
        height: 16px;
        background:#0f9941;
        color:#fff;
        text-align:center;
        line-height:16px;
        font-style: normal;
        position: absolute;
        left: 0;
        top:10px;
    }
</style>

