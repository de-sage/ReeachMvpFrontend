import Vue from "vue";
import Router from "vue-router";
import programmaticScrolling from "vuetify/es5/services/goto";
import LayoutButton from "@/components/CustomButton/Button";

Vue.use(Router);

export default new Router({
  base: "/",
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return programmaticScrolling(scrollTo);
  },
  routes: [
    {
      name: "Button",
      path: "/button",
      component: LayoutButton,
      meta: { title: "Semicolon - Test Route" }
    }


  ],
  mode: "history"
});
