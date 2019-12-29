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
    path: "/bugs/:id",
    name: "bugDetails",
    component: BugDetails
  }
];

const router = new VueRouter({
  routes
});

export default router;
