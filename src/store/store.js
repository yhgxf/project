import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        major_range_obj: [],
        school_range_obj: [],
        school_area_obj: []
    },
    mutations: {
        update_school_range: function(state, list) {
            state.school_range_obj = list;
        },
        update_school_area: function(state, list) {
            state.school_area_obj = list;
        },
        update_major_range: function(state, list) {
            state.major_range_obj = list;
        },
        //单选专业层次
        reset_major_range: function(state, item) {
            console.log(item);
            let arr;
            arr = state.major_range_obj.map(function(value, index) {
                value.selected = false;
                if (item.index == index) {
                    value.selected = item.selected;
                }
                return value;
            })
            let selected_none = true;
            arr.forEach(function(val, index) {
                if (val.selected) {
                    selected_none = false;
                }
            })
            if (selected_none) {
                arr[0].selected = true;
            }
            state.major_range_obj = arr;
        },
        //单选高校层次
        reset_school_range: function(state, item) {
            console.log(item);
            let arr;
            arr = state.school_range_obj.map(function(value, index) {
                if (item.index == index) {
                    value.selected = item.selected;
                } else {
                    value.selected = false;
                }
                return value;
            })

            //所有不选的时候,不限高量
            let selected_none = true;
            arr.forEach(function(val, index) {
                if (val.selected) {
                    selected_none = false;
                } else {
                    val.selected = false;
                }
            })
            if (selected_none) {
                arr[0].selected = true;
            }
            state.school_range_obj = arr;
        },
        //多选高校地区
        reset_school_area: function(state, item) {
            console.log(item);
            //去掉不限高亮
            state.school_area_obj[0].selected = false;
            //如果点击的是不限,则别的高亮去掉
            if (item.index == 0) {
                state.school_area_obj.map(function(value, index) {
                    value.selected = (index == 0);
                    return value;
                })
                return;
            }
            state.school_area_obj.map(function(value, index) {
                if (item.index == index) {
                    value.selected = item.selected;
                }
                return value;
            })
            let selected_none = true;
            state.school_area_obj.forEach(function(val, index) {
                if (val.selected) {
                    selected_none = false;
                }
            })
            if (selected_none) {
                state.school_area_obj[0].selected = true;
            }
        },
        //关闭按钮
        clear_major: function(state) {
            state.major_range_obj.map(function(val, index) {
                val.selected = (index == 0);
            })
        },
        clear_range: function(state) {
            state.school_range_obj.map(function(val, index) {
                val.selected = (index == 0);
            })
        },
        clear_area: function(state) {
            state.school_area_obj.map(function(val, index) {
                val.selected = (index == 0);
            })
        },
        //弹框
        alert_tab: function(state) {
            console.log(state);
        }
    },
    getters: {
        selected_major_range: function(state) {
            let arr = [];
            state.major_range_obj.map(function(val, index) {
                if (val.selected) {
                    arr.push(val.value);
                }
            })
            return arr.join("");
        },
        selected_school_range: function(state) {
            let arr = [];
            state.school_range_obj.map(function(val, index) {
                if (val.selected) {
                    arr.push(val.value);
                }
            })
            return arr.join("");
        },
        selected_school_area: function(state) {
            let arr = [];
            state.school_area_obj.map(function(val, index) {
                if (val.selected) {
                    arr.push(val.value);
                }
            })
            return arr.join(",");
        }
    }
})
export default store;