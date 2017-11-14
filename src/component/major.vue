<template>
    <div class="majors">
        <div class="left-title">专业层次:</div>
        <div class="right-select">
                <filter-item v-for="(value,index) in schoolMajor" v-bind:name="value" :key="index" :index="index" :range-object="value" :catagory="'专业层次'"></filter-item>
        </div>
    </div>
</template>

<script>
import filter_item from "./filter-item.vue"
export default {
  props: {
    schoolMajor: {
      required: true,
      type: Array
    }
  },
    components:{
        "filter-item":filter_item
    }
}
</script>
<style scoped>

</style>
