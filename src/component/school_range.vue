<template>
    <div class="school">
        <div class="left-title">高校层次:</div>
        <div class="right-select">
            <filter-item v-for="(value,index) in schollRangeList" v-bind:name="value" :key="index" :index="index" :range-object="value" :catagory="'高校层次'"></filter-item>
        </div>
    </div>
</template>

<script>
import filter_item from "./filter-item.vue"
export default {
    props: {
        schollRangeList: {
        required: true,
        type: Array
        }
    },
    components:{
        "filter-item":filter_item
    }
};
</script>
<style scoped>

</style>
