<template>
  <span class="filter-item" @click="toggle" :class="{selected:rangeObject.selected}">{{rangeObject.value}}</span>
</template>
<script>
    export default{
        props:["rangeObject","index","catagory"],
        methods: {
            toggle: function() {
                if(this.catagory=="专业层次"){
                    this.$store.commit("reset_major_range",{
                        index:this.index,
                        selected:!this.rangeObject.selected
                    })
                    return;
                }              
                if(this.catagory=="高校层次"){
                     this.$store.commit("reset_school_range",{
                        index:this.index,
                        selected:!this.rangeObject.selected
                    })
                    return;
                }
                 if(this.catagory=="高校地区"){
                     this.$store.commit("reset_school_area",{
                        index:this.index,
                        selected:!this.rangeObject.selected
                    })
                    return;
                }
            }
        }
    }
</script>
<style>

</style>
