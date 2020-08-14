<template>
    <div class="app-wrapper">
        <el-container>
            <el-aside :width='isCollapse?"65px":"220px"'>
                    <Sidebar :isCollapse='isCollapse' @toggleSideBar='toggleSideBar'></Sidebar>
            </el-aside>
            <el-container>
                <el-header>
                    <div class="navbar">
                        <Navbar></Navbar>
                    </div>
                    <div class="tags-view-container">
                            <Tagsview></Tagsview>
                    </div>
                </el-header>
                <el-main>
                    <transition name="fade-transform" mode="out-in">
                        <router-view/>
                    </transition>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>

export default {
    data(){
        return {
            isCollapse:false
        }
    },
    components:{
        Sidebar:() => import('./components/Sidebar/index'),
        Navbar:() => import('./components/Navbar/index'),
        Tagsview:() => import('./components/Tagsview/index')
    },
    methods:{
        toggleSideBar(){
            let _this = this
            _this.isCollapse = !_this.isCollapse
        }
    }
    
}
</script>

<style lang="scss" scoped>
@import '../styles/mixin.scss';
.app-wrapper{
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    .el-container{
        height: 100%;
    }
    /deep/ .el-header{
        height: 84px !important;
        padding: 0px !important;
        .navbar{
            height: 50px;
        }
        .tags-view-container{
            height: 34px;
            width: 100%;
            background: #fff;
            border-bottom: 1px solid #d8dce5;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04)
        }
    }
}

</style>