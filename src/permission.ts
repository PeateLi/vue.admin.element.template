import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css' 

NProgress.configure({ showSpinner: false }) //路由进度条配置


router.beforeEach(async(to, from, next) => { // 代码注释只留添加路由的
    NProgress.start()
    // if (to.path === '/login') {
    //     // 是登录页面
    //     next()
    //   } else {
    //     // 不是登录页面
    //     // 2. 判断 是否登录过
    //     let token = getToken()
    //     token ? next() : next('/login')
    //     next()
    //   }
    if(to.matched.length === 0){
        next('/404') // 判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
    }
    next()
    const accessRoutes = await store.dispatch('permission/generateRoutes')
    router.addRoutes(accessRoutes)
})
router.afterEach(() => {
    NProgress.done()
})
