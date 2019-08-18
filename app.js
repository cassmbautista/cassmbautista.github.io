Vue.use(Lightbox);
Vue.use(VueRouter);
Vue.use(Inkline);

const router = new VueRouter({
  mode: "history",
  base: '/',
  routes: [
    {
      path: '*',
      name: '404',
      component:  httpVueLoader("./views/NotFound.vue")
    },
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
  router,
  created () {
	const redirect = sessionStorage.redirect
	delete sessionStorage.redirect
    if (redirect && redirect != location.href) {
      this.$router.push(redirect)
    }
  }
});