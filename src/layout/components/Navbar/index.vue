<template>
    <div>
        <div>
            <Hamburger class="hamburger-container" @toggleClick="toggleSideBar"></Hamburger>
            <Breadcrumb></Breadcrumb>
        </div>
        <div class="user-dropdown">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img src="@/assets/f778738c-e4f8-4870-b634-56703b4acafe.gif" alt="用户头像" ><i class="el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <router-link to="/personal"><el-dropdown-item>个人中心</el-dropdown-item></router-link>
                    <router-link to="/login"><el-dropdown-item>退出</el-dropdown-item></router-link>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        
    </div>
</template>


<script>
import eventVue from '@/utils/event'
export default {
    components:{
        Hamburger:() => import('../Navbar/components/Hamburger'),
        Breadcrumb:() => import('./components/Breadcrumb')
    },
    methods:{
        toggleSideBar() {
            eventVue.$emit("toggleSideBar")
        }
    }
}
</script>


<style lang="scss" scoped>
.hamburger-container {
    line-height: 50px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
  .user-dropdown{
      float: right;
      line-height: 50px;
      height: 40px;
      margin-top: 5px;
      cursor: pointer;
      margin-right: 30px;
      img{
          width: 40px;
          height: 40px;
          border-radius: 10px;
      }
  }
  .el-dropdown-menu{
      top: 50px !important;
  }
  /deep/ .el-breadcrumb{
      float: left;
      margin-top: 20px;
  }
</style>