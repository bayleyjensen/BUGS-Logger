import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Bug from "../views/Bug.vue";
// @ts-ignore
import BugDetails from "../views/BugDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Bug
  },
  {
    path: "/bugDetails",
    name: "bugDetails",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BugDetails
  }
];

const router = new VueRouter({
  routes
});

export default router;
