import Vue from "vue";
import VueRouter from "vue-router";



Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: '/films'
  },
  {
    path: "/films",
    redirect: '/films/playlist',
    name: "films",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/films/films"),
    children: [{
        path: 'playlist',
        component: () => import('../views/films/children/playlist')
      },
      {
        path: 'jijiang',
        component: () => import('../views/films/children/jijiang')
      }
    ]
  },
  {
    path: '/cinemas',
    component: () => import('../views/cinemas/cinemas')

  },
  {
    path: '/information',
    component: () => import('../views/information/information')

  },
  {
    path: '/home',
    component: () => import('../views/home/home')

  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,

});

export default router;