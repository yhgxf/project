<template>
     <div class="wrap">
        <div class="sel">
            <div class="left-title">已选条件</div>
            <div class="right-select">
                <!-- <p class="selected-item" v-if="selected_major_item!='不限'">{{selected_major_item}}<span class="close" @click="closeMajor">X</span></p>
                <p class="selected-item" v-if="selected_range_item!='不限'">{{selected_range_item}}<span class="close" @click="closeRange">X</span></p>
                <p class="selected-item" v-if="selected_area_item!='不限'">{{selected_area_item}}<span class="close" @click="closeArea">X</span></p> -->

                 <p class="selected-item" v-if="selected_major_item!='不限'">{{selected_major_item}}<span class="close" @click="clear_major">X</span></p>
                <p class="selected-item" v-if="selected_range_item!='不限'">{{selected_range_item}}<span class="close" @click="clear_range">X</span></p>
                <p class="selected-item" v-if="selected_area_item!='不限'">{{selected_area_item}}<span class="close" @click="clear_area">X</span></p>
            </div>
        </div>
        <div class="contain-box">
            <school-major v-bind:school-major="$store.state.major_range_obj"></school-major>
            <school-range v-bind:scholl-range-list="$store.state.school_range_obj">
            </school-range>
            <school-area v-bind:scholl-area-list="$store.state.school_area_obj">
            </school-area>
        </div>
        <div class="subject-box">
            <school-subject v-bind:school-subject="school_subject_obj">
            </school-subject>
        </div>
       <div class="college">
         <table-wrap v-bind:title="title">
           <table-row v-for="(key,index) in college_obj" v-bind:tab-row="key" :key="index"></table-row>
         </table-wrap>
       </div>
    </div>
</template>
<script>
import major from "../component/major.vue";
import school_range from "../component/school_range.vue";
import school_area from "../component/school_area.vue";
import axios from "axios";
import Vue from "vue";
import {mapMutations} from "vuex";
import school_subject from "../component/school_subject.vue";
// import college from "../component/college.vue";
import tab_row from "../component/tab_row.vue";
import tab_wrap from "../component/tab_wrap.vue"
let query = {
    install: function(v) {
        v.prototype.$http = axios;
    }
}
Vue.use(query);


export default {
  data: function() {
    return {
      // selected_major_item:false,
      // selected_range_item:
      // selected_area_item: false
      //  major_range_obj: [],
        // school_range_obj: [],
        // school_area_obj: []
        school_data:[],
        school_subject_obj:[],
        title:[],
        college_obj:[]
    };
  },
  computed:{
    selected_major_item:function(){
        return this.$store.getters.selected_major_range;
    },
    selected_range_item:function(){
        return this.$store.getters. selected_school_range;
    },
    selected_area_item: function(){
        return this.$store.getters. selected_school_area;
    }
  },
  created: function() {
    let vm=this;
    this.$http.get("src/server/school_range.json").then(function(res) {
          let range_data= res.data.list.map((value, index) => {
              return index == 0
                ? {
                    value: value,
                    selected: true 
                  }
                : {
                    value: value,
                    selected: false
                  };
          }); 
           vm.$store.commit("update_school_range",range_data)
    })
    this.$http.get("src/server/school_area.json").then(function(res){
          let school_area=res.data.list.map((value, index) => {
                return index == 0
                  ? {
                      value: value,
                      selected: true
                    }
                  : {
                      value: value,
                      selected: false
                    };
          });
           vm.$store.commit("update_school_area",school_area)
    })
     this.$http.get("src/server/major_range.json").then(function(res){
        let school_major=res.data.list.map((value, index) => {
          return index == 0
            ? {
                value: value,
                selected: true
              }
            : {
                value: value,
                selected: false
              };
         });
         vm.$store.commit("update_major_range",school_major)
     })
     this.$http.get("src/server/subject.json").then(function(res){
       vm.school_data=res.data;
       vm.school_subject_obj=res.data.result.analysisData;
       vm.title=res.data.result.title;
       vm.college_obj=res.data.result.rows;
     })
  },
  components: {
    "school-major": major,
    "school-range": school_range,
    "school-area": school_area,
    "school-subject":school_subject,
    "table-wrap":tab_wrap,
    "table-row":tab_row,
  },
  // methods: {
  //   closeMajor: function() {
  //     this.$store.commit("clear_major");
  //   },
  //   closeRange: function() {
  //      this.$store.commit("clear_range");
  //   },
  //   closeArea: function() {
  //      this.$store.commit("clear_area");
  //   }
  // },
  methods:Object.assign({},mapMutations(["clear_major","clear_range","clear_area"]))
};
</script> 
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.wrap {
  width: 100%;
  height: auto;
  margin-top: 3px;
}

.sel {
  display: flex;
  height: 40px;
  margin-top: 20px;
}
.sel .close {
  color: red;
  cursor: pointer;
  margin-left: 5px;
  padding-right: 2px;
}

.selected-item {
  display: inline-block;
  border: 1px solid #ccc;
}

.contain-box {
  width: 100%;
  height: auto;
  line-height: 60px;
  border: 1px solid #ccc;
}

.contain-box .major,
.contain-box .school,
.contain-box .area {
  height: auto;
  display: flex;
}
.majors{
    display:flex;
}
.contain-box .filter-item {
  line-height: 50px;
  color: #333;
  cursor: pointer;
}
.filter-item{
    padding:5px 8px;
    margin-right: 5px;
}
.contain-box .filter-item:hover {
  background: #0f9941;
  color: #fff;
}

.contain-box .selected {
  background: #0f9941;
  color: #fff;
}
</style>

