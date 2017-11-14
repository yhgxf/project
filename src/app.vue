 <template>
    <div class="route">
             <p class="tit">*由于2020年拟在京招生普通高校专业(类)选考科目范围尚未公布,暂时调用2018年拟在浙招生普通专业选考科目范围,该数据仅供参考,正式文件公布后会立即替换</p>
            <ul class="list">
                <li>
                    <router-link :to="{name:'overall'}">综合检索</router-link>
                </li>
                <li>
                    <router-link :to="{name:'college'}">高校检索</router-link>
                </li>
                <li>
                    <router-link :to="{name:'major'}">专业检索</router-link>
                </li>
            </ul>
            <router-view></router-view>
    </div>
</template> 
<script >
    export default{
        data(){
            return {}
        }
    }
</script> 

<style >
    a{
        text-decoration: none;
        color:#333;
        padding:5px 8px;
        font-size:14px;
    }
    .route{
        width: 1200px;
        margin:20px auto;
    }
    .tit{
        color:red;
        font-size: 12px;
    }
    .list{
        font-size:0;  
        padding-left: 0;
        border-bottom:1px solid #ccc;
        height:30px; 
        margin-top: 20px;
    }
    .list li{
       display:inline-block;
        list-style:none;
        cursor: pointer;
    }
    .list li:hover a{
        background: #0f9941;
        color: #fff;
        padding:5px 8px;
    }
    .router-link-active,.list li.selected{
         background: #0f9941;
        color: #fff;
    }
</style>
