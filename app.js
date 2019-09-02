Vue.use(Lightbox);
Vue.use(Inkline);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: '/',
  routes: [
    {
      path: '*',
      name: '404',
      component:  httpVueLoader("/src/views/NotFound.vue")
    },
    {
      path: "/",
      name: "home",
      component: httpVueLoader("/src/views/Home.vue")
    },
    {
      path: "/gallery",
      name: "gallery",
      component: httpVueLoader("/src/views/ImageGallery.vue")
    },
    {
      path: "/blog",
      name: "blog",
      component: httpVueLoader("/src/views/Blog.vue")
    },
    {
      path: "/blog/:path",
      name: "blogPosts",
      component: httpVueLoader("/src/views/BlogPosts.vue"),
      props: (route) => ({
        path: route.params.path
      })
    },
    {
      path: "/contact",
      name: "contact",
      component: httpVueLoader("/src/views/Contact.vue")
    }
  ]
});

const app = new Vue({
  el: '#app',
  template: '<app></app>',
  components: {
    'app': httpVueLoader('/src/App.vue')
  },
  router,
  created () {
    const redirect = sessionStorage.redirect
    delete sessionStorage.redirect
    if (redirect && redirect !== location.href) {
      this.$router.push(redirect)
    }
  }
});
