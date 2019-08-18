Vue.use(Lightbox);
Vue.use(VueRouter);


const router = new VueRouter({
  mode: "history",
  base: '/',
  routes: [
    {
      path: "/",
      component: httpVueLoader("./views/Home.vue")
    },
    {
      path: "/about",
      component: httpVueLoader("./views/About.vue")
    }
  ]
});

const app = new Vue({
  el: '#app',
  template: '<app></app>',
  components: {
    'app': httpVueLoader('./App.vue')
  },
  router
});