<template>
    <div class="sidebar" >
        <el-menu
            default-active=""
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            :default-active="activeMenu"
            :unique-opened="false"
            :collapse-transition="false"
            mode="vertical">
            <SidebarItem   v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path"></SidebarItem>
        </el-menu>
    </div>
</template>

<script>
import eventVue from '@/utils/event'
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
        }
    },
    components:{
        SidebarItem:() => import('./components/SidebarItem')
    },
    props:{
        isCollapse:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        ...mapGetters([
        'permission_routes',
        // 'sidebar'
        ]),
        activeMenu() {
        const route = this.$route
        const { meta, path } = route
        if (meta.activeMenu) {
            return meta.activeMenu
        }
        return path
        },
    },
    methods: {
        changeParent(){
            this.$emit('toggleSideBar')
        },
    },
    created(){
        let _this = this
        eventVue.$on('toggleSideBar',() => {
            _this.changeParent()  
        })
    }
}
</script>

<style lang="scss" scoped>
.sidebar{
    height: 100%;
    /deep/ .el-menu-vertical-demo.el-menu{
        height: 100%;
    }
    /deep/ .el-menu-item-group__title{
        display: none;
    }
}
</style>