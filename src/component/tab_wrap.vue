<template>
    <table>
        <thead>
            <tr>
                <td v-for="(key,index) in title" :key="index">{{key}}</td>
            </tr>
        </thead>
        <slot></slot>
    </table>
</template>
<script>
    export default{
        props:{
            title:{
                required:true,
                type:Array
            }
        }
    }
</script>
<style scoped>
    thead tr{
        width:100%;
        display:flex;
    }
     thead tr td{
         flex:1;
         display:flex;
         justify-content: center;
         align-items:center;
     }
</style>

