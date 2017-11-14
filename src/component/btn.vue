<template>
    <i v-on:click="tab_alert" v-bind:flag="flag">+</i>
</template>
<script>
    export default{
        data:function(){
            return {
                flag:false
            }
        },
        methods:{
            tab_alert:function(){
               this.flag=!this.flag;
               this.$emit("flag",this.flag);
            //    console.log(this.flag);
            }
        }
    }
</script>
<style scoped>
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

