<template>
    <div class="school">
        <div class="left-title">高校地区:</div>
        <div class="right-select">
            <filter-item v-for="(value,index) in schollAreaList" v-bind:name="value" :catagory="'高校地区'" :key="index" :index="index" :range-object="value"></filter-item>
        </div>
    </div>
</template>

<script>
import filter_item from "./filter-item.vue"
export default {
  props: {
    schollAreaList: {
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
