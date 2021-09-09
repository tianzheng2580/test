import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import item from '@/components/item'
import About from "../views/About";
// import hell from "../views/hell.vue";
const hell =()=>import('../views/hell');
import meizu from "../views/meizu.vue";
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home

  },
  {
    path:'/item/:id',
    name:'Item',
    component:item
  },
  {
    path:'/hell',
    name:'Hell',
    component:hell,
    //resolve=>(require(["@/components/HelloWorld"],resolve
    meta: {
      auth: true
    }
  },
  {
    path:'/about',
    name:'About',
    component: About,
    meta: {
      auth: false
    },
  },
  {
    path:'/meizu',
    name:'Meizu',
    component: meizu,

    meta: {
      auth: true
    }
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   if(to.meta.auth){
//     next();
//   }else {
//     next({
//       path:'/hell'
//     });
//   }
// });


export default router
