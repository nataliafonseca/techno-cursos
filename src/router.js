import Vue from "vue";
import VueRouter from "vue-router";

import AulaView from "./views/AulaView.vue";
import ContatoView from "./views/ContatoView.vue";
import CursosView from "./views/CursosView.vue";
import CursoView from "./views/CursoView.vue";
import HomeView from "./views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cursos",
    name: "cursos",
    component: CursosView,
  },
  {
    path: "/cursos/:curso",
    name: "curso",
    component: CursoView,
    props: true,
    children: [
      {
        path: ":aula",
        name: "aula",
        component: AulaView,
        props: true,
      },
    ],
  },
  {
    path: "/contato",
    name: "contato",
    component: ContatoView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
