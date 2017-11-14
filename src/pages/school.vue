<template>
    <div>
         <p class="search"><input type="text" placeholder="请输入要检索的专业名称"><label>检索</label></p>
            <twoSub v-bind:school-subject="school_subject_obj">
            </twoSub>
            
    </div>
</template>
<script>
    import school_subject from "../component/school_subject.vue";
   export default{
       data:function(){
           return {
                school_subject_obj:[]
           }
       },
       components:{
           "twoSub":school_subject
       },
      created:function(){
            let vm=this;
            this.$http.get("src/server/subject.json").then(function(res){
            vm.school_subject_obj=res.data.result.analysisData;
        })
      }
   }
</script>
<style scoped>
    .search{
        width: 30%;
        height:30px;
        border:2px solid #0f9941;
        position: relative;
        margin-top: 10px;
    }
    .search input{
        width: 90%;
        height:26px;
        border:none;
        font-size:12px;
    }
    .search label{
        position: absolute;
        right: 0;
        top: 0;
        background:#0f9941;
        color:#fff;
        height:100%;
        padding:0 15px;
        display: flex;
        justify-content: center center;
        align-items:center;
    }
</style>

